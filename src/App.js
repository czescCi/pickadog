import React, { useState } from 'react';
import dogsImg from './img/dogs.jpg';
import catImg from './img/cat.jpg';
import dogs, { DOGS_SIZE } from './data/dogs.js';
import questions from './data/questions.js';

export default function App() {


	const QUIZ_STATES = Object.freeze({
		STARTING: "Starting",
		PLAYING: "Playing",
		RESETING: "Reseting"
	});

	const [currentQuestion, setCurrentQuestion] = useState(0);

	const [quizState, setQuizState] = useState(QUIZ_STATES.STARTING);

	const [catAnswer, setCatAnswer] = useState(false);

	let dogsFeatures = 
		{
			// excludedSize: undefined,
			// childFriendlyRequired: undefined,
			// experienced: undefined,
			// haveOtherPets: undefined,
			// quietRequired: undefined,
			// active: undefined,
			// oftenAway: undefined,
			// wantsToTrain: undefined,
			// size: undefined,
			// timeToBrush: undefined,			
		};

	const drawRandomDog = (dogs) => {
		let randomDog = dogs[Math.floor(Math.random() * dogs.length)].breedName;
		console.log(randomDog);
	};


	const handleAnswerButtonClick = (answer) => {
		if (answer.buyACat) {
			setCatAnswer(answer.buyACat);
		}

		// if (answer.excludedSize === DOGS_SIZE.HUGE) {
		// 	let excluded = DOGS_SIZE.HUGE;
		// 	let dogsWithoutHugeBreeds = dogs.filter(dog => !excluded.includes(dog.size));
		// 	console.log(dogsWithoutHugeBreeds);
		// }
		dogsFeatures.excludedSize = answer.excludedSize;
		dogsFeatures.childFriendlyRequired = answer.childFriendlyRequired;
		dogsFeatures.experienced = answer.experienced;
		dogsFeatures.haveOtherPets = answer.haveOtherPets;
		dogsFeatures.quietRequired = answer.quietRequired;
		dogsFeatures.active = answer.active;
		dogsFeatures.oftenAway = answer.oftenAway;
		dogsFeatures.wantsToTrain = answer.wantsToTrain;
		dogsFeatures.size = answer.size;
		dogsFeatures.timeToBrush = answer.timeToBrush;

		console.log(dogsFeatures);

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setQuizState(QUIZ_STATES.RESETING);
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
		} else if (quizState === QUIZ_STATES.RESETING) {
			return (
			<div className='end-section'>
				<div className='score-section'>
						{/* {drawRandomDogBySize(dogs.size, dogs)} */}
					</div>
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
					<button className='answer-button'onClick={() => handleAnswerButtonClick(answer)}>
							{answer.answerText} 
					</button> )}
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