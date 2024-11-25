import { Button } from "@shared/ui/button/ui/button"
import { Calendar } from "@shared/ui/calendar/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@shared/ui/popover/ui/popover"
import clsx from "clsx"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { FC } from "react"

interface IDatePicker {
  date: Date | undefined
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>
}

const DatePicker: FC<IDatePicker> = ({ date, setDate }) => (
  <Popover>
    <PopoverTrigger asChild>
      <Button
        variant={"outline"}
        className={clsx(
          "w-full justify-start h-9 text-left font-normal",
          !date && "text-muted-foreground"
        )}
      >
        <CalendarIcon />
        {date ? format(date, "PPP") : <span>Pick a date</span>}
      </Button>
    </PopoverTrigger>
    <PopoverContent className="w-auto p-0" align="start">
      <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
    </PopoverContent>
  </Popover>
)

export default DatePicker
