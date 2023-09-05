import React, { Component, Fragment} from 'react';
import Levels from '../Levels';
import ProgressBar from '../ProgressBar';
import { QuizMarvel } from '../quizMarvel';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QuizOver from '../QuizzOver';


class Quiz extends Component {

    constructor(props) {
      super(props)

      this.initialState = {
        levelNames: ["debutant", "confirme", "expert"],
        quizLevel: 0,
        maxQuestions: 10,
        storedQuestions: [],
        question: null,
        options: [],
        idQuestion: 0,
        btnDisabled: true,
        userAnswer: null,
        score: 0,
        showWelcomeMsg: false,
        quizEnd: false
    }

      this.state = this.initialState;
      this.storedDataRef = React.createRef();
  }

  loadQuestions = quizz => {
      const fetchedArrayQuiz = QuizMarvel[0].quizz[quizz];
      if (fetchedArrayQuiz.length >= this.state.maxQuestions) {

          this.storedDataRef.current = fetchedArrayQuiz;

          const newArray = fetchedArrayQuiz.map( ({ answer, ...keepRest})=> keepRest);

          this.setState({
              storedQuestions: newArray
          })

      } else {
          console.log("Pas assez de questions");
      }
  }

  showToastMsg = pseudo => {
      if(!this.state.showWelcomeMsg) {

          this.setState({
              showWelcomeMsg: true
          })


          toast.warn(`Bienvenue ${pseudo} et bonne chance`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            bodyClassName: "toastify-color-welcome",
            });

      }
  }

  componentDidMount() {
      this.loadQuestions(this.state.levelNames[this.state.quizLevel])

  }

  componentDidUpdate(prevProps, prevState) {
      if (this.state.storedQuestions !== prevState.storedQuestions) {
          this.setState({
              question: this.state.storedQuestions[this.state.idQuestion].question,
              options: this.state.storedQuestions[this.state.idQuestion].options
          })
      }

      if (this.state.idQuestion !== prevState.idQuestion) {
          this.setState({
            question: this.state.storedQuestions[this.state.idQuestion].question,
            options: this.state.storedQuestions[this.state.idQuestion].options,
            userAnswer: null,
            btnDisabled: true
          })
      }

      if (this.props.userData.pseudo !== prevProps.userData.pseudo) {
          this.showToastMsg(this.props.userData.pseudo)
      }

  }

  nextQuestion = () => {
      if (this.state.idQuestion === this.state.maxQuestions - 1) {
          this.gameOver();
      } else {
          this.setState(prevState => ({
              idQuestion: prevState.idQuestion + 1
          }))
      }

      const goodAnswer = this.storedDataRef.current[this.state.idQuestion].answer;
      if (this.state.userAnswer === goodAnswer) {
          this.setState( prevState=> ({
              score: prevState.score + 1
          }))

          toast.success("Bravo +1", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
      } else {
          toast.error('Raté 0', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
          });
      }
  }

  submitAnswer = selectedAnswer => {
      this.setState({
          userAnswer: selectedAnswer,
          btnDisabled: false
      })
  }

  getPercentage = (maxQuest, ourScore) => (ourScore / maxQuest) * 100;



  gameOver = () => {

    const gradePercent = this.getPercentage(this.state.maxQuestions, this.state.score);

    if (gradePercent >= 50) {
        this.setState({
            quizLevel: this.state.quizLevel +1,
            percent:  gradePercent,
            quizEnd: true
        })
    } else {
        this.setState({
            percent: gradePercent,
            quizEnd: true
        })
    }

  }

  loadLevelQuestions = param => {
      this.setState({...this.initialState, quizLevel: param})
      this.loadQuestions(this.state.levelNames[param])
  }

  render() {

    const { pseudo } = this.props.userData;

    const displayOptions = this.state.options.map((option, index) => {
        return (
            <p key={index}
                className={`answerOptions ${this.state.userAnswer === option ?  "selected" : null}`}
                onClick={() => this.submitAnswer(option)}
            >
                {option}
            </p>
        )
    })

    return this.state.quizEnd ? (
        <QuizOver
            ref={this.storedDataRef}
            levelNames={this.state.levelNames}
            score={this.state.score}
            maxQuestions={this.state.maxQuestions}
            quizLevel={this.state.quizLevel}
            percent={this.state.percent}
            loadLevelQuestions={this.loadLevelQuestions}
        />
    )
    :
    (
        <Fragment>
            <ToastContainer />
            <Levels />
            <ProgressBar
                idQuestion={this.state.idQuestion}
                maxQuestions={this.state.maxQuestions}
            />
            <h2>{this.state.question}</h2>

            {displayOptions}

            <button disabled={this.state.btnDisabled}
                    className='btnSubmit'
                    onClick={this.nextQuestion}
            >
            {this.state.idQuestion < this.state.maxQuestions - 1 ? "Suivant" : "Terminer"}
            </button>
        </Fragment>
    )
  }
}

export default Quiz
