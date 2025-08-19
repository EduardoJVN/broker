import Widget from "@/domain/models/Widget.model"
import FavoriteCard from "./ui/favorite-card";

export default function HorizontalScrollStatic({data}: Readonly<{data: Array<Widget>}>) {
  return (
    <div className="w-full overflow-x-auto overflow-y-hidden">
      <div className="flex space-x-4 p-4 snap-x snap-mandatory">
        {data.map((item, index) => (
          <FavoriteCard key={index} data={item}  />
        ))}
      </div>
    </div>
  );
}