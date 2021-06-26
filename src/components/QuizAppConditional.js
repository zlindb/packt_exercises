import React, {Component} from 'react';

class QuizAppConditional extends Component{
  constructor(props){
    super(props);

    this.state={
      questions:[
        {
          question: "what animal barks?",
          possibleAnwers: ['Dog', "Cat"],
          rightAnswer: "Dog",
          playerChoice: null
        },
        {
          question: "what animal is more closely related to a tiger?",
          possibleAnwers: ['Dog', "Cat"],
          rightAnswer: "Cat",
          playerChoice: null
        },
        {
          question: "what animal is more closely related to a Wolf?",
          possibleAnwers: ['Dog', "Cat"],
          rightAnswer: "Dog",
          playerChoice: null
        },
        {
          question: "what animal is best known for playing fetch?",
          possibleAnwers: ['Dog', "Cat"],
          rightAnswer: "Dog",
          playerChoice: null
        }
      ]
    }
  }

  displayQuestion(index){
    if(this.state.playerScore < index){ return }
    const question = this.state.questions[index];
    return(
      <div className="question-display" key={`q-${index}`}>
        <p className="question">
          {question.question}
        </p>
        <br/>
        {question.possibleAnwers.map((answer, answerIndex) =>(
          <button key={`q-${index}-a-${answerIndex}`} className="question-choice"
            onClick={()=>this.answerQuestion(index,answer)}>
            {answer}
          </button>
        ))}

        <br/>
        {this.displayResult(index)}
      </div>
    )
  }

  answerQuestion(index, choice){
    const answeredQuestion = this.state.questions[index];
    answeredQuestion.playerChoice = choice;
    const allQuestions = this.state.questions;
    allQuestions[index] = answeredQuestion;
    this.setState({
      questions: allQuestions
    }, ()=>{
      this.updatePlayerScore();
    })
  }

  updatePlayerScore(){
    const playerScore = this.state.questions.filter(q=>
      q.rightAnswer === q.playerChoice).length;
      this.setState({playerScore});
      console.log("New Player Score:", playerScore);
  }

  displayResult(index){
    const question = this.state.questions[index];
    if(!question.playerChoice){ return; }
    if(question.playerChoice === question.rightAnswer){
      return (
        <p className="result-correct">
          Your answer is correct!
        </p>
      );
    }else {
      return (
        <p className="result-incorrect">
          Your answer is incorrect!
        </p>
      )
    }
  }
 render(){
    return (
      <div className="QuizApp">
        <h1>Quiz Show!</h1>
        <hr/>
          {this.state.questions.map((question,index)=>
            this.displayQuestion(index)
          )}
      </div>
    )

  // render(){
  //   return (
  //     <div className="QuizApp">
  //       <h1>Quiz Show!</h1>
  //       <hr/>
  //       {this.displayQuestion(0)}
  //       {this.displayQuestion(1)}
  //       {this.displayQuestion(2)}
  //       {this.displayQuestion(3)}
  //     </div>
  //   )

  }
}

export default QuizAppConditional
