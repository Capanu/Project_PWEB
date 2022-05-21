import "./App.css";
import GreenCard from "./microcomponents/GreenCard";
import ImportantCard from "./microcomponents/ImportantCard";
import SemimportantCard from "./microcomponents/SemimportantCard";
import NavbarSite from "./microcomponents/NavbarSite";
import FundrasingCard from "./microcomponents/FundrasingCard";
import VolunteerCard from "./microcomponents/VolunteerCard";
import RaisedIssue from "./microcomponents/RaisedIssue";
import PageForm from "./microcomponents/PageForm";
import ViewForm from "./microcomponents/ViewForm";
import PublicPage from "./components/SpectatorPages/PublicPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/SpectatorPages/LoginPage";
import RegisterPage from "./components/SpectatorPages/RegisterPage";
import DonationPage from "./components/SpectatorPages/DonationPage";
import DonatePageForm from "./components/SpectatorPages/DonatePageForm";
import ResidentMainPage from "./components/Resident/ResidentMainPage";
import ResidentWarningandAlertsPage from "./components/Resident/ResidentWarningandAlertsPage";
import ResidentViewWarningPage from "./components/Resident/ResidentViewWarningPage";
import ResidentRaiseIssuePage from "./components/Resident/ResidentRaiseIssuePage";
import VolunteerMainPage from "./components/Volunteer/VolunteerMainPage";
import VolunteerWarnings from "./components/Volunteer/VolunteerWarnings";
import VolunteerRecruitmentCampaigns from "./components/Volunteer/VolunteerRecruitmentCampaigns";
import VolunteerEnrollPage from "./components/Volunteer/VolunteerEnrollPage";
import ViewEnrolledCampaigns from "./components/Volunteer/ViewEnrolledCampaigns";
import VolunteerEnrolledForm from "./components/Volunteer/VolunteerEnrolledForm";

import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import AdminMainPage from "./components/Admin/AdminMainPage";
import AdminFundraisingCampaignsPage from "./components/Admin/AdminFundraisingCampaignsPage";
import ViewFundraisingCampaignPage from "./components/Admin/ViewFundraisingCampaignPage";
import AdminAddFoundraisingCampaign from "./components/Admin/AdminAddFoundraisingCampaign";
import AdminVolunteerCampaigns from "./components/Admin/AdminVolunteerCampaigns";
import AdminAddVolunteersCampaign from "./components/Admin/AdminAddVolunteersCampaign";
import AdminWarnings from "./components/Admin/AdminWarings";
import AdminAddWaring from "./components/Admin/AdminAddWaring";
import AdminIssues from "./components/Admin/AdminIssues";
import IssueView from "./components/Admin/IssueView";
import DonorsPage from "./components/Admin/DonorsPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<PublicPage />}></Route>
				<Route exact path="/loginPage" element={<LoginPage />}></Route>
				<Route exact path="/registerPage" element={<RegisterPage />}></Route>
				<Route exact path="/donationPage" element={<DonationPage />}></Route>
				<Route
					path="/donationPage/foundRaisingCampaing"
					element={<DonatePageForm />}
				></Route>
				<Route path="/residentPage" element={<ResidentMainPage />}></Route>
				<Route
					path="/residentPage/warnings"
					element={<ResidentWarningandAlertsPage />}
				></Route>
				<Route path="/warning" element={<ResidentViewWarningPage />}></Route>
				<Route
					path="/residentPage/raiseIssue"
					element={<ResidentRaiseIssuePage />}
				></Route>

				<Route path="/volunteerPage" element={<VolunteerMainPage />}></Route>
				<Route
					path="/volunteerPage/warnings"
					element={<VolunteerWarnings />}
				></Route>
				<Route
					path="/volunteerPage/volunteerCampaigns"
					element={<VolunteerRecruitmentCampaigns />}
				></Route>

				<Route
					path="/volunteerPage/volunteerCampaigns/enrollPage"
					element={<VolunteerEnrollPage />}
				></Route>

				<Route
					path="/volunteerPage/enrolledVolunteerCampaigns"
					element={<ViewEnrolledCampaigns />}
				></Route>

				<Route
					path="/volunteerPage/volunteerCampaigns/enrolledForm"
					element={<VolunteerEnrolledForm />}
				></Route>
				<Route path="/adminMainPage" element={<AdminMainPage />}></Route>
				<Route
					path="/adminMainPage/foundraisingCampaigns"
					element={<AdminFundraisingCampaignsPage />}
				></Route>
				<Route
					path="/admin/viewFoundraisingCampaign"
					element={<ViewFundraisingCampaignPage />}
				></Route>

				<Route
					path="/admin/addFoundraisingCampaign"
					element={<AdminAddFoundraisingCampaign />}
				></Route>

				<Route
					path="/admin/volunteersCampaigns"
					element={<AdminVolunteerCampaigns />}
				></Route>

				<Route
					path="/admin/addVolunteersCampaigns"
					element={<AdminAddVolunteersCampaign />}
				></Route>

				<Route path="/admin/warnings" element={<AdminWarnings />}></Route>
				<Route path="/admin/addWarning" element={<AdminAddWaring />}></Route>

				<Route path="/admin/issues" element={<AdminIssues />}></Route>
				<Route path="/issue" element={<IssueView />}></Route>
				<Route path="/admin/donorsPage" element={<DonorsPage />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
