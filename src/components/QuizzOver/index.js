import React, { Fragment, useEffect, useState } from 'react';


const QuizOver = React.forwardRef((props, ref) => {


  const [asked, setAsked] = useState([]);

  useEffect(() => {
      setAsked(ref.current)

  }, [ref])

  const questionAnswer = asked.map( question => {
      return (
          <tr key={question.id}>
              <td>{question.question}</td>
              <td>{question.answer}</td>
              <td>
                  <button className="btnInfo"></button>
              </td>
          </tr>
      )
  })

    return (
        <Fragment>
            <div className="stepsBtnContainer">
                <p className="sucessMsg">Bravo, vous êtes un expert !</p>
                <button className="btnResult success"></button>
            </div>
            <div className="percentage">
            <div className="progressPercent">Réussite: 10%</div>
            <div className="progressPercent">Note 10/10</div>
            </div>

            <hr />
            <p>Les réponses aux questions posées:</p>

            <div className="answerContainer">
                <table className="answers">
                    <thead>
                        <tr>
                            <th>Question</th>
                            <th>Réponses</th>
                            <th>Infos</th>
                        </tr>
                    </thead>
                    <tbody>
                        {questionAnswer}
                    </tbody>
                </table>
            </div>

      </Fragment>
    )
})

export default React.memo(QuizOver);