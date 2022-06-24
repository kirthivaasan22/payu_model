import React from "react";
import * as Router from "react-router-dom";
import Home from "../core/home/Home";
import Dashboard from "../core/dashboard/Dashboard";

import * as Route from "./PrivateRoute";

export default function CommonRoute() {
	const navigate = Router.useNavigate();

	return Router.useRoutes([
		{
			path: "/",
			element: (
				<Route.Private>
					<Home />
				</Route.Private>
			),
		},
		{
			path: "/dashboard",
			element: (
				<Route.Private>
					<Dashboard />
				</Route.Private>
			),
		},
	]);
}
