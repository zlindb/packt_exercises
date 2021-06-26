import React, {Component} from 'react';

class BoardGame extends Component{
  constructor(props){
    super(props);

    this.state = {
      tileList: [
        {value:12},
        {value:12},
        {value:12},
        {value:12},
        {value:12},
        {value:12},
        {value:12},
        {value:12},
        {value:12},
        {value:12},
        {value:12},
        {value:12}
      ],
      lastFlipped: null,
      matched: []
    }
  //  console.log(this.generateUniqueNumbers(6));

    this.showTile = this.showTile.bind(this);
    this.flipTile = this.flipTile.bind(this);
    this.buildList();
  }
  generateUniqueNumbers(size=6){
    const list = [];
    for(let i=0;i<size;i++){
      let randomNumber = Math.floor(Math.random() * 12);
      //generate unique
      while(list.includes(randomNumber) === true){
        randomNumber = Math.floor(Math.random() *12);
      }
        list[i]=randomNumber;
    }
    return list;
  }

  shuffle(array){
    //var currentIndex = array.length, tempValue,randomIndex;

    //wjile there remain elements to shuffle
  //  while(0 !== currentIndex){
    for(let i = array.length-1;i>0;i--){
      //Pick a remaining element...
      const randomIndex=Math.floor(Math.random() * (i+1));
      //currentIndex -= 1;
      //And swap it with the current element;.
      // tempValue = array[currentIndex];
      // array[currentIndex] = array[randomIndex];
      // array[randomIndex] = tempValue;

      //es6 destructuring
      [array[i], array[randomIndex]] = [array[randomIndex], array[i]];

    }
    return array;
  }

  buildList(){
    const tileList = this.state.tileList;
    let sixNumber = this.generateUniqueNumbers(6);
    let fullArray = sixNumber.concat(sixNumber.slice());

    //shuffle fullArray
    fullArray = this.shuffle(fullArray);

    //make sure tile is even number
    if(tileList.length % 2 !== 0){
      console.error("odd number of tiles");
      return;
    }

    tileList.map((tile,index)=>
      tile.value = fullArray[index]
    );

    this.setState({tileList});
  }

  flipTile(index){
    const flippedTile = this.state.tileList[index];
    console.log(flippedTile);
    const tileList = this.state.tileList;
    tileList[index] = flippedTile;
    this.setState({
    //  flippedTile.flipped = true;
      //tileList: tileList
      lastFlipped: flippedTile
    }, ()=>{
      this.checkMatched();
    })

    console.log(this.state.lastFlipped);
  //  console.log(this.state.tileList);
  }

  checkMatched(){

  }

  showTile(index){
    const tile = this.state.tileList[index];

    if(tile.flipped === true){
      return(
        tile.value
      )
    }
    else{
      return(
        ''
      )
    }
  }

  displayTile(index){

    return(

        <div key={`tile-${index}`} className="Tile" onClick={()=>this.flipTile(index)}>
          {this.showTile(index)}
        </div>

    )
  }

  render(){
    
    return(
      <div className="board-game">
        <h1> Memory Game </h1>
        <button className="reset">New Game</button>
        <hr/>
        <div  className="Tiles">
        {
          this.state.tileList.map((tile,index)=>
            this.displayTile(index)
          )
        }
        </div>
      </div>
    )
  }
}

export default BoardGame;
