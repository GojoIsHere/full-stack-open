const Header = (props)=>{
  return <h1>{props.course}</h1>
}
const Content = (props) => {
  return props.parts.map((prop, index) => (
    <Part part={prop.name} exercises={prop.exercises} key={index} />
  ));
};

const Total = (props) => {
  let totalExe = 0;
  props.parts.forEach((element) => {
    totalExe += element.exercises;
  });
  return <p>Number of exercises {totalExe}</p>;
};

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
};
const App = () => {
  const course = {
    name : "Half Stack application development",
    parts: [
      {name : "Fundamental React Devalopment",
      exercise : 10
    },
    {
      name : "using props to pass data",
      exercise : 7
    },{
      name : "state of component",
      exercise : 14
    }
    ]
  }
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
