import { IconButton } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useSidebar } from "../../../context/SidebarProvider";

interface AppbarProps {
	title: string;
}

const Appbar: React.FC<AppbarProps> = ({ title }) => {
	const { handleOpenDrawer } = useSidebar();

	return (
		<>
			<div className="app-bar sticky top-0 bg-white z-10 border-b flex items-center px-4">
				<IconButton sx={{ mr: 2 }} onClick={handleOpenDrawer}>
					<MenuIcon />
				</IconButton>
				<h4>{title}</h4>
			</div>
		</>
	);
};

export default Appbar;

