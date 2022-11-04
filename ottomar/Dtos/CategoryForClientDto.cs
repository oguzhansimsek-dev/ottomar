using System;
using System.ComponentModel.DataAnnotations;

namespace ottomar.Dtos{
  public class CategoryForClientDto{

    public int categoryId { get; set; }
    public string categoryName { get; set; }
    public string categoryLink {get; set;}
    
  }
}