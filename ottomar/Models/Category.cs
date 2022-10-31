using System;
using System.ComponentModel.DataAnnotations;

namespace ottomar.Models{
  public class Category{
    [Key]
    public int categoryId { get; set; }
    public string categoryName { get; set; }

  }
}