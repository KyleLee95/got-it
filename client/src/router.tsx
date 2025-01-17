import { Route, Routes, BrowserRouter } from "react-router";
import Layout from "./app/layout";
import DashboardHome from "./app/dashboard/dashboard-home";
import Scheduler from "./app/scheduler/scheduler";
import Jobs from "./app/jobs/jobs";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<DashboardHome />} />
          <Route path="/scheduler" element={<Scheduler />} />
          <Route path="/jobs" element={<Jobs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
