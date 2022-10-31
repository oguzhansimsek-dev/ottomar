using System;
using System.ComponentModel.DataAnnotations;

namespace ottomar.Dtos{
  public class UserForLoginDto{
    public string username { get; set; }
    public string password { get; set; }
  }
}