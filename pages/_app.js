import "../styles/globals.css";
import Head from "next/head";
import React from "react";
function MyApp({ Component, pageProps }) {
	return (
		<React.Fragment>
			<Head>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=Raleway:wght@300;500;700&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<Component {...pageProps} />
		</React.Fragment>
	);
}

export default MyApp;
