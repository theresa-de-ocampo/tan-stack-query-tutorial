import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Demo from "./Demo";
import { useState } from "react";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false
        // staleTime: Infinity
      }
    }
  });

  // This will cause the Demo component to unmount, and remount
  // By default, tan-stack-query will always make a request
  const [showPage, setShowPage] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <button onClick={() => setShowPage((prevValue) => !prevValue)}>
          Toggle
        </button>
        <hr />

        {showPage && <Demo />}
      </main>
    </QueryClientProvider>
  );
}

export default App;
