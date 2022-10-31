using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ottomar.Models;
using ottomar.Data;
using ottomar.Dtos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ottomar.Controllers{
  [Route("api/[controller]")]
  public class UserController : Controller{

    public OttomarDbContext _dbContext;

    public UserController(OttomarDbContext dbContext){
      _dbContext = dbContext;
    }

    [HttpGet("GetUserTypes")]
    public IActionResult GetUserTypes(){
      try{
        List<UserType> userTypes = _dbContext.UserTypes.ToList();

        return Ok(userTypes);

      }catch(Exception e){
        return StatusCode(500,e.Message);
      }
    }

    [HttpPost("AddUserType")]
    public IActionResult AddUserType([FromBody] string typeName){
      UserType userType = new UserType();

      try{
        if(_dbContext.UserTypes.FirstOrDefault(t => t.typeName.ToLower() == typeName.ToLower()) != null){
          return StatusCode(409, "Type already exists");
        }else{
          userType.typeName = typeName;

          _dbContext.UserTypes.Add(userType);
          _dbContext.SaveChanges();

          return Ok(userType);
        }

        

      }catch(Exception e){
        return StatusCode(500, e.Message);
      }
    }

    //! UserType silindiğinde bu tipe sahip kullanıcıları da sil.

    [HttpPut("DeleteUserType")]
    public ActionResult DeleteUserType([FromBody] int typeId){
      try{
        UserType userType = _dbContext.UserTypes.FirstOrDefault(ut => ut.typeId == typeId);
        
        _dbContext.Entry(userType).State = EntityState.Deleted;
        _dbContext.SaveChanges();

        return Ok(userType);

      }catch(Exception e){
        return StatusCode(500, e.Message);
      }
    }

    [HttpGet("GetUsers")]
    public ActionResult GetUsers(){
      try{
        List<User> users = _dbContext.Users.ToList();
        
        if(users == null){
          return StatusCode(404, "No users found");
        }

        return Ok(users);

      }catch(Exception e){
        return StatusCode(500, e.Message);
      }
    }

    [HttpPost("AddUser")]
    public IActionResult AddUser([FromBody] AddUserDto newUser){
      User user = new User();
      byte[] passwordHash, passwordSalt;

      try{
        if(UserExists(newUser.username)){
          return StatusCode(409, "Kullanıcı adı daha önce alınmış.");
        }else{
          if(PasswordCheck(newUser.password)){
            return StatusCode(500, "Şifre en az 8 karakter olmalı.");
          }else{
            user.username = newUser.username;
            user.firstname = newUser.firstname;
            user.lastname = newUser.lastname;
            user.typeId = 2;
            
            CreatePasswordHash(newUser.password , out passwordHash, out passwordSalt);
            user.passHash = passwordHash;
            user.passSalt = passwordSalt;
          }
        }

        _dbContext.Users.Add(user);
        _dbContext.SaveChanges();

        return Ok(user);

      }catch(Exception e){
        return StatusCode(500, e.Message);
      }
    }

    [HttpDelete("DeleteUser")]
    public IActionResult DeleteUser([FromBody] int userId){
      try{
        User user = _dbContext.Users.FirstOrDefault(u => u.userId == userId);

        _dbContext.Entry(user).State = EntityState.Deleted;
        _dbContext.SaveChanges();

        return Ok(user);

      }catch(Exception e){
        return StatusCode(500, e.Message);
      }
    }

    [HttpPut("UpdateUser")]
    public IActionResult UpdateUser([FromBody] UserForUpdateDto updatedUser ){
      byte[] passwordHash, passwordSalt;

      try{
        User user = _dbContext.Users.FirstOrDefault(u => u.userId == updatedUser.userId);

        bool result = VerifyPasswordHash(updatedUser.oldPassword, user.passHash, user.passSalt);

        if(result){
          user.username = updatedUser.username;
          user.firstname = updatedUser.firstname;
          user.lastname = updatedUser.lastname;

          if(updatedUser.newPassword != "" && !PasswordCheck(updatedUser.newPassword) ){

            CreatePasswordHash(updatedUser.newPassword , out passwordHash, out passwordSalt);
            user.passHash = passwordHash;
            user.passSalt = passwordSalt;
          }
        }else{
          return StatusCode(500, "Eski şifre hatalı");
        }

        _dbContext.Entry(user).State = EntityState.Modified;
        _dbContext.SaveChanges();

        return Ok(updatedUser);
        
      }catch(Exception e){
        return StatusCode(500, e.Message);
      }
    }

    [HttpGet("Login")]
    public IActionResult Login([FromBody] UserForLoginDto userDto){
      User user = new User();
      try{
        
        if(UserExists(userDto.username)){
          user = _dbContext.Users.FirstOrDefault(u => u.username == userDto.username);
          bool result = VerifyPasswordHash(userDto.password, user.passHash, user.passSalt);

          if(result){
            return Ok(user);
          }else{
            return StatusCode(500, "Incorrect username or password");
          }

        }else{
          return StatusCode(500, "Incorrect username or password");
        }
        
      }catch(Exception e){
        return StatusCode(500, e.Message);
      }
    }

    private void CreatePasswordHash(
            string password,
            out byte[] passwordHash,
            out byte[] passwordSalt
        )
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

    private bool VerifyPasswordHash(
        string password,
        byte[] userPasswordHash,
        byte[] userPasswordSalt
    )
    {
        using (var hmac = new System.Security.Cryptography.HMACSHA512(userPasswordSalt))
        {
            var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            for (int i = 0; i < computedHash.Length; i++)
            {
                if (computedHash[i] != userPasswordHash[i])
                {
                    return false;
                }
            }
            return true;
        }
    }

    private bool UserExists(string username)
    {
        if (_dbContext.Users.FirstOrDefault(u => u.username == username) != null)
        {
            return true;
        }
        return false;
    }
    
    private bool PasswordCheck(string password)
    {
        if (password.Length < 8)
        {
            return true;
        }
        else
        {
            return false;
        }
    }



    //!Class End
  }
  //! namespace end
}