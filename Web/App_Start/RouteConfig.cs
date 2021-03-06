﻿using System;
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
               "ArchitecturalMillwork",
               "ArchitecturalMillwork",
               new { controller = "Home", action = "ArchitecturalMillwork" }
               );

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "AJMillwork", id = UrlParameter.Optional }
            );
        }
    }
}
