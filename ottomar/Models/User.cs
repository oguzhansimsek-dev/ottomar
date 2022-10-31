using System;
using System.ComponentModel.DataAnnotations;

namespace ottomar.Models{
  public class User{
    [Key]
    public int userId { get; set; }
    public string username { get; set; }
    public string firstname { get; set; }
    public string lastname { get; set; }
    public int typeId { get; set; }
    public byte[] passHash { get; set; }
    public byte[] passSalt { get; set; }
  }
}