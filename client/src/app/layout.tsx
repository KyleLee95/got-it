import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Outlet } from "react-router"
import { AppSidebar } from "@/components/app-sidebar"

export default function Layout() {
	return (
		<SidebarProvider>
			<AppSidebar />
			<main className="h-full w-full">
				<SidebarTrigger />
				<Outlet />
			</main>
		</SidebarProvider>
	)
}

