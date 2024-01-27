import './App.css';

const App =() => {

  const Person = (props) => {
    return (
      <>
        <h1>Name: {props.name}</h1>
        <h2>Last Name: {props.lastName}</h2>
        <h2>Age: {props.age}</h2>
      </>
    )
  }
  
  return (
    <div className="App">
      <Person name="John" lastName="Doe" age="25" />
      <Person name="Jane" lastName="Doe" age="30" />
    </div>
  );
}

export default App;
