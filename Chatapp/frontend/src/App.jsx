import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";

// ✅ Backend se connect
const socket = io("http://localhost:5000");

function App() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  useEffect(() => {
    // ✅ Server se message suno
    socket.on("receive_message", (data) => {
      console.log("📩 Message from server:", data);
      setChat((prev) => [...prev, data]);
    });

    return () => socket.off("receive_message");
  }, []);

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit("send_message", message); // ✅ Server ko bhejo
      setMessage("");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>⚡ Real-time Chat App</h2>
      <div
        style={{
          border: "1px solid #ccc",
          height: "300px",
          overflowY: "scroll",
          padding: "10px",
          marginBottom: "10px"
        }}
      >
        {chat.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>

      <input
        type="text"
        value={message}
        placeholder="Type a message..."
        onChange={(e) => setMessage(e.target.value)}
        style={{ padding: "8px", width: "70%" }}
      />
      <button
        onClick={sendMessage}
        style={{ padding: "8px 12px", marginLeft: "10px" }}
      >
        Send
      </button>
    </div>
  );
}

export default App;
