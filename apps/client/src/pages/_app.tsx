import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react"
import { createTable } from "db";

export default function App({ Component, pageProps }: AppProps) {
  return <SessionProvider session={pageProps.session}>
  <Component {...pageProps} />
  </SessionProvider>;
}

// export async function getServerSideProps(context) {
//   // Fetch data from an external API or do any server-side processing
//   createTable()
//   console.log("abc")
//   // Pass the data to the page via props
//   return {
//     props: {
//         // Assuming `data` has a field called `message`
//     },
//   };
// }