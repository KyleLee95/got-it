import { Route, Routes, BrowserRouter } from 'react-router'
import Layout from './app/layout'
import DashboardHome from './app/dashboard/dashboard-home'
const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route index element={<DashboardHome />} />
				</Route>
			</Routes>
		</BrowserRouter >
	)
}

export default Router
