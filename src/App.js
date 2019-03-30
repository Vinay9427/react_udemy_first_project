import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons : [
      {id : 'sxsa',name : 'Srinivasu' , age : 50},
      {id : 'sxsasa',name : 'Vijaya' , age : 46},
      {id : 'sxsassa',name : 'Uday ' , age : 26},
      {id : 'sxsasaAa',name : 'Vinay' , age : 24}
    ],
    showPersons : false
  }

  switchNameHandler = (newName)=>{
    //console.log('This is clicked')
    //this.state.persons[0].name = 'Srinivasu Dupati';
    this.setState({
      persons : [
        {name : 'Srinivasu Dupati' , age : 50},
        {name : 'Vijaya Lakshmi' , age : 46},
        {name : 'Uday ' , age : 26},
        {name : newName , age : 24}
      ]
    })
  }

  nameChangeHandler = (event,id) =>{
    const personIndex = this.state.persons.findIndex(i =>i.id === id)
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;
    const persons = [...this.state.persons]
    persons[personIndex] = person;

    this.setState({persons : persons})
  
  }

  deleteHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons : persons})
  }

  toggleHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons : !doesShow
    })
  }

  render() {
    const style = {
      backgroundColor : 'green',
      color : 'white',
      font : 'inherit',
      border : '1px solid blue',
      padding : '8px',
      cursor : 'pointer'
    }
    let persons = null;
    if(this.state.showPersons){
      persons = this.state.persons.map((person,index) => {
                return <Person name={person.name} 
                              age={person.age} 
                              key={person.id}
                              click ={this.deleteHandler.bind(this, index)}
                              changed={(event) => this.nameChangeHandler(event, person.id)}/>
      }) 

      style.backgroundColor = 'red';
    }

    let classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red')
    }
    if(this.state.persons.length <= 1){
      classes.push('bold')
    }
    return (
      <div className="App">
        
          <h1>Home</h1>
          <p className={classes.join(' ')}>Details by Name</p>
          <button style={style} onClick={this.toggleHandler}>Toggle Name</button>
          {persons}
        
      </div>
    );
// return React.createElement('div',{className : 'App'},React.createElement('h1',null, 'Hope this works now'))
  }
}

export default App;
