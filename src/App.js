import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      dinos: []
    }
  }

  componentDidMount(){
    const url = "http://127.0.0.1:8000/api/dinos";
    fetch(url)
    .then(res => res.json())
    .then(data => this.setState({dinos: data}));
  }

  render() {
    return (
      <div>
      <h1>Welcome to the Ark DinoDB frontend</h1>
        <ul>
          {this.state.dinos.map((s) => (
            <li key={s.id} className='dinoDetails'>
              <p>Dino name: {s.name}</p>
              <p>Temperment: {s.temperment}</p>
              <p>Diet: {s.diet}</p>
              <p>Group: {s.group}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
