import React, { useState } from 'react';
import dogsImg from './img/dogs.jpg';
import catImg from './img/cat.jpg';
import hamsterImg from './img/hamster.jpg';
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
		DOG_FOUND: "Dog found",
		DOG_NOT_FOUND: "Dog not found"
	});

	const [currentQuestion, setCurrentQuestion] = useState(0);

	const [quizState, setQuizState] = useState(QUIZ_STATES.STARTING);

	const [catAnswer, setCatAnswer] = useState(false);

	const [breedName, setBreedName] = useState(null);

	/* eslint-disable no-undef */

	const pickADog = () => {
		let newDogs = dogs;

		if (dogsFeatures.excludedSize !== undefined) {
			newDogs = newDogs.filter(dog => {
				if (dogsFeatures.excludedSize === DOGS_SIZE.HUGE && dog.size === DOGS_SIZE.HUGE) {
					return false;
				}

				return true;
			});
		}


		if (dogsFeatures.childFriendlyRequired !== undefined) {
			newDogs = newDogs.filter(dog => {
				if (dogsFeatures.childFriendlyRequired && dog.isChildFriendly) {
					return true;
				} else if (dogsFeatures.childFriendlyRequired && !dog.isChildFriendly) {
					return false;
				} else if (!dogsFeatures.childFriendlyRequired) {
					return true;
				}

				return true;
			});
		}

		if (dogsFeatures.experienced !== undefined) {
			newDogs = newDogs.filter(dog => {
				// jesli experienced jest true to zwracam wszystkie psy
				if (dogsFeatures.experienced) {
					return true;
					// jesli experienced jest false i psy sa easy to train to psa
				} else if (!dogsFeatures.experienced && dog.easyToTrain) {
					return true;
					// jesli experienced jest false i psy nie sa easy to train to nie zwracam nic
				} else if (!dogsFeatures.experienced && !easyToTrain) {
					return false
				}

				return true;
			});
		}


		if (dogsFeatures.haveOtherPets !== undefined) {
			newDogs = newDogs.filter(dog => {
				//jesli have other pets jest true i good with other pets jest true to zwracam psa
				if (dogsFeatures.haveOtherPets && dog.goodWithOtherPets) {
					return true;
					//jesli have other pets jest true, ale pies nie jest good with other pets to nie zwracam psa
				} else if (dogsFeatures.haveOtherPets && !dog.goodWithOtherPets) {
					return false;
					//jesli have other pets jest false to zwracam wszyskie psy
				} else if (!dogsFeatures.haveOtherPets) {
					return true;
				}

				return true;
			});
		}

		if (dogsFeatures.oftenAway !== undefined) {
			newDogs = newDogs.filter(dog => {
				if (dogsFeatures.oftenAway && dog.goodAlone) {
					return true;
				} else if (dogsFeatures.oftenAway && !dog.goodAlone) {
					return false;
				} else if (!dogsFeatures.oftenAway) {
					return true;
				}

				return true;
			});
		}

		if (dogsFeatures.wantsToTrain !== undefined) {
			newDogs = newDogs.filter(dog => {
				if (dogsFeatures.wantsToTrain && dog.easyToTrain) {
					return true;
				} else if (dogsFeatures.wantsToTrain && !dog.easyToTrain) {
					return false;
				} else if (!dogsFeatures.wantsToTrain) {
					return true;
				}

				return true;
			});
		}

		if (dogsFeatures.timeToBrush !== undefined) {
			newDogs = newDogs.filter(dog => {
				if (dogsFeatures.timeToBrush && dog.lowMaintanance) {
					return true;
				} else if (dogsFeatures.timeToBrush && !dog.lowMaintanance) {
					return true;
				} else if (!dogsFeatures.timeToBrush && dog.lowMaintanance) {
					return true;
				} else if (!dogsFeatures.timeToBrush) {
					return false;
				}

				return true;
			});
		}

		if (dogsFeatures.size === DOGS_SIZE.SMALL) {
			// jesli rozmiar wybranego psa jest small pokazuje tylko psy z size small
			newDogs = newDogs.filter(dog => {
				if (dog.size === DOGS_SIZE.SMALL) {
					return true;
				}

				return false;
			});
		}

		if (dogsFeatures.size === DOGS_SIZE.MEDIUM) {
			console.log("newDogs before: ");
			console.log(newDogs);
			newDogs = newDogs.filter(dog => {
				if (dog.size === DOGS_SIZE.MEDIUM) {
					return true;
				}

				return false;
			});
			console.log("newDogs after: ");
			console.log(newDogs);
		}

		if (dogsFeatures.size === DOGS_SIZE.BIG) {
			console.log("bignewDogs before: ");
			console.log(newDogs);
			newDogs = newDogs.filter(dog => {
				if (dog.size === DOGS_SIZE.BIG) {
					return true;
				}

				return false;
			});
			console.log("bignewDogs after: ");
			console.log(newDogs);
		}

		if (dogsFeatures.size === DOGS_SIZE.HUGE) {
			newDogs = newDogs.filter(dog => {
				if (dog.size === DOGS_SIZE.HUGE) {
					return true;
				}

				return false;
			});
		}

		console.log('new dogs: ');
		console.log(newDogs);

		let pickADogResult = {
			dogFound: false,
			breedName: null,
		};

		pickADogResult.dogFound = newDogs.length > 0;

		if (pickADogResult.dogFound) {
			pickADogResult.breedName = newDogs[Math.floor(Math.random() * newDogs.length)].breedName
		};

		return pickADogResult;

	}

	/* eslint-enable no-undef */

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

			console.log("question to modify: ");
			console.log(questionToModify);


			let questionsArray = questions;

			console.log("This is questions array: ");
			console.log(questionsArray);

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
			pickADog();
			if (newDogs.length > 0) {
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