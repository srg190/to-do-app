import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Status from "@components/Status";
import { useAppDispatch } from "@redux/store";
import { dragAction } from "@redux/Slices/drag.slice";
import { useEffect } from "react";

interface Task {
  Id: string;
  assignDate?: string;
  task?: string;
  status?: "pending" | "success" | "todo" | "process";
  description?: string;
  modifyDate?: string;
}

export default function TaskCard({
  Id,
  assignDate,
  task,
  status,
  description,
  modifyDate,
}: Task) {
  const dispatch = useAppDispatch();
  const { dragState } = dragAction;

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("Id", Id);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.dropEffect = "move";
  };
  useEffect(() => {}, [dispatch]);
  return (
    <div
      style={{ margin: "2%" }}
      draggable
      onDragStart={handleDragStart}
      onDrag={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      onDoubleClick={() => dispatch(dragState({ isDragging: true, Id }))}
    >
      <Card sx={{ minWidth: "100%", bgcolor: "primary.main" }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Assign Date: {assignDate}
          </Typography>
          <Typography variant="h5" component="div">
            {task}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <Status status={status || "todo"} />
          </Typography>
          <Typography variant="body2">{description}</Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Modify Date: {modifyDate}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
