import React from "react";
import ImageViewer from "./image-viewer";

type workflowItem = {
  title: string;
  text: React.ReactNode;
  src: string;
  alt: string;
};

type workflowListProps = {
  workflowItems: workflowItem[];
  isAlternating?: boolean;
};

export function WorkflowList({
  workflowItems,
  isAlternating,
}: workflowListProps) {
  return (
    <div className="flex flex-col gap-separate">
      {workflowItems.map((item, index) => (
        <div
          key={index}
          className={`flex items-center gap-9 flex-col ${
            isAlternating && index % 2 === 1
              ? "md:flex-row-reverse"
              : "md:flex-row"
          }`}
        >
          <div>
            <h5>{`workflow ${index + 1}`}</h5>
            <h3>{item.title}</h3>
            {item.text}
          </div>
          <ImageViewer src={item.src} alt={item.alt} />
        </div>
      ))}
    </div>
  );
}
