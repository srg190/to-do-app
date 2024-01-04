import PopupBox from "@components/Common/PopupBox";
import { useAppSelector } from "@redux/store";
import TaskForm from "@components/TaskForm";

const Modify = () => {
  const { isModify } = useAppSelector((state) => state.drag);
  const { Id } = useAppSelector((s) => s.drag);
  return (
    <>
      <PopupBox isSelected={isModify || false}>
        <TaskForm Id={Id} />
      </PopupBox>
    </>
  );
};

export default Modify;
