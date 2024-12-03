import { useQuery } from "@tanstack/react-query";
import { fetchTodos } from "../api/todoApi";

export function TodoList() {
  const {
    data: todos,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  if (isLoading) return <div>로딩 중...</div>;
  if (error) throw error;

  return (
    <ul>
      {todos?.map((todo) => (
        <li key={todo.id}>
          <input type="checkbox" checked={todo.completed} readOnly />
          {todo.title}
        </li>
      ))}
    </ul>
  );
}
