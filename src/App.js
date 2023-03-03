import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePageComponent from './components/HomePageComponent';
import Job1Component from './components/Job1Component';
import Job2Component from './components/Job2Component';
import Job3Component from './components/Job3Component';
import Job4Component from './components/Job4Component';
import Job5Component from './components/Job5Component';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePageComponent/>} />
          <Route path='Job1' element={<Job1Component/>} />
          <Route path='Job2' element={<Job2Component/>} />
          <Route path='Job3' element={<Job3Component/>} />
          <Route path='Job4' element={<Job4Component/>} />
          <Route path='Job5' element={<Job5Component/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
