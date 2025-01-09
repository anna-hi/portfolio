export type numberedList = {
  title: string;
  text: string;
};

type numberedListProps = {
  list: numberedList[];
};

export default function NumberedList({ list }: numberedListProps) {
  return (
    <div className="flex flex-col gap-y-8">
      {list.map((item, index) => (
        <div key={index} className="flex items-center gap-x-together">
          <h1 className="font-semibold">{index + 1}</h1>
          <div>
            <h3 className="mb-3">{item.title}</h3>
            <p className="mb-0">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
