import { Routes, Route } from 'react-router-dom';
import Question from './Question.js';
import Criteria  from './Criteria.js';
import Choices from './Choices.js'
import Register from './Register.js';
import Login from './Login.js';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/question" element={<Question />} />
        <Route path="/criteria" element={<Criteria />} />
        <Route path="/choice" element={<Choices />} />
      </Routes>
    </>
  );
}

export default App;
