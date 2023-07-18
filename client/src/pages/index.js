import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
/** importing our pages */
import Tracks from "./tracks";
import Track from "./track";

const client = new ApolloClient({
	uri: "http://localhost:4000",
	cache: new InMemoryCache(),
});

export default function Pages() {
	return (
		<ApolloProvider client={client}>
			<BrowserRouter>
				<Routes>
					<Route element={<Tracks />} path="/" />
					<Route element={<Track />} path="/track/:trackId" />
				</Routes>
			</BrowserRouter>
		</ApolloProvider>
	);
}
