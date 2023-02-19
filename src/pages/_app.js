import { BusinessProvider } from "@/contexts/BusinessContext";
import Layout from "@/layouts";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <BusinessProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </BusinessProvider>
  );
}
