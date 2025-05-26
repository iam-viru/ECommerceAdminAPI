using System.ComponentModel.DataAnnotations;

namespace ECommerceAdminPanel.Models
{
    public class RegisterModel
    {
        public string FullName { get; set; } = string.Empty;
        [Required]
        [EmailAddress]
        public string Email { get; set; } = string.Empty;
        [Required]
        [MinLength(6)]
        public string Password { get; set; } = string.Empty;

        public string Role { get; set; } = "Admin"; // Default to Admin, can be extended to other roles
    }
}
