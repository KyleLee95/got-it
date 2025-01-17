import { Route, Routes, BrowserRouter } from "react-router";
import Layout from "./app/layout";
import DashboardHome from "./app/dashboard/dashboard-home";
import Scheduler from "./app/scheduler/scheduler";
import Jobs from "./app/jobs/jobs";
import Step1 from "./app/scheduler/wizard/step1";
import Step2 from "./app/scheduler/wizard/step2";
import Result from "./app/scheduler/wizard/result";
const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route handle={{ breadcrumb: "Dashboard" }} index element={<DashboardHome />} />
					<Route handle={{ breadcrumb: "Scheduler" }} path="/scheduler" element={<Scheduler />}>
						<Route handle={{ breadcrumb: (match) => `${match.params.step}` }} path="step1" element={<Step1 />} />
						<Route path="step2" element={<Step2 />} />
						<Route path="result" element={<Result />} />
					</Route>
					<Route path="/jobs" element={<Jobs />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
