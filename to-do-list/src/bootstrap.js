import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import TodoApp from "./TodoApp.jsx";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <TodoApp />
  </StrictMode>
);
