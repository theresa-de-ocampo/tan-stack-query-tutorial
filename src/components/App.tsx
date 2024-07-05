import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// * Components
import Menu from "./0-generic/Menu";
import ErrorPage from "./0-generic/ErrorPage";
import Overview from "./1-overview/Overview";
import InfiniteScroll from "./2-infinite-scroll/InfiniteScroll";

// * Constants
import ROUTES from "../common/constants/routes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Menu />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: ROUTES.OVERVIEW,
          element: <Overview />
        },
        {
          path: ROUTES.INFINITE_SCROLL,
          element: <InfiniteScroll />
        }
      ]
    }
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
