import { useState, useRef, useEffect } from "react";

const App = () => {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const todoVal = useRef();
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e) => {
    e.preventDefault();
    const val = todoVal.current.value.trim();

    if (val === "") {
      setError("⚠️ Please enter a todo!");
      return;
    }

    setError("");
    setTodos([...todos, val]);
    todoVal.current.value = "";
  };

  const deleteTodo = (index) => {
    const updated = [...todos];
    updated.splice(index, 1);
    setTodos(updated);
    if (editIndex === index) {
      setEditIndex(null);
      setEditValue("");
    }
  };

  const startEdit = (index) => {
    setEditIndex(index);
    setEditValue(todos[index]);
  };

  const saveEdit = (index) => {
    if (editValue.trim() === "") {
      setError("⚠️ Todo cannot be empty");
      return;
    }

    const updated = [...todos];
    updated[index] = editValue.trim();
    setTodos(updated);
    setEditIndex(null);
    setEditValue("");
    setError("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4 text-blue-600">
          📝 Todo App
        </h1>

        <form onSubmit={addTodo} className="flex gap-2 mb-4">
          <input
            type="text"
            ref={todoVal}
            placeholder="Enter your todo"
            className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add
          </button>
        </form>

        {error && <p className="text-red-500 mb-2">{error}</p>}

        <ul className="space-y-2">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="bg-gray-50 border p-3 rounded flex flex-wrap items-center justify-between gap-2"
            >
              {editIndex === index ? (
                <>
                  <input
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    className="flex-1 border border-gray-300 rounded px-2 py-1 mr-2"
                  />
                  <button
                    onClick={() => saveEdit(index)}
                    className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  <span className="flex-1 break-words max-w-full">
                    {todo}
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => startEdit(index)}
                      className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteTodo(index)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
