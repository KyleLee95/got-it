'use client'
import { Form } from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";


const formSchema = z.object({
	jobName: z
		.string({
			required_error: "A name for the job is required",
		})
		.min(2)
		.max(50),
	partySize: z.number().min(1).max(10).default(1),
	date: z.date({
		required_error: "The desired date for the reservation is required",
	}),
	earliestTime: z
		.string({
			required_error:
				"Please select the earleist time you would like your reservation to be.",
		})
		.min(2)
		.max(50),
	latestTime: z
		.string({
			required_error:
				"Please select the latest time you would like your reservation to be.",
		})
		.min(2)
		.max(50),
});
const Scheduler = ({ children }: { children: React.ReactNode }) => {
	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			jobName: "",
			earliestTime: "",
			latestTime: "",
		},
	});

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}

	return (
		<FormProvider {...form}>
			<div className="flex flex-1 flex-col gap-4 px-4 py-10">
				<div className="mx-auto h-24 w-full max-w-3xl rounded-xl bg-muted/50"></div>
				<div className="mx-auto h-full w-full max-w-3xl rounded-xl bg-muted/50">

					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="m-4 flex flex-col space-y-8"
						>
							{children}
						</form>
					</Form>
				</div>
			</div>
		</FormProvider>
	);
};

export default Scheduler;
