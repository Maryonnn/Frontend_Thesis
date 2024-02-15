import { Routes, Route } from 'react-router-dom';
import Question from './Question.js';
import Register from './Register.js';
import Login from './Login.js';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/question" element={<Question />} />
      </Routes>
    </>
  );
}

export default App;
