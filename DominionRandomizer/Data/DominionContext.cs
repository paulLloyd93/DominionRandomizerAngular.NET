using DominionRandomizer.Models;
using Microsoft.EntityFrameworkCore;

namespace DominionRandomizer.Data
{
    public class DominionContext : DbContext
    {
        public DominionContext(DbContextOptions<DominionContext> options) : base(options)
        {}

        public DbSet<Card> card { get; set; }
    }
}
