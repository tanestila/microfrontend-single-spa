import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function Root(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}

function Todo() {
  return (
    <>
      <main>
        <h2>Todo</h2>
        <p>You can do this, I believe in you.</p>
      </main>
    </>
  );
}
