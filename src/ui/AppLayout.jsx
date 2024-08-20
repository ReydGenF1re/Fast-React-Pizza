import React from "react";
import Header from "./Header.jsx";
import CartOverview from "../features/cart/CartOverview.jsx";
import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Loader from "./Loader.jsx";

function AppLayout(props) {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const location = useLocation();

  return (
    <div className={"grid h-screen grid-rows-[auto_1fr_auto]"}>
      {isLoading && <Loader />}
      <Header />
      <div
        className={`overflow-auto ${location.pathname === "/" ? "bg-[url('/src/assets/pizza-bg.png')] bg-cover bg-top" : ""}`}
      >
        <main className={"mx-auto max-w-3xl"}>
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
