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
  isMobileWorkflow?: boolean;
};

export function WorkflowList({
  workflowItems,
  isMobileWorkflow,
}: workflowListProps) {
  // TODO: add styles for a non-mobile workflow

  return (
    <div className="flex flex-col gap-separate center gap-x">
      {workflowItems.map((item, index) => (
        <div
          key={index}
          className="grid items-center justify-between gap-x-8 gap-y-together md:grid-cols-5"
        >
          <div
            className={`md:col-span-3 ${
              isMobileWorkflow && index % 2 === 1
                ? "md:order-2 lg:ms-[15%]"
                : "lg:me-[15%]"
            }`}
          >
            <h5>{`workflow ${index + 1}`}</h5>
            <h3>{item.title}</h3>
            {item.text}
          </div>
          <div className="md:col-span-2">
            <ImageViewer src={item.src} alt={item.alt} />
          </div>
        </div>
      ))}
    </div>
  );
}
