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
  const mobileWorkflowClass =
    "grid items-center justify-between gap-x-8 gap-y-together md:grid-cols-5";
  const getWorkflowClass = () => {
    return isMobileWorkflow ? mobileWorkflowClass : desktopWorkflowClass;
  };
  const mobileImageClass = "md:col-span-2";

  const desktopWorkflowClass =
    "grid items-center justify-between gap-x-8 gap-y-together lg:grid-cols-5";
  const desktopTextClass = "lg:col-span-2";
  const desktopImageClass = "lg:col-span-3";

  const mobileTextClass = (index: number) => {
    return `md:col-span-3 ${
      isMobileWorkflow && index % 2 === 1
        ? "md:order-2 lg:ms-[15%]"
        : "lg:me-[15%]"
    }`;
  };

  const getTextClass = (index: number) => {
    return isMobileWorkflow ? mobileTextClass(index) : desktopTextClass;
  };

  const getImageClass = () => {
    return isMobileWorkflow ? mobileImageClass : desktopImageClass;
  };

  return (
    <div className="flex flex-col gap-separate center">
      {workflowItems.map((item, index) => (
        <div key={index} className={getWorkflowClass()}>
          <div className={getTextClass(index)}>
            <h5>{`workflow ${index + 1}`}</h5>
            <h3>{item.title}</h3>
            {item.text}
          </div>
          <div className={getImageClass()}>
            <ImageViewer src={item.src} alt={item.alt} />
          </div>
        </div>
      ))}
    </div>
  );
}
