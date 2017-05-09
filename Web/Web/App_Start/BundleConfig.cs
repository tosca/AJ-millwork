using System.Web;
using System.Web.Optimization;

namespace Web
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js",
                        "~/js/jquery.hover-dropdown-menu-addon.js",
                        "~/js/jquery.easing.1.3.js",
                        "~/js/jquery.sticky.js"));

         //   bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
           //             "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js",
                      "~/js/hover-dropdown-menu.js",
                      "~/js/equalheights.js",
                      "~/js/equalheights-init.js",
                      "~/js/jquery.mixitup.min.js",
                      "~/js/jquery.appear.js",
                      "~/js/effect.js",
                      "~/js/jquery.prettyPhoto.js",
                      "~/js/isotope.min.js",
                      "~/js/venobox.min.js",
                      "~/js/custom.js"));

            bundles.Add(new StyleBundle("~/bundles/css").Include(
                    "~/css/bootstrap.css",
                      "~/css/hover-dropdown-menu.css",
                      "~/css/animate.min.css",
                      "~/css/venobox.css",
                      "~/css/prettyPhoto.css",
                      "~/css/style.css",
                      "~/css/responsive.css"));
        }
    }
}
