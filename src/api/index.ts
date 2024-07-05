import { Todo } from "../entities/Todo";

const todos = [
  {
    id: 1,
    title: "Learn HTML",
    completed: false
  },
  {
    id: 2,
    title: "Learn CSS",
    completed: false
  },
  {
    id: 3,
    title: "Learn Javascript",
    completed: false
  },
  {
    id: 4,
    title: "Learn React",
    completed: false
  },
  {
    id: 5,
    title: "Learn Next.js",
    completed: false
  }
];

// Mock function that mimics fetching todos from a database
export const fetchTodos = async (query = ""): Promise<Todo[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("fetched todos");

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(query.toLowerCase())
  );

  return [...filteredTodos];
};

// Mock function that mimics aadding a todo to a database
export const addTodo = async (todo: Pick<Todo, "title">): Promise<Todo> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const newTodo = {
    id: todos.length + 1,
    title: todo.title,
    completed: false
  };

  // New task is stored in memory, and cleared on page reload
  todos.push(newTodo);

  return newTodo;
};
