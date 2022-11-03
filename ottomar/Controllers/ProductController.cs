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
  public class ProductController : Controller {

    public OttomarDbContext _dbContext;
    public ProductController (OttomarDbContext dbContext){
      _dbContext = dbContext;
    }

    [HttpGet("GetProducts")]
    public IActionResult GetProducts(){
      try{
        List<Product> products = _dbContext.Products.ToList();

        if(products.Count() == 0){
          return StatusCode(404, "No products found");
        }

        return Ok(products);
      }catch(Exception e){
        return StatusCode(500, e.Message);
      }
    }

    [HttpGet("GetProductsByCategoryId/{categoryId}")]
    public IActionResult GetProductsByCategoryId([FromRoute] int categoryId){
      try{
        List<Product> products = _dbContext.Products.Where(p => p.categoryId == categoryId).ToList();
        
          return Ok(products);

      }catch(Exception e){
        return StatusCode(500, e.Message);
      }
    }

    [HttpPost("AddProduct")]
    public IActionResult AddProduct([FromBody] AddProductDto newProduct){
      try{
        Product product = new Product();

        product.productName = newProduct.productName;
        product.productDesc = newProduct.productDesc;
        product.productCode = newProduct.productCode;
        product.stock = newProduct.stock;
        product.categoryId = newProduct.categoryId;

        _dbContext.Products.Add(product);
        _dbContext.SaveChanges();

        return Ok(product);

      }catch(Exception e){
        return StatusCode(500, e.Message);
      }
    }
    [HttpDelete("DeleteProduct")]
    public IActionResult DeleteProduct([FromBody] int productId){
      try{
        Product product = _dbContext.Products.FirstOrDefault( p => p.productId == productId);

        _dbContext.Entry(product).State = EntityState.Deleted;
        _dbContext.SaveChanges();

        return Ok(product);

      }catch(Exception e){
        return StatusCode(500, e.Message);
      }
    }

    [HttpPut("UpdateProduct")]
    public IActionResult UpdateProduct([FromBody] Product updatedProduct){
      try{  
        Product product = _dbContext.Products.FirstOrDefault( p=> p.productId == updatedProduct.productId );

        product.productName = updatedProduct.productName;
        product.productDesc = updatedProduct.productDesc;
        product.productCode = updatedProduct.productCode;
        product.stock = updatedProduct.stock;
        product.categoryId = updatedProduct.categoryId;

        _dbContext.Entry(product).State = EntityState.Modified;
        _dbContext.SaveChanges();

        return Ok(product);

      }catch(Exception e){
        return StatusCode(500, e.Message);
      }

    }

  }
}