using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;
using ottomar.Data;
using ottomar.Models;
using ottomar.Dtos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ottomar.Controllers{
  [Route("api/[controller]")]
  public class CategoryController : Controller {
    
    OttomarDbContext _dbContext;
    public CategoryController(OttomarDbContext dbContext){
      _dbContext = dbContext;
    }

    [HttpGet("GetCategories")]
    public IActionResult GetCategories(){
      try{
        List<Category> categories = _dbContext.Categories.ToList();

        if(categories.Count() == 0){
          return StatusCode(404, "No category found");
        }

        return Ok(categories);
      }catch(Exception e){
        return StatusCode(500, e.Message);
      }
    }

    [HttpPost("AddCategory")]
    public IActionResult AddCategory([FromBody] AddCategoryDto newCategory){

      Category category = new Category();

      try{
        
        if(_dbContext.Categories.FirstOrDefault(c => c.categoryName.ToLower() == newCategory.categoryName.ToLower()) != null){
          return StatusCode(409, "Category already exists");
        }

        category.categoryName = newCategory.categoryName;

        _dbContext.Categories.Add(category);
        _dbContext.SaveChanges();

        return Ok(category);;

      }catch(Exception e){
        return StatusCode(500, e.Message);
      }
    }
    
    [HttpDelete("DeleteCategory")]
    public IActionResult DeleteCategory([FromBody] int categoryId){
      try{
        Category category = _dbContext.Categories.FirstOrDefault(c => c.categoryId == categoryId);
        
        _dbContext.Entry(category).State = EntityState.Deleted;
        _dbContext.SaveChanges();

        return Ok(category);
        
      }catch(Exception e){
        return StatusCode(500, e.Message);
      }
    }

    [HttpPut("UpdateCategory")]
    public IActionResult UpdateCategory([FromBody] Category updatedCategory){
      try{
        Category category = _dbContext.Categories.FirstOrDefault(c => c.categoryId == updatedCategory.categoryId);

        category.categoryName = updatedCategory.categoryName;

        _dbContext.Entry(category).State = EntityState.Modified;
        _dbContext.SaveChanges();

        return Ok(category);
      }catch(Exception e){
        return StatusCode(500, e.Message);
      }
    }

  }


}