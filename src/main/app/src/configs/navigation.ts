import menuUI from "./menus/ui.menu";
import menuApps from "./menus/apps.menu";
import menuPages from "./menus/pages.menu";
import menuCharts from "./menus/charts.menu";
import menuUML from "./menus/uml.menu";
import menuLanding from "./menus/landing.menu";
import menuData from "./menus/data.menu";
import menuAi from "./menus/ai.menu";

/**
 * Aqui que está todos os menus
 */
export default {
  menu: [
    {
      text: "",
      key: "",
      items: [
        {
          key: "menu.home",
          text: "Home",
          link: "/",
          icon: "mdi-home",
        },
        {
          key: "menu.dashboard",
          text: "Dashboard",
          link: "/dashboard",
          icon: "mdi-view-dashboard-outline",
        },
        {
          icon: "mdi-login",
          key: "menu.authLogin",
          text: "Signin / Login",
          link: "/auth/signin",
        },
        {
          icon: "mdi-file-lock-outline",
          key: "menu.admin",
          text: "Admin",
          regex: /^\/auth/,
          items: [
            {
              icon: "mdi-account",
              text: "Users",
              link: "/users",
              key: "menu.users",
            },
            {
              icon: "mdi-account",
              text: "Roles",
              link: "/roles",
              key: "menu.roles",
            },
          ],
        },
      ],
    },
    // {
    //   text: "chatgpt",
    //   items: menuAi,
    // },
    // // {
    // //   text: "Apps",
    // //   items: menuApps,
    // // },
    // {
    //   text: "Data",
    //   items: menuData,
    // },
    // {
    //   text: "Landing",
    //   items: [
    //     ...menuLanding,
    //     // {
    //     //   icon: "mdi-airplane-landing",
    //     //   key: "menu.landingPage",
    //     //   text: "Landing Page",
    //     //   link: "/landing",
    //     // },
    //   ],
    // },

    //   {
    //     text: "UI - Theme Preview",
    //     items: menuUI,
    //   },
    // {
    //   text: "Pages",
    //   key: "menu.pages",
    //   items: menuPages,
    // },
    //   {
    //     text: "Charts",
    //     key: "menu.charts",
    //     items: menuCharts,
    //   },
    //   {
    //     text: "UML",
    //     // key: "menu.uml",
    //     items: menuUML,
    //   },
  ],
};
