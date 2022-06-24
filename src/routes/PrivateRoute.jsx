import * as React from "react";
import * as Router from "react-router-dom";

export function Private({ protect, children }) {
	// return <Router.Navigate to="/" />;
	return <>{children}</>;
}
