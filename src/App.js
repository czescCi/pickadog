import React, { useState } from 'react';
import dogsImg from './img/dogs.jpg';
import catImg from './img/cat.jpg';
import dogs, { DOGS_SIZE } from './data/dogs.js';
import questions from './data/questions.js';

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

export default function App() {


	const QUIZ_STATES = Object.freeze({
		STARTING: "Starting",
		PLAYING: "Playing",
		RESETING: "Reseting"
	});

	const [currentQuestion, setCurrentQuestion] = useState(0);

	const [quizState, setQuizState] = useState(QUIZ_STATES.STARTING);

	const [catAnswer, setCatAnswer] = useState(false);


	const pickADog = () => {
		let newDogs = dogs;
		if (dogsFeatures.excludedSize) {
			newDogs = newDogs.filter(dog => !excludedSize.includes(dog.size));
		}

		if (dogsFeatures.childFriendlyRequired) {
			newDogs = newDogs.filter(dog => childFriendlyRequired.includes(dog.isChildFriendly));
		}

		if (dogsFeatures.experienced) {
			newDogs = newDogs.filter(dog => !experienced.includes(dog.easyToTrain));
		}

		if (dogsFeatures.haveOtherPets) {
			newDogs = newDogs.filter(dog => haveOtherPets.includes(dog.goodWithOtherPets));
		}

		if (dogsFeatures.oftenAway) {
			newDogs = newDogs.filter(dog => oftenAway.includes(dog.goodAlone));
		}

		if (dogsFeatures.wantsToTrain) {
			newDogs = newDogs.filter(dog => wantsToTrain.includes(dog.easyToTrain));
		}

		if (dogsFeatures.timeToBrush) {
			newDogs = newDogs.filter(dog => !timeToBrush.includes(dog.lowMaintanance));
		}

		if (dogsFeatures.size === DOGS_SIZE.SMALL) {
			newDogs = newDogs.filter(dog => size.includes(dog.size));
		}

		if (dogsFeatures.size === DOGS_SIZE.MEDIUM) {
			newDogs = newDogs.filter(dog => size.includes(dog.size));
		}

		if (dogsFeatures.size === DOGS_SIZE.BIG) {
			newDogs = newDogs.filter(dog => size.includes(dog.size));
		}

		if (dogsFeatures.size === DOGS_SIZE.HUGE) {
			newDogs = newDogs.filter(dog => size.includes(dog.size));
		}
	}

	let drawRandomDog = (newDogs) => {
		let randomDog = newDogs[Math.floor(Math.random() * newDogs.length)].breedName;
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
		console.log(dogsFeatures.excludedSize);

		if (dogsFeatures.excludedSize === undefined) {
			console.log(answer.excludedSize);
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
						{pickADog}
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