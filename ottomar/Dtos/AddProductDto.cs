using System;
using System.ComponentModel.DataAnnotations;

namespace ottomar.Dtos{
  public class AddProductDto{

    public string productName {get; set; }
    public string productDesc {get; set; }
    public string productCode {get; set; }
    public int stock {get; set; }
    public int categoryId {get; set; }
    
  }
}