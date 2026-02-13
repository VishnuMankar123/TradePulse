using Microsoft.EntityFrameworkCore;
using TradePulse.Model;

namespace TradePulse.Repository
{
    public class TradePulseDbContext : DbContext
    {
        public TradePulseDbContext(DbContextOptions<TradePulseDbContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
    }
}