using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Web.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult AJMillwork()
        {
            return View();
        }

        public ActionResult Services()
        {
            return View();
        }
       
        public ActionResult Portfolio()
        {
            return View();
        }

        public ActionResult Designer()
        {
            return View();
        }

  


        [HttpGet]
        public ActionResult Contact()
        {


            return View();
        }


     //   public ActionResult ContactSubmited()
     //   {

      //      var result = new FilePathResult("~/Views/Home/AJMillwork.html", "text/html");
      //      return result;

     //   }


    }
}