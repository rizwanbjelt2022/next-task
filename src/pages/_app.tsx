import '@/styles/globals.css'
// import "../css/customcss.css";
import "./style.css"
// import 'boostrap/dist/css/boostrap.min.css'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
