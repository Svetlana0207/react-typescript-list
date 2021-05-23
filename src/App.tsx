import React,{useState} from 'react';
import './App.css';
import AddtoList from './components/AddtoList';
import List from './components/List'

export interface Istate{
  people:{
    name:string
    age:number
    url:string
    notes:string
  }[]
}

function App() {

  const[people,setPeople]=useState<Istate["people"]>([{
    name:"Pusheen",
    url:"https://pusheen.com/wp-content/uploads/2019/01/pusheen-kind.jpg",
    age: 5,
    notes:"I am happy"
  }])

  return (
    <div className="App">
     <h1>People invited to my party</h1>
     <List people={people}/>
     <AddtoList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
