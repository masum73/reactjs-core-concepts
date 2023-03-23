import logo from './logo.svg';
import './App.css';

const number = 69;
const singer = { name: 'Dr. Mahfuz Khan', job: 'singer', age: 47 }

const singers = [
  { name: 'Dr. Mahfuz Khan', job: 'singer', age: 47},
  {name: 'Eva Rahman', job: 'singer', age: 34},
  { name: 'Agun', job: 'singer', age: 47},
  {name: 'James', job: 'singer', age: 49}
]

const singerStyle = {
  color: 'purple',
  backgroundColor: 'white'
}

function App() {
  const nayoks = ['Rubel', 'BappaRaz', 'Kuber', 'Jashim','Riyaz','Anwar'];
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>JSX</h1>
        <div className="container">
          <h3>Hello Dude React! How are you?</h3>
        </div>
        <div className="music">
          <p>Name: {number} </p>
          <p style={singerStyle}>Name: {singer.name} {singer.job}</p>
          <p style={{color: 'blue', backgroundColor: 'yellow'}}>Name: {singer.name} {singer.job}</p>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {
        nayoks.map(nayok => <li>Name: {nayok}</li>)
      }
      {/* {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      } */}
      {
        singers.map(singer=> <Person name = {singer.name}></Person>)
      }
      {/* <Person name= {nayoks[0]} nayika = 'moushumi'></Person>
      <Person name= {nayoks[1]} nayika = 'cheka'></Person>
      <Person name= {nayoks[2]} nayika='kopila'></Person> */}
      <h1>New component! YAY</h1>
      <Friend phone='0196'></Friend>
      <Friend phone='0176'></Friend>
    </div>
  );
}

function Person (props) {
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <p>{props.nayika}</p>
    </div>
  )
}

function Friend (props) {
  return (
    <div className='container'>
      <h1>Big Show</h1>
      <p>Profession: Wrestling</p>
      <p>Phone: {props.phone}</p>
    </div>
  )
}

export default App;
