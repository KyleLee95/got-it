import { useMatches, Link } from "react-router";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";

export function Breadcrumbs() {
	// Get the current route matches
	const matches = useMatches();

	// Extract breadcrumb metadata
	const breadcrumbs = matches
		.filter((match) => match.handle?.breadcrumb)
		.map((match) => ({
			id: match.id,
			label:
				typeof match.handle.breadcrumb === "function"
					? match.handle.breadcrumb(match)
					: match.handle.breadcrumb,
			path: match.pathname,
		}));

	return (
		<Breadcrumb>
			{breadcrumbs.map((crumb, index) => (
				<BreadcrumbItem key={crumb.id} isCurrent={index === breadcrumbs.length - 1}>
					<BreadcrumbLink
						as={Link}
						to={crumb.path}
						aria-current={index === breadcrumbs.length - 1 ? "page" : undefined}
					>
						{crumb.label}
					</BreadcrumbLink>
				</BreadcrumbItem>
			))}
		</Breadcrumb>
	);
}

