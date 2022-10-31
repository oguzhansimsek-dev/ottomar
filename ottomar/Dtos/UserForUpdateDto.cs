using System;
using System.ComponentModel.DataAnnotations;

namespace ottomar.Dtos{
  public class UserForUpdateDto{

    public int userId { get; set; }
    public string username { get; set; }
    public string firstname { get; set; }
    public string lastname { get; set; }
    public string oldPassword { get; set; }
    public string newPassword { get; set; }

  }

}