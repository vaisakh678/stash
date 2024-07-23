import React from "react";
import ShButton from "./ui/ShButton";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import TuneIcon from "@mui/icons-material/Tune";
import { Drawer } from "@mui/material";
import { useSidebar } from "../../../context/SidebarProvider";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
	const { isDrawerOpen, handleCloseDrawer } = useSidebar();
	return (
		<>
			<div className="side-bar border-r">
				<div className="sticky h-screen left-0 top-0">
					<SidebarContent />
				</div>
			</div>
			<Drawer open={isDrawerOpen} onClose={handleCloseDrawer}>
				<div className="w-[250px]">
					<SidebarContent onClose={handleCloseDrawer} />
				</div>
			</Drawer>
		</>
	);
};

export const SidebarContent = ({ onClose }: { onClose?: () => void }) => {
	return (
		<>
			<header className="h-[60px] flex items-center px-5">
				<Link to="/">
					<h1 className="font-normal italic text-3xl">Stash</h1>
				</Link>
			</header>
			<ul className="flex flex-col gap-2 mt-14">
				<li>
					<ShButton StartIcon={DashboardIcon} to="/dashboard" onClick={onClose}>
						Dashboard
					</ShButton>
				</li>
				<li>
					<ShButton StartIcon={ShowChartIcon} to="/create-loan" onClick={onClose}>
						Create Loan
					</ShButton>
				</li>
				<li>
					<ShButton StartIcon={TuneIcon} to={"/settings"} onClick={onClose}>
						Settings
					</ShButton>
				</li>
			</ul>
		</>
	);
};

export default Sidebar;

