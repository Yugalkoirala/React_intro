import './App.css'
import Counter from './Counter.jsx'
import MuiCard from './muiCard.jsx'
import CourseCard from './CourseCard.jsx';

// react-component=>special type of Js function which return html
//* name should be started with capital letter
//* extension jsx(javascript xml)

function App() {
  return(
    <div>
      {/* <h3>Welcome To React</h3> */}
      {/* <Card/> */}
      {/* <MuiCard/>
      <Counter/> */}
      <CourseCard/>
    </div>
  );
}

export default App;
