import React from 'react';

class ChangeTheme extends React.Component{
  constructor(props){
    super(props);

    this.state={
      theme:"light"
    }

    this.toggleTheme = this.toggleTheme.bind(this);
  }
  toggleTheme(){
    const theme = this.state.theme === "light" ? "dark": "light";
    this.setState({theme});
    console.log(this.state.theme, theme);
  }
  render(){
    return(
      <div className={`${this.state.theme}-theme`}>
        <div className="jumbotron">
          <h1>Hello, world!</h1>
          <button className="btn btn-primary btn-lg" onClick={this.toggleTheme}>Switch Them</button>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Etiam sed turpis lacinia, euismod mauris at, vehicula justo.
            Etiam est orci, convallis vel congue nec, lobortis sit amet purus.
            Donec nec velit in sem tempus cursus. Phasellus orci ligula, venenatis eget mattis in, congue at justo.

          </p>
        </div>
      </div>
    )
  }
}
export default ChangeTheme;
