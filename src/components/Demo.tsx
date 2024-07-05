import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

// * APIs
import { addTodo, fetchTodos } from "../api";

// * Components
import TodoCard from "./TodoCard";

export default function Demo() {
  const [title, setTitle] = useState("");

  const queryClient = useQueryClient();

  const { data: todos, isLoading } = useQuery({
    queryFn: () => fetchTodos(),
    queryKey: ["todos"]
    // staleTime: Infinity
  });

  const { mutateAsync: addTodoMutation } = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    }
  });

  if (isLoading) {
    return (
      <main>
        <p>Loading ...</p>
      </main>
    );
  }

  async function submit() {
    try {
      await addTodoMutation({ title });
      setTitle("");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section>
      <header>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <button type="button" onClick={submit}>
          Add
        </button>
      </header>
      {todos?.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </section>
  );
}
