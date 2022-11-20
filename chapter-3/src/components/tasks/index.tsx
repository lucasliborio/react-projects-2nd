import styled from 'styled-components';
export type TaskType = {
  title: string;
  body: string;
  id: string;
  onDragStart: any;
  lane: string;
};
const TaskWrapper = styled.div`
  background: darkgray;
  padding: 20px;
  border-radius: 20px;
  margin: 0 5% 5% 5%;

  h3 {
    width: 100%;
    margin: 0;
  }
`;
const Title = styled.h3`
  width: 100%;
  margin: 0;
`;
function Task({ title, body, id, onDragStart }: TaskType) {
  return (
    <TaskWrapper draggable onDragStart={(e) => onDragStart(e, id)}>
      <Title>{title}</Title>
      <p>{body}</p>
    </TaskWrapper>
  );
}
export { Task };
