import React, { Fragment } from 'react'

const ProgressBar = ({idQuestion, maxQuestions}) => {

    const getWidth = (totalQuestions, questionId) => {
        return (100 / totalQuestions) * questionId;
    }

    const actualQuestion = idQuestion + 1;

    const progressPourcent = getWidth(maxQuestions, actualQuestion);

    return (
      <Fragment>
      <div className="percentage">
            <div className="progressPercent">{`Questions: ${idQuestion}/${maxQuestions}`}</div>
            <div className="progressPercent">{`Progression: ${progressPourcent}%`}</div>
      </div>
      <div className="progressBar">
            <div className="progressBarChange" style={{width: `${progressPourcent}%`}}></div>
      </div>
      </Fragment>
  )
}

export default React.memo(ProgressBar);
