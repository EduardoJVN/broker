import Widget from "@/domain/models/Widget.model"
import FavoriteCard from "./ui/favorite-card";

export default function HorizontalScrollStatic({data}: Readonly<{data: Array<Widget>}>) {
  return (
    <div className="w-full overflow-x-auto overflow-y-hidden hide-scrollbar">
      <div className="flex flex-row gap-4">
        {data.map((item, index) => (
          <div key={index} className="h-15 w-48 flex-shrink-0">
            <FavoriteCard data={item}  />
          </div>
        ))}
      </div>
    </div>
  );
}