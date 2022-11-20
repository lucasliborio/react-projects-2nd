import React from 'react';
import { Task, TaskType } from '../tasks';
import { LaneWrapper } from './styles/lane';
import { Title } from './styles/title';

type Tasks = Array<{
  key: string;
  id: string;
  title: string;
  body: string;
}>;

type PropsType = {
  title: string;
  loading: boolean;
  error: any;
  tasks: TaskType[];
  onDragStart: any;
  onDragOver: any;
  laneId: number;
  onDrop: any;
};
function Lane({
  title,
  loading,
  error,
  tasks,
  onDragStart,
  onDragOver,
  laneId,
  onDrop,
}: PropsType) {
  return (
    <LaneWrapper
      onDragOver={onDragOver}
      onDrop={(e: React.DragEventHandler) => onDrop(e, laneId)}
    >
      <Title>{title}</Title>
      {loading || error ? (
        <span>{error || 'Loading...'}</span>
      ) : (
        tasks.map((task) => (
          <Task
            lane={task.lane}
            key={task.id}
            id={task.id}
            title={task.title}
            body={task.body}
            onDragStart={onDragStart}
          />
        ))
      )}
    </LaneWrapper>
  );
}

export { Lane };
