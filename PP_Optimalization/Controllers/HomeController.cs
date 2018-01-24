using System;
using Microsoft.AspNetCore.Mvc;
using PP_Optimalization.Service;

namespace PP_Optimalization.Controllers
{
  [Route("[controller]")]
  public class HomeController : Controller
  {
    private readonly IMathService _mathService;

    public HomeController(IMathService mathService)
    {
      _mathService = mathService;
    }

    [HttpGet]
    public IActionResult Get()
    {
      var valuesData = new ValuesData
      {
        A = 10,
        B = 10,
        C = 10,
        D = 10,
        E = 10,
        X = 10,
        Count = 1,
        N = 10
      };
      var data = _mathService.GetExamples(valuesData);

      return Ok(data);
    }

    [HttpPost]
    public IActionResult Post([FromBody]ValuesData valuesData)
    {
      var data = _mathService.GetExamples(valuesData);

      return Ok(data);
    }
  }
}
