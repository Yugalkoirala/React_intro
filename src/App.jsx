import './App.css';
import Counter from './hooks/Counter.jsx';
import HooksIntro from './hooks/Hooksintro.jsx';

// react-component=>special type of Js function which return html
//* name should be started with capital letter
//* extension jsx(javascript xml)

function App() {
  return (
    <div>
      {/* <h3>Welcome To React</h3> */}
      {/* <Card/> */}
      {/* <MuiCard/> */}
      {/* <HooksIntro /> */}
      {/* <CourseCard/> */}
      <Counter/>
    </div>
  );
}

export default App;
