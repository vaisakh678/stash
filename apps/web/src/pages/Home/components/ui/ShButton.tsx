import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React from "react";
import { NavLink } from "react-router-dom";

interface ShButtonProps {
	children: React.ReactNode;
	StartIcon: OverridableComponent<SvgIconTypeMap<object, "svg">>;
	to: string;
	onClick?: () => void;
}

const ShButton: React.FC<ShButtonProps> = ({ children, StartIcon, to, onClick }) => {
	return (
		<NavLink to={to} onClick={onClick}>
			{({ isActive }) => (
				<div className={`h-10 w-full text-left flex items-center hover:bg-gray-100 relative ${isActive ? "bg-gray-200" : ""}`}>
					{isActive ? <div className="bg-black w-1 h-full absolute" /> : null}
					<div className="mx-2 ml-3">
						<StartIcon />
					</div>
					{children}
				</div>
			)}
		</NavLink>
	);
};

export default ShButton;

