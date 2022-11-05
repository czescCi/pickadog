import React, { useState } from 'react';
import dogsImg from './img/dogs.jpg';
import catImg from './img/cat.jpg';
import dogs, { DOGS_SIZE } from './data/dogs.js';
import questions from './data/questions.js';

let answers = []

export default function App() {


	const QUIZ_STATES = Object.freeze({
		STARTING: "Starting",
		PLAYING: "Playing",
		RESETING: "Reseting"
	});

	const [currentQuestion, setCurrentQuestion] = useState(0);

	const [quizState, setQuizState] = useState(QUIZ_STATES.STARTING);

	const [catAnswer, setCatAnswer] = useState(false);

	const [dogSize, setDogSize] = useState('');

	const drawRandomDog = (dogs) => {
		let randomDog = dogs[Math.floor(Math.random() * dogs.length)].breedName;
		console.log(randomDog);
	};

	const drawRandomDogBySize = (size, dogs) => {
		switch(size) {
			case DOGS_SIZE.SMALL:
				let smallDogs = dogs.filter(dogs => dogs.size === DOGS_SIZE.SMALL);
				drawRandomDog(smallDogs);
			break;
			case DOGS_SIZE.MEDIUM:
				let mediumDogs = dogs.filter(dogs => dogs.size === DOGS_SIZE.MEDIUM);
				drawRandomDog(mediumDogs);
			break;
			case DOGS_SIZE.BIG:
				let bigDogs = dogs.filter(dogs => dogs.size === DOGS_SIZE.BIG);
				drawRandomDog(bigDogs);
			break;
			default:
				let hugeDogs = dogs.filter(dogs => dogs.size === DOGS_SIZE.HUGE);
				drawRandomDog(hugeDogs);
		}
	}
	
	const handleAnswerButtonClick = (buyACat, answerText) => {
		answers.push(answerText);
		if (buyACat) {
			setCatAnswer(buyACat);
		}

		if (answerText === DOGS_SIZE.SMALL) {
			setDogSize(DOGS_SIZE.SMALL);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			console.log(answers);
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
		setDogSize('');
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
						{drawRandomDogBySize(dogs.size, dogs)}
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
					{questions[currentQuestion].answerOptions.map((answerOptions) => 
					<button className='answer-button'onClick={() => handleAnswerButtonClick(answerOptions.buyACat, answerOptions.answerText)}>
							{answerOptions.answerText} 
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