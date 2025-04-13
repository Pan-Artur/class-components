import './App.css';
import { Component } from "react";
import { Counter } from './components/Counter';

class App extends Component {
  state = {
    text: "text",
    score: 0,
  }

  increment = () => {
    this.setState((prevState) => {
      return (
        {
          score: prevState.score + 1,
        }
      );
    }); 

    // this.setState((prevState) => {
    //   return (
    //     {
    //       score: prevState.score + 1,
    //     }
    //   );
    // }); - передаємо об'єкт, якщо нам потрібно передати кілька разів різне значення

    // this.setState({score: 0}); - передаємо об'єкт, якщо нам потрібно передати лише одне значення

    console.log("increment");
  }

  decrement = () => {
    this.setState((prevState) => {
      return (
        {
          score: prevState.score - 1,
        }
      );
    }); 

    console.log("decrement");
  }

  render(){
    console.log(this.state.text);

    return (
      <div className="App">
        <p>{this.state.text}</p>
        <h3>{this.state.score}</h3>
        <Counter addScore={this.increment} remScore={this.decrement} number={0} />
      </div>
    );
  }
}

export default App;
