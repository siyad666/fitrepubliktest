
using Microsoft.EntityFrameworkCore;
using fitrepubliktest1.Models;

namespace fitrepubliktest1.DB
{
    public class TestDbContext:DbContext

    {
        public TestDbContext(DbContextOptions<TestDbContext> options) : base(options)
        {
        }
        public DbSet<Customer> CustomerDetails { get; set; }
    }
}
