import { useState } from "react";

// * Components
import TodoList from "./TodoList";

export default function Overview() {
  // This will cause the Demo component to unmount, and remount
  // By default, tan-stack-query will always make a request
  const [showPage, setShowPage] = useState(true);

  return (
    <>
      <button onClick={() => setShowPage((prevValue) => !prevValue)}>
        Toggle
      </button>
      <hr />

      {showPage && <TodoList />}
    </>
  );
}
