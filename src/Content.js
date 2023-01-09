import { useState } from "react";
import dogsImg from "./img/dogs.jpg";
import catImg from "./img/cat.jpg";
import fishImg from "./img/fish.png";
import fishBowlImg from "./img/fish-bowl.png";
import dogLoverImg from "./img/dog_lover.png";
import dogs from "./data/dogs.js";
import questions from "./data/questions.js";
import pickADog from "./pickADog.js";
import { QUESTION_DESCRIPTION } from "./data/questions.js";

let dogBreedResult = null;

const resetDogsFeatures = () => {
  dogsFeatures = {};
};

let dogsFeatures = {
  excludedSize: undefined,
  childFriendlyRequired: undefined,
  experienced: undefined,
  haveOtherPets: undefined,
  quietRequired: undefined,
  active: undefined,
  oftenAway: undefined,
  wantsToTrain: undefined,
  size: undefined,
  timeToBrush: undefined,
};

const Content = () => {
  const QUIZ_STATES = Object.freeze({
    STARTING: "Starting",
    PLAYING: "Playing",
    DOG_FOUND: "Dog found",
    DOG_NOT_FOUND: "Dog not found",
  });

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [quizState, setQuizState] = useState(QUIZ_STATES.STARTING);

  const [fishAnswer, setFishAnswer] = useState(false);

  const handleAnswerButtonClick = (answer) => {
    if (answer.answerText === "Small apartment") {
      let myQuestion = questions.find((question) => {
        return question.id === QUESTION_DESCRIPTION.SIZE;
      });

      let myAnswer = myQuestion.answerOptions.find((answer) => {
        return answer.answerText === "Huge - over 50 kg";
      });

      myAnswer.hide = true;
    }

    //   questionToModify.answerOptions = questionToModify.answerOptions.filter(
    //     (answer) => {
    //       if (answer.answerText === "Huge - over 50 kg") {
    //         return false;
    //       }
    //       return true;
    //     }
    //   );
    // }

    if (answer.buyAFish) {
      setFishAnswer(answer.buyAFish);
    }

    if (dogsFeatures.excludedSize === undefined) {
      dogsFeatures.excludedSize = answer.excludedSize;
    }

    if (dogsFeatures.childFriendlyRequired === undefined) {
      dogsFeatures.childFriendlyRequired = answer.childFriendlyRequired;
    }

    if (dogsFeatures.experienced === undefined) {
      dogsFeatures.experienced = answer.experienced;
    }

    if (dogsFeatures.haveOtherPets === undefined) {
      dogsFeatures.haveOtherPets = answer.haveOtherPets;
    }

    if (dogsFeatures.quietRequired === undefined) {
      dogsFeatures.quietRequired = answer.quietRequired;
    }

    if (dogsFeatures.active === undefined) {
      dogsFeatures.active = answer.active;
    }

    if (dogsFeatures.quietRequired === undefined) {
      dogsFeatures.quietRequired = answer.quietRequired;
    }

    if (dogsFeatures.oftenAway === undefined) {
      dogsFeatures.oftenAway = answer.oftenAway;
    }

    if (dogsFeatures.wantsToTrain === undefined) {
      dogsFeatures.wantsToTrain = answer.wantsToTrain;
    }

    if (dogsFeatures.size === undefined) {
      dogsFeatures.size = answer.size;
    }

    if (dogsFeatures.timeToBrush === undefined) {
      dogsFeatures.timeToBrush = answer.timeToBrush;
    }

    console.log(dogsFeatures);

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      let dogInfo = pickADog(dogs, dogsFeatures);
      if (dogInfo.dogFound) {
        dogBreedResult = dogInfo.breedName;
        setQuizState(QUIZ_STATES.DOG_FOUND);
      } else {
        setQuizState(QUIZ_STATES.DOG_NOT_FOUND);
      }
    }
  };

  const handleStartButtonClick = () => {
    setQuizState(QUIZ_STATES.PLAYING);
  };

  const handleResetButtonClick = () => {
    console.log("reset");
    setCurrentQuestion(0);
    setQuizState(QUIZ_STATES.STARTING);
    setFishAnswer(false);
    resetDogsFeatures();
    console.log(dogsFeatures);
    let myQuestion = questions.find((question) => {
      return question.id === QUESTION_DESCRIPTION.SIZE;
    });

    let myAnswer = myQuestion.answerOptions.find((answer) => {
      return answer.answerText === "Huge - over 50 kg";
    });

    myAnswer.hide = false;
  };

  const handleLearnMoreButtonClick = () => {
    let search =
      "https://www.google.com/search?q=" +
      encodeURIComponent(dogBreedResult) +
      " dog";
    window.open(search, "_blank").focus();
  };

  if (fishAnswer) {
    return (
      <div className="end-one-button-section section-common">
        <div className="score-section upper-text">Better buy a fish</div>
        <img src={fishImg} className="fish-img" alt="fish"></img>
        <img src={fishBowlImg} className="fish-bowl-img" alt="fish-bowl"></img>
        <button
          className="reset-button button-common"
          onClick={handleResetButtonClick}
        >
          Reset quiz
        </button>
      </div>
    );
  } else if (quizState === QUIZ_STATES.DOG_NOT_FOUND) {
    return (
      <div className="end-one-button-section section-common">
        <div id="cat-text" className="score-section upper-text">
          Sorry, <br></br>
          there is no dog for you. <br></br>
          Maybe buy a cat.
        </div>
        <img src={catImg} className="cat-img" alt="cat"></img>
        <button
          className="reset-button button-common"
          onClick={handleResetButtonClick}
        >
          Reset quiz
        </button>
      </div>
    );
  } else if (quizState === QUIZ_STATES.DOG_FOUND) {
    return (
      <div className="end-section section-common">
        <div className="score-section upper-text">{dogBreedResult}</div>

        <img src={dogLoverImg} className="dog-lover-img" alt="dog lover"></img>

        <button
          className="learn-more-button button-common"
          onClick={handleLearnMoreButtonClick}
        >
          Learn more about the breed
        </button>
        <button
          className="reset-button button-common"
          onClick={handleResetButtonClick}
        >
          Reset quiz
        </button>
      </div>
    );
  } else if (quizState === QUIZ_STATES.PLAYING) {
    return (
      <>
        <div className="quiz-section section-common">
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions
              .filter((answer) => !answer.hide)
              .map((answer) => (
                <button
                  className="answer-button button-common"
                  onClick={() => handleAnswerButtonClick(answer)}
                >
                  {answer.answerText}
                </button>
              ))}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="start-section section-common">
        <div id="start-text" className="upper-text">
          Let's pick a dog!
        </div>
        <img src={dogsImg} className="dogs-img" alt="dogs"></img>
        <button
          className="start-button button-common"
          onClick={handleStartButtonClick}
        >
          Start quiz
        </button>
      </div>
    );
  }
};

export default Content;
