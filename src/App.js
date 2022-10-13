import React, { useState } from 'react';
import dogs from './dogs.jpg';

export default function App() {
	const questions = [
		{
			questionText: 'Where will your dog live',
			answerOptions: [
				{ answerText: 'Apartment', isCorrect: false, buyACat: false },
				{ answerText: 'House', isCorrect: false, buyACat: false },
			],
		},
		{
			questionText: 'Will he have any kids to snuggle with',
			answerOptions: [
				{ answerText: 'No, I don\'t have kids and I\'m not planning on it', isCorrect: false, buyACat: false },
				{ answerText: 'No, I don\'t have kids... Yet', isCorrect: true, buyACat: false },
				{ answerText: 'Yes, I have kids under 12 years old', isCorrect: false, buyACat: false },
				{ answerText: 'Yes, I have kids over 12 years old', isCorrect: false, buyACat: false },
			],
		},
		{
			questionText: 'Have you owned a dog before?',
			answerOptions: [
				{ answerText: 'I\'m an experienced dog owner', isCorrect: true, buyACat: false },
				{ answerText: 'I have some experience but don\'t feel like an expert', isCorrect: false, buyACat: false },
				{ answerText: 'This will be my first dog', isCorrect: false, buyACat: false },
			],
		},
		{
			questionText: 'Will he have roommates? (Other pets)',
			answerOptions: [
				{ answerText: 'No other pets', isCorrect: false, buyACat: false },
				{ answerText: 'Other dogs', isCorrect: false, buyACat: false },
				{ answerText: 'Cats', isCorrect: false, buyACat: false },
				{ answerText: 'Other small animals', isCorrect: true, buyACat: false },
			],
		},
		{
			questionText: 'In terms of barking, how much noise can you tolerate',
			answerOptions: [
				{ answerText: 'None, I prefer a dog who doesn\'t bark much', isCorrect: false, buyACat: false },
				{ answerText: 'Some barking doesn\'t bother me too much', isCorrect: false, buyACat: false },
				{ answerText: 'Barking is not an issue for me', isCorrect: false, buyACat: false },
			],
		},
		{
			questionText: 'How much will your dog be able to play with you?',
			answerOptions: [
				{ answerText: 'Only indoor playtime', isCorrect: false, buyACat: true },
				{ answerText: 'A short walk or backyard play', isCorrect: false, buyACat: true },
				{ answerText: 'Occasional long walks', isCorrect: false, buyACat: false },
				{ answerText: 'Daily walks and jogs', isCorrect: true, buyACat: false },
			],
		},
		{
			questionText: 'How much time will your new dog be spending alone?',
			answerOptions: [
				{ answerText: 'I or someone else qill be home most of the time', isCorrect: false, buyACat: false },
				{ answerText: 'Only about 4 hours at a time', isCorrect: false, buyACat: false },
				{ answerText: 'Just until I get home from work', isCorrect: false, buyACat: false },
				{ answerText: 'My dog should be fine by himself for at least 8 hours', isCorrect: true, buyACat: true },
			],
		},
		{
			questionText: 'How much training will your new dog receive?',
			answerOptions: [
				{ answerText: 'None', isCorrect: false, buyACat: false },
				{ answerText: 'Basic obedience', isCorrect: false, buyACat: false },
				{ answerText: 'Advanced obedience', isCorrect: false, buyACat: false },
			],
		},
		{
			questionText: 'What size will your new dog be?',
			answerOptions: [
				{ answerText: 'Small', isCorrect: false, buyACat: false },
				{ answerText: 'Medium', isCorrect: false, buyACat: false },
				{ answerText: 'Big', isCorrect: false, buyACat: false },
				{ answerText: 'Huge - over 50 kg', isCorrect: true, buyACat: false },
			],
		},
		{
			questionText: 'How much time can you dedicate to your new dog\'s grooming?',
			answerOptions: [
				{ answerText: 'Very little', isCorrect: false, buyACat: false },
				{ answerText: 'Every so often', isCorrect: false, buyACat: false },
				{ answerText: 'Daily', isCorrect: false, buyACat: false },
			],
		},
	];

	const QUIZ_STATES = Object.freeze({
		STARTING: "Starting",
		PLAYING: "Playing",
		RESETING: "Reseting"
	});

	const [currentQuestion, setCurrentQuestion] = useState(0);

	const [showScore, setShowScore] = useState(false);

	const [score, setScore] = useState(0);

	const [quizState, setQuizState] = useState(QUIZ_STATES.STARTING);

	const [buyACat, setBuyACat] = useState(false);

	const handleAnswerButtonClick = (isCorrect) => {

		if (isCorrect === true) {
			setScore(score + 1);
		}

		if (buyACat === true) {
			setBuyACat(true);
			return (
				<div className='end-section'>
					<div className='score-section'>
						Better buy a cat
					</div>
					<button className='reset-button' onClick={handleResetButtonClick}>
						Reset quiz
					</button>
			</div>
			)
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion <questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	}

	// const checkIfCatsBetterOption = (buyACat) => {
		
	// 	if (buyACat === true) {
	// 		setBuyACat(true);
	// 	}
	// }

	const handleStartButtonClick = () => {
		setQuizState(QUIZ_STATES.PLAYING);
	};

	const handleResetButtonClick = () => {
		setCurrentQuestion(0);
		setShowScore(false);
		setScore(0);
		setQuizState(QUIZ_STATES.STARTING);
		setBuyACat(false);
	};
	
	const handleContent = () => {
		if (showScore) {
			return (
			<div className='end-section'>
				<div className='score-section'>
					You scored {score} out of {questions.length}
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
					<button className='answer-button'onClick={() => handleAnswerButtonClick(answerOptions.isCorrect, answerOptions.buyACat)}>
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
				<img src={dogs} alt='dogs'></img>
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