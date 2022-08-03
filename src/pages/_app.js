import "normalize.css";
import GlobalStyles from "../styles/globalStyles";
import { QueryClient, QueryClientProvider } from "react-query";
import { UserProvider } from "../context/UserProvider";
import { CartProvider } from "../context/CartProvider";

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <CartProvider>
          <GlobalStyles />
          <Component {...pageProps} />
        </CartProvider>
      </UserProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
