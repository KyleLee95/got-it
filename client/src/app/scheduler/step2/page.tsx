"use client"
import {
	FormControl,
	FormLabel,
	FormItem,
	FormDescription,
	FormMessage,
	FormField,
} from "@/components/ui/form";
import { DatePicker } from "@/components/ui/date-picker";
import {
	Select,
	SelectContent,
	SelectValue,
	SelectItem,
	SelectTrigger,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useFormContext } from "react-hook-form";
import { useRouter } from "next/navigation";
//logistics
//date
//earliest time
//latest time
const Step2 = () => {
	const router = useRouter()
	const { control } = useFormContext()
	return (
		<>
			<FormField
				control={control}
				name="date"
				render={({ field }) => (
					<FormItem className="flex flex-col">
						<FormLabel>Date</FormLabel>
						<FormControl>
							<DatePicker field={field} />
						</FormControl>
						<FormDescription>
							The date that you would like to try to get a reservation on.
						</FormDescription>
						<FormMessage />
					</FormItem>
				)}
			/>

			<FormField
				control={control}
				name="earliestTime"
				render={({ field }) => (
					<FormItem>
						<FormLabel>Earliest Time</FormLabel>
						<Select
							onValueChange={field.onChange}
							defaultValue={field.value}
						>
							<FormControl>
								<SelectTrigger>
									<SelectValue placeholder="Select a Time" />
								</SelectTrigger>
							</FormControl>
							<SelectContent>
								<SelectItem value="m@example.com">
									m@example.com
								</SelectItem>
								<SelectItem value="m@google.com">m@google.com</SelectItem>
								<SelectItem value="m@support.com">
									m@support.com
								</SelectItem>
							</SelectContent>
						</Select>
						<FormDescription>
							The earliest time you would like your reservation to be.
						</FormDescription>
						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				control={control}
				name="latestTime"
				render={({ field }) => (
					<FormItem>
						<FormLabel>Latest Time</FormLabel>
						<Select
							onValueChange={field.onChange}
							defaultValue={field.value}
						>
							<FormControl>
								<SelectTrigger>
									<SelectValue placeholder="Select a Time" />
								</SelectTrigger>
							</FormControl>
							<SelectContent>
								<SelectItem value="m@example.com">
									m@example.com
								</SelectItem>
								<SelectItem value="m@google.com">m@google.com</SelectItem>
								<SelectItem value="m@support.com">
									m@support.com
								</SelectItem>
							</SelectContent>
						</Select>
						<FormDescription>
							You can manage email addresses in your{" "}
						</FormDescription>
						<FormMessage />
					</FormItem>
				)}
			/>
			<Button onClick={() => {
				router.push("/scheduler/result")
			}}>Next</Button>
		</>)

}

export default Step2
