import './App.css';
import CourseCard from './components/Courses/components/CourseCard/CourseCard';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header></Header>
      <div className="page container">
        <CourseCard/>
      </div>
    </>
  )
}

export default App;
