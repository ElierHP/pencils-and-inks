import "normalize.css";
import GlobalStyles from "../styles/globalStyles";
import { QueryClient, QueryClientProvider } from "react-query";
import { UserProvider } from "../context/UserProvider";

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </UserProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
