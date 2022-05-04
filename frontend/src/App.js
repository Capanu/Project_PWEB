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
			</Routes>
		</BrowserRouter>
	);
}

export default App;
