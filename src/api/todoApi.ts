import axios from "axios";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export const fetchTodos = async (): Promise<Todo[]> => {
  const { data } = await axios.get("http://localhost:8080/api/todos");
  return data;
};
