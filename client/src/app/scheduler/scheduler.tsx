import {
  Form,
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
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  jobName: z
    .string({
      required_error: "A name for the job is required",
    })
    .min(2)
    .max(50),
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
const Scheduler = () => {
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
    <div className="flex flex-1 flex-col gap-4 px-4 py-10">
      <div className="mx-auto h-24 w-full max-w-3xl rounded-xl bg-muted/50"></div>
      <div className="mx-auto h-full w-full max-w-3xl rounded-xl bg-muted/50">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="m-4 flex flex-col space-y-8"
          >
            <FormField
              control={form.control}
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
              control={form.control}
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
              control={form.control}
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
              control={form.control}
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

            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Scheduler;
