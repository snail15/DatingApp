using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ErrorController : BaseApiController
    {
        private readonly DataContext _context;
        public ErrorController(DataContext context)
        {
            _context = context;
        }
    
        [Authorize]
        [HttpGet("auth")]
        public ActionResult<string> GetSecret()
        {
            return "secret text";
        }

        [HttpGet("not-found")]
        public ActionResult<AppUser> GetNotFound()
        {
            var user = _context.Users.Find(-1);
            if(user == null) return NotFound();
            return Ok(user);
        }

        [HttpGet("server-error")]
        public ActionResult<AppUser> GetServerError()
        {
            var user = _context.Users.Find(-1);
            var error = user.ToString();
            
            return Ok(user);
        }

        [HttpGet("bad-request")]
        public ActionResult<string> GetBadRequest()
        {
            return BadRequest("Not a good request");
        }
    }
}