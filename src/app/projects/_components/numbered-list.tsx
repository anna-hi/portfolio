import { LORA } from "@/util/fonts";

export type numberedList = {
  title: string;
  text?: string;
};

type numberedListProps = {
  list: numberedList[];
  numberColor?: string;
};

export default function NumberedList({ list, numberColor }: numberedListProps) {
  return (
    <ol className="space-y-8">
      {list.map((item, index) => (
        <li key={index} className="flex items-center gap-x-together">
          <div
            className={`${LORA.className} text-4xl font-semibold`}
            style={{ color: numberColor || "black" }}
          >
            {index + 1}
          </div>
          <div>
            <h3 className={item.text ? "mb-3" : "mb-0"}>{item.title}</h3>
            {item.text && <p className="mb-0">{item.text}</p>}
          </div>
        </li>
      ))}
    </ol>
  );
}
