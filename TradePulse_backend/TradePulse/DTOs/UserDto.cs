using System.ComponentModel.DataAnnotations;

namespace TradePulse.DTOs
{
    public class UserDto
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }
    }
}