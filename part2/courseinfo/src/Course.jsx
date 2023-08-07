const Header = ({ header }) => {
  return <h2>{header}</h2>;
};

const Total = ({ parts }) => {
  let totalVal = parts.reduce((a, c) => (a = a + c.exercises), 0);
  return <p>There are total of {totalVal} excercises.</p>;
};

const Part = ({ cName, cExcercise }) => {
  return (
    <p>
      {cName} {cExcercise}
    </p>
  );
};

const Content = ({ content }) => {
  return (
    <>
      {content.map((value) => {
        return (
          <Part
            key={value.id}
            cName={value.name}
            cExcercise={value.exercises}
          />
        );
      })}
      <Total parts={content} />
    </>
  );
};

const Courses = ({ course }) => {
  return (
    <div>
      {course.map((value) => {
        return (
          <div key={value.id}>
            <Header header={value.name} />
            <Content content={value.parts} />
          </div>
        );
      })}
    </div>
  );
};

export default Courses;
