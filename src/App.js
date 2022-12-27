import React, { useState } from 'react';
import dogsImg from './img/dogs.jpg';
import catImg from './img/cat.jpg';
import hamsterImg from './img/hamster.jpg';
import dogs from './data/dogs.js';
import questions from './data/questions.js';
import pickADog from './pickADog.js';

let dogsFeatures =
{
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

let dogBreedResult = null;

let dogIcon = null;

export default function App() {


	const QUIZ_STATES = Object.freeze({
		STARTING: "Starting",
		PLAYING: "Playing",
		DOG_FOUND: "Dog found",
		DOG_NOT_FOUND: "Dog not found"
	});

	const [currentQuestion, setCurrentQuestion] = useState(0);

	const [quizState, setQuizState] = useState(QUIZ_STATES.STARTING);

	const [catAnswer, setCatAnswer] = useState(false);

	const handleAnswerButtonClick = (answer) => {
		if (answer.answerText === 'Small apartment') {

			const questionToModify = questions.find(question => {
				return question.answerOptions.some(answer => answer.answerText === 'Huge - over 50 kg');
			});

			questionToModify.answerOptions = questionToModify.answerOptions.filter(answer => {
				if (answer.answerText === 'Huge - over 50 kg') {
					return false;
				}
				return true;
			});
		}

		if (answer.buyACat) {
			setCatAnswer(answer.buyACat);
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
				dogIcon = dogInfo.icon;
				setQuizState(QUIZ_STATES.DOG_FOUND);
			} else {
				setQuizState(QUIZ_STATES.DOG_NOT_FOUND);
			}
		}
	}

	const handleStartButtonClick = () => {
		setQuizState(QUIZ_STATES.PLAYING);
	};

	const handleResetButtonClick = () => {
		setCurrentQuestion(0);
		setQuizState(QUIZ_STATES.STARTING);
		setCatAnswer(false);
	};

	const handleContent = () => {
		if (catAnswer) {
			return (
				<div className='end-section'>
					<div className='score-section'>
						Better buy a cat
					</div>
					<img src={catImg} className='cat-img' alt='cat'></img>
					<button className='reset-button' onClick={handleResetButtonClick}>
						Reset quiz
					</button>
				</div>
			)
		} else if (quizState === QUIZ_STATES.DOG_NOT_FOUND) {
			return (
				<div className='end-section'>
					<div className='score-section'>
						Sorry, there is no dog for you. <br></br>
						Maybe buy a hamster.
					</div>
					<img src={hamsterImg} className='hamster-img' alt='hamster'></img>
					<button className='reset-button' onClick={handleResetButtonClick}>
						Reset quiz
					</button>
				</div>
			)
		} else if (quizState === QUIZ_STATES.DOG_FOUND) {
			return (
				<div className='end-section'>
					<div className='score-section'>
						{dogBreedResult}
					</div>
					<div className='score-section'>
						{/* <img src={} className='hamster-img' alt='hamster'></img> */}
					</div>
					<button className='learn-more-button'>
						Learn more
					</button>
					<button className='reset-button' onClick={handleResetButtonClick}>
						Reset quiz
					</button>
				</div>
			)
		} else if (quizState === QUIZ_STATES.PLAYING) {
			return (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answer) =>
							<button className='answer-button' onClick={() => handleAnswerButtonClick(answer)}>
								{answer.answerText}
							</button>)}
					</div>
				</>
			)
		} else {
			return (
				<div className='start-section'>
					<div className='start-section'>
						Let's play!
					</div>
					<img src={dogsImg} className='dogs-img' alt='dogs'></img>
					<button className='start-button' onClick={handleStartButtonClick}>
						Start quiz
					</button>
				</div>
			)
		};
	}

	return (
		<div className='app'>
			{handleContent()}
		</div>
	);
}