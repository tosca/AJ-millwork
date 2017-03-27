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

        public ActionResult ArchitecturalMillwork()
        {
            return View();
        }
       
        public ActionResult Portfolio()
        {
            return View();
        }

        public ActionResult Contact()
        {         
            return View();
        }
    }
}