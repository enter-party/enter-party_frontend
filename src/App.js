import { I18nextProvider } from "react-i18next";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./configs/i18n";
import i18next from "i18next";
import LoginPanel from "./Pages/LoginPanel";

function App() {
	return (
		<I18nextProvider i18n={i18next}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LoginPanel />} />
				</Routes>
			</BrowserRouter>
		</I18nextProvider>
	);
}

export default App;
