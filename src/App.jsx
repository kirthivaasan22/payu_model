import React from "react";
import * as Router from "react-router-dom";
import CommonRoute from "./routes/Route";

const App = () => {
	return (
		<Router.BrowserRouter>
			<CommonRoute />
		</Router.BrowserRouter>
	);
};

export default App;
