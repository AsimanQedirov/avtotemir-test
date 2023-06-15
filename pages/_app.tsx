import '@/assets/styles/style.scss'
import type { AppProps } from 'next/app'
import {MantineProvider} from "@mantine/core";
import Layout from "@/components/layouts";


export default function App({Component, pageProps}: AppProps) {
  return <div>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MantineProvider>
  </div>
}
