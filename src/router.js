import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import GameDice from "./pages/GameDice";
import GameRPS from "./pages/GameRPS";
import Home from "./pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "dise",
        element: <GameDice />,
      },
      {
        path: "rock-paper-scissors",
        element: <GameRPS />,
      },
    ],
  },
  {
    path: "/*",
    element: <Layout />,
  },
]);
