import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React from "react";

interface ShButtonProps {
	children: React.ReactNode;
	StartIcon: OverridableComponent<SvgIconTypeMap<object, "svg">>;
	active?: boolean;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const ShButton: React.FC<ShButtonProps> = ({ children, StartIcon, active, onClick }) => {
	return (
		<button onClick={onClick} className={`h-10 w-full text-left flex items-center hover:bg-gray-100 relative ${active ? "bg-gray-200" : ""}`}>
			{active ? <div className="bg-black w-1 h-full absolute" /> : null}
			<div className="mx-2 ml-3">
				<StartIcon />
			</div>
			{children}
		</button>
	);
};

export default ShButton;

