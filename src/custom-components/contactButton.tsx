import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react" 

export function ContactButton() {
  return (
    <div className="button-container">

    <Button variant="custom1" size="custom">
      <ArrowDown size={24}/>
      GET IN TOUCH
      <ArrowDown size={24}/>
    </Button>
    
    <Button variant="custom2" size="custom">
      <ArrowDown size={24}/>
      GET IN TOUCH
      <ArrowDown size={24}/>
    </Button>

    <Button variant="custom3" size="custom">
      <ArrowDown size={24}/>
      GET IN TOUCH
      <ArrowDown size={24}/>
    </Button>

    <Button variant="custom4" size="custom">
      <ArrowDown size={24}/>
      GET IN TOUCH
      <ArrowDown size={24}/>
    </Button>

    </div>

  )
}