import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

const MovieTypeAdd = () => {
  const FormSchema = z.object({
    username: z.string().min(2, {
      message: "Tên danh mục tối thiểu 2 kí tự",
    }),
  })
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  })
 
  function onSubmit(data: z.infer<typeof FormSchema>) {
    
  }
  return (
    <div>
      <h2 className={cn('pb-4')}>Thêm danh mục</h2>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tên danh mục</FormLabel>
              <FormControl>
                <Input placeholder="Tên danh mục..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button  type="submit">Thêm danh mục</Button>
      </form>
    </Form>
    </div>
  )
}

export default MovieTypeAdd