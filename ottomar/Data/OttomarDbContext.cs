using System;
using Microsoft.EntityFrameworkCore;
using ottomar.Models;

namespace ottomar.Data
{
    public class OttomarDbContext : DbContext
    {
        public OttomarDbContext(DbContextOptions<OttomarDbContext> options) : base(options) { }

        public DbSet<Product> Products { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<UserType> UserTypes { get; set; }
        public DbSet<User> Users { get; set; }
    }
}
