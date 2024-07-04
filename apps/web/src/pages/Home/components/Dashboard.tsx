import React from "react";
import Appbar from "./Appbar";
import {
	TableContainer,
	Paper,
	Table,
	TableHead,
	TableRow,
	TableBody,
	TableCell,
	Stack,
	styled,
	tableCellClasses,
	TextField,
	TablePagination,
} from "@mui/material";

const Dashboard: React.FC = () => {
	return (
		<>
			<Appbar title="Dashboard" />
			<main className="content">
				<Stack padding={2} spacing={2}>
					<Stack direction={"row"}>
						<TextField label="Search" size="small" />
					</Stack>
					<DashboardTable />
				</Stack>
			</main>
		</>
	);
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	"&:nth-of-type(odd)": {
		backgroundColor: theme.palette.action.hover,
	},
	// "&:last-child td, &:last-child th": {
	// 	border: 0,
	// },
}));

const DashboardTable = () => {
	return (
		<Paper sx={{ overflow: "hidden" }}>
			<TableContainer>
				<Table sx={{}} size="small" stickyHeader aria-label="customized table">
					<TableHead>
						<TableRow>
							<StyledTableCell>Dessert</StyledTableCell>
							<StyledTableCell>Calories</StyledTableCell>
							<StyledTableCell>Fat</StyledTableCell>
							<StyledTableCell>Carbs</StyledTableCell>
							<StyledTableCell>Protein</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{Array(30)
							.fill(0)
							.map((_, idx) => {
								return (
									<StyledTableRow key={idx}>
										<TableCell>{"Test"}</TableCell>
										<TableCell> {"test"} </TableCell>
										<TableCell> {"test"} </TableCell>
										<TableCell> {"test"} </TableCell>
										<TableCell> {"test"} </TableCell>
									</StyledTableRow>
								);
							})}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={[10, 25, 100]}
				component="div"
				count={20}
				rowsPerPage={5}
				page={1}
				onPageChange={() => {}}
				onRowsPerPageChange={() => {}}
			/>
		</Paper>
	);
};

export default Dashboard;

