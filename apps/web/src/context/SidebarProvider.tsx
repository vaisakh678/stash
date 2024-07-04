import React, { createContext, useContext, useState } from "react";

interface ISidebarProviderContext {
	isDrawerOpen: boolean;
	handleOpenDrawer: () => void;
	handleCloseDrawer: () => void;
}

const SidebarProviderContext = createContext<ISidebarProviderContext | null>(null);

export const useSidebar = () => {
	const sidebarContext = useContext(SidebarProviderContext);
	if (!sidebarContext) {
		throw new Error("useSidebar must be used withing the sidebar provider!.");
	}
	return sidebarContext;
};

const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
	const [drawerOpen, setDrawerOpen] = useState(false);

	const handleOpenDrawer = () => {
		setDrawerOpen(true);
	};

	const handleCloseDrawer = () => {
		setDrawerOpen(false);
	};

	return (
		<SidebarProviderContext.Provider value={{ isDrawerOpen: drawerOpen, handleOpenDrawer, handleCloseDrawer }}>
			{children}
		</SidebarProviderContext.Provider>
	);
};

export default SidebarProvider;

