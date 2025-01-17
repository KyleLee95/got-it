"use client"
import {
	FormControl,
	FormLabel,
	FormItem,
	FormDescription,
	FormMessage,
	FormField,
} from "@/components/ui/form";
import {
	Select,
	SelectContent,
	SelectValue,
	SelectItem,
	SelectTrigger,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useFormContext } from "react-hook-form";


const PARTY_SIZES = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"
]
const Step1 = () => {
	const router = useRouter()
	const { control } = useFormContext()
	return (
		<>
			<FormField
				control={control}
				name="jobName"
				render={({ field }) => (
					<FormItem>
						<FormLabel>Job Name</FormLabel>
						<FormControl>
							<Input placeholder="Valentine's Day @ Carbone" {...field} />
						</FormControl>
						<FormDescription>
							This is the name that will be displayed to you.
						</FormDescription>
						<FormMessage />
					</FormItem>
				)}
			/>

			<FormField
				control={control}
				name="partySize"
				render={({ field }) => (
					<FormItem>
						<FormLabel>Party Size</FormLabel>
						<Select
							onValueChange={field.onChange}
							defaultValue={field.value}
						>
							<FormControl>
								<SelectTrigger>
									<SelectValue placeholder="Select the number of people" />
								</SelectTrigger>
							</FormControl>
							<SelectContent>
								{PARTY_SIZES.map((size) => (
									<SelectItem key={size} value={size}>
										{size}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
						<FormDescription>
							The earliest time you would like your reservation to be.
						</FormDescription>
						<FormMessage />
					</FormItem>
				)}
			/>
			<Button onClick={() => {
				router.push("/scheduler/step2")
			}}>Next</Button>
		</>)

}

export default Step1
