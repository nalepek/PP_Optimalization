using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace PP_Optimalization.Controllers
{
  [Route("api/[controller]")]
  public class ValuesController : Controller
  {
    [HttpGet]
    public IEnumerable<string> Get()
    {
      return new string[] { "Hello", "World" };
    }
  }
}
