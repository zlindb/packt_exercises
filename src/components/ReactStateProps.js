import React from 'react';

class ReactStateProps extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="container">
        <div>
          <button type="button">Click</button>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="modal">
          <div className="modal_content">Text in overlay</div>
        </div>
      </div>
    )
  }
}

export default ReactStateProps
