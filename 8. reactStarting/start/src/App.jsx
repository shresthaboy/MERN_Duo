const Header = (props) => {
  return(
    <h1> {props.course} </h1>
  )
}

const Content = (props) => {
  return (
    <p> {props.part} {props.exercises} </p>
  )
}

const Total = (props) => {
  return (
    <p> Number of exercises: {props.total} </p>
  )
}

const App = () => {
  const course = "MERN";
  const part1 = ["HTML"," CSS"," JS"];
  const exercises1 = 10;
  const part2 = ["React"," Express"," Node"];
  const exercises2 = 7;

  return( /*Content bhanne function variable bhitra part ra exercises bhanne 
  variables pass garne ani values chai part1 exercises1 bhayera pass hunxa in the form of props */
    <div>
      <Header course={course}/>
      <Content part={part1} exercises={exercises1}/> 
      <Content part={part2} exercises={exercises2} />
      <Total total={exercises1+exercises2}/>
    </div>
  )
}
export default App;

/*Assignment: use array instead to display multiple content
all together */