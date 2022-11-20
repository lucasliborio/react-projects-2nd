import { Task } from '../../components/tasks';
import { useDataFetching } from '../../hooks/useFetch';
import './backlog.css';

function onDragStart(e, id) {
  e.dataTransfer.setData('id', id);
}
function Backlog() {
  const [loading, error, tasks] = useDataFetching(
    'https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/tasks'
  );
  return (
    <div className="Backlog-wrapper">
      <h2>Backlog</h2>
      <div className="Tasks-wrapper">
        {loading || error ? (
          <span>{error || 'Loading...'}</span>
        ) : (
          tasks.map((task) => (
            <Task
              lane={task.lane}
              onDragStart={onDragStart}
              key={task.id}
              title={task.title}
              body={task.body}
              id={task.id}
            />
          ))
        )}
      </div>
    </div>
  );
}
export { Backlog };
