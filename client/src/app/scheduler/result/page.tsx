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


const Result = () => {
	const { getValues } = useFormContext()
	const formRecapValues = getValues()
	return (
		<>
			<pre>{JSON.stringify(formRecapValues, null, 2)}</pre>

			<Button type="submit">Submit</Button>
		</>)

}

export default Result
