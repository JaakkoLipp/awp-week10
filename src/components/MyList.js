function MyList({ header, items, toggleComplete }) {
  return (
    <div>
      <h2>{header}</h2>
      <ol>
        {items.map((item) => (
          <li
            onClick={() => toggleComplete(item.id)}
            key={item.id}
            style={{ textDecoration: item.completed ? "line-through" : "" }}
          >
            {item.text}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default MyList;
