type Props = {
  items: {
    field: string;
    value: string | JSX.Element;
  }[];
};
function List({ items }: Props) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.field}>
          <span>{item.field}: </span>
          {item.value}
        </li>
      ))}
    </ul>
  );
}

export default List;
