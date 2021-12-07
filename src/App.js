import "./styles.css";
import { Router, Outlet, ReactLocation } from "react-location";
import CreateCard from "./CreateCard";
import { useState } from "react";
import CardShowcase from "./CardShowcase";

const location = new ReactLocation();

export default function App() {
  const [globalDataStore, setGlobalData] = useState({
    users: []
  });

  const routes = [
    {
      path: "/",
      element: (
        <CreateCard
          globalDataStore={globalDataStore}
          setGlobalData={setGlobalData}
        />
      )
    },
    {
      path: "showcase",
      element: <CardShowcase globalDataStore={globalDataStore} />
    }
  ];

  return (
    <Router routes={routes} location={location}>
      <div>
        <Outlet />
      </div>
    </Router>
  );
}
