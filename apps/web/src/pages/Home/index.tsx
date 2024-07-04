import React from "react";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";
import SidebarProvider from "../../context/SidebarProvider";

const Home: React.FC = () => {
	return (
		<SidebarProvider>
			<div className="home">
				<Sidebar />
				<Outlet />
			</div>
		</SidebarProvider>
	);
};

export default Home;

