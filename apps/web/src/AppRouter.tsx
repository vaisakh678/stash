import React from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Home/components/Dashboard";
import Loan from "./pages/Home/components/Loan";
import Settings from "./pages/Home/components/Settings";
import Home from "./pages/Home";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		children: [
			{ index: true, element: <Navigate to="dashboard" /> },
			{
				path: "dashboard",
				element: <Dashboard />,
			},
			{
				path: "create-loan",
				element: <Loan />,
			},
			{
				path: "settings",
				element: <Settings />,
			},
		],
	},
]);

const AppRouter: React.FC = () => {
	return <RouterProvider router={router} />;
};

export default AppRouter;

