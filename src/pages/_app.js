import '@/styles/globals.css';
import Layout from '@/Components/Layout';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
	return (
		<Layout>
			<Head>
				<title>Myria</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/logo.ico" />
			</Head>
			<Component {...pageProps} />
		</Layout>
	);
}
