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
				<script>
					{(function (w, d, s, l, i) {
						w[l] = w[l] || [];
						w[l].push({
							"gtm.start": new Date().getTime(),
							event: "gtm.js",
						});
						var f = d.getElementsByTagName(s)[0],
							j = d.createElement(s),
							dl = l != "dataLayer" ? "&l=" + l : "";
						j.async = true;
						j.src =
							"https://www.googletagmanager.com/gtm.js?id=" +
							i +
							dl;
						f.parentNode.insertBefore(j, f);
					})(window, document, "script", "dataLayer", "GTM-MTTP275")}
				</script>
			</Head>
			<noscript>
				<iframe
					src="https://www.googletagmanager.com/ns.html?id=GTM-MTTP275"
					height="0"
					width="0"
					style="display:none;visibility:hidden"
				/>
			</noscript>
			<Component {...pageProps} />
		</React.Fragment>
	);
}

export default MyApp;
