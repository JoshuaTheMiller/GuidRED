using Microsoft.AspNetCore.Mvc;
using System;

namespace GuidRed.Controllers
{
    public class ApiController : Controller
    {
        public IActionResult GenerateGuid()
        {
            return Ok(Guid.NewGuid().ToString());
        }
    }
}
