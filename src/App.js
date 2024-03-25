import { GlobalStyle } from "./styles/reset";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
