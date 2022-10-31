using System;
using  System.ComponentModel.DataAnnotations;

namespace ottomar.Dtos{
  public class AddUserDto {

    public string username { get; set; }
    public string firstname { get; set; }
    public string lastname { get; set; }
    public string password { get; set; }

  }
}