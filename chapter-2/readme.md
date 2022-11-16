### Chapter 2

### Conceitos aprendidos

1. Você pode enviar um jsx como props para um component. Nesse exemplo o array items será renderizado no component List

```javascript
const items = [
  {
    field: 'html_url',
    value: <Link url={profile.html_url} title={profile.html_url} />,
  },
];
// Component List
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
```
