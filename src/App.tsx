import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MantineProvider } from "@mantine/core";
import { ToastContainer } from "react-toastify";
import { AppRouter } from "@/app/router/AppRouter";
import "@mantine/core/styles.css";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 1000 * 60 * 5,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <MantineProvider>
      <AppRouter />
      <ToastContainer position="top-right" autoClose={3500} />
    </MantineProvider>
  </QueryClientProvider>
);

export default App;
