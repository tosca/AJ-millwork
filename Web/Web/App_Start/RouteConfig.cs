using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace Web
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
               "AJMillwork",
               "AJMillwork",
               new { controller = "Home", action = "AJMillwork" }
               );

            routes.MapRoute(
               "Portfolio",
               "Portfolio",
               new { controller = "Home", action = "Portfolio" }
               );

            routes.MapRoute(
               "Services",
               "Services",
               new { controller = "Home", action = "Services" }
               );

            routes.MapRoute(
              "Designer",
              "Designer",
              new { controller = "Home", action = "Designer" }
              );

            routes.MapRoute(
             "Contact",
             "Contact",
             new { controller = "Home", action = "Contact" }
             );

            routes.MapRoute(
            "Designer-Furniture",
            "Contact",
            new { controller = "Home", action = "DesignerFurniture" }
            );

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "AJMillwork", id = UrlParameter.Optional }
            );



        }
    }
}
