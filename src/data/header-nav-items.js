export default function() {
  return [
    {
      title: "Dashboards",
      htmlBefore: '<i class="material-icons">&#xE2C7;</i>',
      items: [
        {
          title: "Analytics",
          to: "/analytics"
        },
        {
          title: "Store",
          to: "/ecommerce"
        },
        {
          title: "Blog",
          to: "/blog-overview"
        }
      ]
    },
    {
      title: "Header Nav",
      htmlBefore: '<i class="material-icons">view_day</i>',
      to: "/header-navigation"
    },
    {
      title: "Icon Sidebar",
      htmlBefore: '<i class="material-icons">&#xE251;</i>',
      to: "/icon-sidebar-nav"
    },
    {
      title: "Components",
      htmlBefore: '<i class="material-icons">view_module</i>',
      items: [
        {
          title: "Overview",
          to: "/components-overview"
        },
        {
          title: "Blog Posts",
          to: "/blog-posts"
        }
      ]
    },
    {
      title: "File Managers",
      htmlBefore: '<i class="material-icons">&#xE2C7;</i>',
      items: [
        {
          title: "File Manager - List",
          to: "/file-manager-list"
        },
        {
          title: "File Manager - Cards",
          to: "/file-manager-cards"
        }
      ]
    },
    {
      title: "Variabelen",
      htmlBefore: '<i class="material-icons"></i>',
      to: "/variabelen"
    },
    {
      title: "User Account",
      htmlBefore: '<i class="material-icons">&#xE8B9;</i>',
      items: [
        {
          title: "User Profile",
          to: "/user-profile"
        },
        {
          title: "Maatregel Toevoegen",
          to: "/maatregel-toevoegen"
        },
        {
          title: "Login",
          to: "/login"
        },
        {
          title: "Register",
          to: "/register"
        },
        {
          title: "Forgot Password",
          to: "/forgot-password"
        },
        {
          title: "Reset Password",
          to: "/reset-password"
        }
      ]
    },
    {
      title: "Errors",
      htmlBefore: '<i class="material-icons">error</i>',
      to: "/errors"
    }
  ];
}
