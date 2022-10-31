using System;
using System.ComponentModel.DataAnnotations;

namespace ottomar.Models{
  public class Product {
    [Key]
    public int productId {get; set;}
    
    public string productName {get; set; }
    public string productDesc {get; set; }
    public string productCode {get; set; }
    public int stock {get; set; }
    public int categoryId {get; set; }
  }
}