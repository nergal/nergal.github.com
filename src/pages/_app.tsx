import Head from "next/head";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
	useEffect(() => {
		document.documentElement.setAttribute("lang", "en");
	}, []);

	return (
		<>
			<Head>
				<title>Artem Poliukhovych | CV</title>
				<meta
					name="description"
					content="Discover the professional portfolio and CV of Artem Poliukhovych, a software engineer with expertise in the software development"
				/>
			</Head>
			<Component {...pageProps} />
		</>
	);
}
