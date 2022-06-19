import type { AppProps } from 'next/app'
import 'antd/dist/antd.css';
import Head from 'next/head';
import { Layout, Menu } from 'antd';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout className='layout'>
      <Header>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={new Array(3).fill(null).map((_, index) => {
          const key = index + 1;
          return {
            key,
            label: `nav ${key}`,
          };
        })}
      />
      </Header>
        <Component {...pageProps} />
      <Footer>Footer</Footer>
    </Layout>
  )
}

export default MyApp
