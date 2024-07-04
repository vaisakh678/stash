import React, { useState } from "react";
import Appbar from "./Appbar";
import { Stack, Step, StepButton, Stepper, useMediaQuery, useTheme } from "@mui/material";
import LoanBasicDetails from "./Loan/LoanBasicDetails";

const Loan: React.FC = () => {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
	const [step, setStep] = useState(0);

	return (
		<>
			<Appbar title="Loan" />
			<main className="content flex flex-col items-center">
				<Stack sx={{ maxWidth: "800px", width: "100%" }} spacing={2} padding={3}>
					<Stepper nonLinear activeStep={step} alternativeLabel={isSmallScreen} sx={{ overflowX: "auto", height: "105px" }}>
						<Step>
							<StepButton
								onClick={() => {
									setStep(0);
								}}
							>
								Basic info
							</StepButton>
						</Step>
						<Step>
							<StepButton
								onClick={() => {
									setStep(1);
								}}
							>
								Loan Details
							</StepButton>
						</Step>
						<Step>
							<StepButton
								onClick={() => {
									setStep(2);
								}}
							>
								Attachments
							</StepButton>
						</Step>
						<Step>
							<StepButton
								onClick={() => {
									setStep(3);
								}}
							>
								Complete
							</StepButton>
						</Step>
					</Stepper>
					{step === 0 ? <LoanBasicDetails /> : null}
				</Stack>
			</main>
		</>
	);
};

export default Loan;

