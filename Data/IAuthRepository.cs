using System;
using System.Threading.Tasks;
using Eiibox.API.Models;

namespace Eiibox.API.Data
{
    public interface IAuthRepository
    {
        Task<User> Register(User user, string password);
        Task<User> Login(string username, string password);
        Task<bool> UserExists(string username);
    }
}
