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
        List<CategoryForClientDto> newCategories = new List<CategoryForClientDto>();

        if(categories.Count() == 0){
          return StatusCode(404, "No category found");
        }

        foreach( Category c in categories ){
          CategoryForClientDto newCat = new CategoryForClientDto();
          newCat.categoryId = c.categoryId;
          newCat.categoryName = c.categoryName;
          newCat.categoryLink = Cevir(c.categoryName)+ "-cId-" + c.categoryId;

          newCategories.Add(newCat);
        }

        return Ok(newCategories);
      }catch(Exception e){
        return StatusCode(500, e.Message);
      }
    }
    [HttpGet("GetCategoryByCategoryLink/{link}")]
    public IActionResult GetCategoryByCName([FromRoute] string link){
      try{
        string[] arr = new string[] {};
        arr = link.Split('-');
        int cId = Int32.Parse(arr[ arr.Length - 1 ]);
        Category category = _dbContext.Categories.FirstOrDefault( c => c.categoryId == cId);
        
        return Ok(category);

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

    public string Cevir(string text) {
    
      text=  text.ToLower();
      text = text.Replace('ö', 'o');
      text = text.Replace('ü', 'u');
      text = text.Replace('ğ', 'g');
      text = text.Replace('ş', 's');
      text = text.Replace('ı', 'i');
      text = text.Replace('ç', 'c');
      text = text.Replace(' ', '-');

      return text;
    }
  }
} 