import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const ActionSelect = () => {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Action" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="sendOrder">Send Order</SelectItem>
        <SelectItem value="applyDiscount">Apply Discount</SelectItem>
        <SelectItem value="buyItem">Buy Item</SelectItem>
      </SelectContent>
    </Select>
  );
};
