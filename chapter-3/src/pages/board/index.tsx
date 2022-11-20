import { useEffect, useState } from 'react';
import { Lane } from '../../components/lane';
import { TaskType } from '../../components/tasks';
import { useDataFetching } from '../../hooks/useFetch';
import './board.css';

const lanes = [
  { id: 1, title: 'To Do' },
  { id: 2, title: 'In Progress' },
  { id: 3, title: 'Review' },
  { id: 4, title: 'Done' },
];

function onDragStart(e, id) {
  e.dataTransfer.setData('id', id);
}
function onDragOver(e) {
  e.preventDefault();
}
function Board() {
  const [loading, error, data] = useDataFetching(
    `https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/tasks`
  );
  const [tasks, setTasks] = useState<TaskType[]>([] as TaskType[]);

  useEffect(() => {
    setTasks(data);
  }, [data]);
  function onDrop(e: React.DragEvent<HTMLDivElement>, laneId: string) {
    const id = e.dataTransfer.getData('id');
    const updatedtask = tasks.filter((task) => {
      console.log(task);
      if (task.id.toString() === id) {
        // BUSCA O ID DA TASK QUE ESTÁ SENDO MOVIMENTADA, QUANDO ACHA. SETA A LANE ENVIADA
        // PARA DENTRO DA TASK.
        task.lane = laneId;
      }
      return task;
    });
    setTasks(updatedtask);
  }
  return (
    <div className="Board-wrapper">
      {lanes.map((lane) => (
        <Lane
          key={lane.id}
          laneId={lane.id}
          title={lane.title}
          error={error}
          loading={loading}
          tasks={tasks.filter((task: any) => task.lane == lane.id)}
          onDragStart={onDragStart}
          onDragOver={onDragOver}
          onDrop={onDrop}
        />
      ))}
    </div>
  );
}

export { Board };
