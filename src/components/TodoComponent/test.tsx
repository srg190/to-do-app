// component
import { useState } from "react";

const DragTest = () => {
  const [data, setData] = useState("");

  return (
    <>
      <div
        data-testid="drag-1"
        draggable
        onDragStart={(e: React.DragEvent<HTMLDivElement>) => {
          e.preventDefault();
          e.dataTransfer.setData("text/plain", "flakes"); // Use "text/plain" as the data type
        }}
      >
        Hello
      </div>
      <div
        data-testid="drop-1"
        onDragOver={(e: React.DragEvent<HTMLDivElement>) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        onDrop={(e: React.DragEvent<HTMLDivElement>) => {
          e.preventDefault();
          const droppedData = e.dataTransfer.getData("text/plain"); // Use the correct data type
          setData(droppedData);
        }}
      >
        {data}
      </div>
    </>
  );
};

export default DragTest;
