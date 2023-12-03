import CreateAds from "./Components/CreateAds";
import CreateMediaAds from "./Components/CreateMediaAds";
import CreateTextAds from "./Components/CreateTextAds";
import HelpPage from "./Components/HelpPage";
import HomePage from "./Components/HomePage";

const routes = [
      {
        path: "/",
        component: HomePage,
      },
      {
        path: "/create-ads",
        component: CreateAds,
      },
      {
        path: "/helpPage",
        component: HelpPage,
      },
      {
        path: "/createTextAds",
        component: CreateTextAds,
      },
      {
        path: "/createMediaAds",
        component: CreateMediaAds,
      },
];

export default routes;
