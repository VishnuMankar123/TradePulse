using System.ComponentModel.DataAnnotations;

namespace TradePulse.Model
{
    public class User
    {
        public Guid Id { get; set; }

        [Required]
        [MaxLength(100)]
        public string Name { get; set; }

        [Required]
        [MaxLength(150)]
        public string Email { get; set; }

        [Required]
        public string PasswordHash { get; set; }

        public string Role { get; set; }

        public DateTime CreatedAt { get; set; }
    }
}
