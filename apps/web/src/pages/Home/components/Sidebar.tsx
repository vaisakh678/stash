import React from "react";
import ShButton from "./ui/ShButton";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import TuneIcon from "@mui/icons-material/Tune";
import { useLocation, useNavigate } from "react-router-dom";
import { Drawer } from "@mui/material";
import { useSidebar } from "../../../context/SidebarProvider";

type Menu = "none" | "dashboard" | "create-loan" | "settings";

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
	const navigate = useNavigate();
	const location = useLocation();

	let menu: Menu = "none";
	if (location.pathname.includes("dashboard")) {
		menu = "dashboard";
	} else if (location.pathname.includes("create-loan")) {
		menu = "create-loan";
	} else if (location.pathname.includes("settings")) {
		menu = "settings";
	}

	return (
		<>
			<header className="h-[60px] flex items-center px-5">
				<h1 className="font-normal italic text-3xl">Stash</h1>
			</header>
			<ul className="flex flex-col gap-2 mt-14">
				<li>
					<ShButton
						StartIcon={DashboardIcon}
						active={menu === "dashboard"}
						onClick={() => {
							onClose && onClose();
							navigate("/dashboard");
						}}
					>
						Dashboard
					</ShButton>
				</li>
				<li>
					<ShButton
						StartIcon={ShowChartIcon}
						active={menu === "create-loan"}
						onClick={() => {
							onClose && onClose();
							navigate("/create-loan");
						}}
					>
						Create Loan
					</ShButton>
				</li>
				<li>
					<ShButton
						StartIcon={TuneIcon}
						active={menu === "settings"}
						onClick={() => {
							onClose && onClose();
							navigate("/settings");
						}}
					>
						Settings
					</ShButton>
				</li>
			</ul>
		</>
	);
};

export default Sidebar;

