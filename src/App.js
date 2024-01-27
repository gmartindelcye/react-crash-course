import './App.css';

const App =() => {

  const Person = () => {
    return (
      <>
        <h1>Name: John</h1>
        <h2>Last Name: Doe</h2>
        <h2>Age: 25</h2>
      </>
    )
  }
  
  return (
    <div className="App">
      <Person />
    </div>
  );
}

export default App;
