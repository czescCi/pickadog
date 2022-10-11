import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
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

	const handleAnswerButtonClick = (isCorrect) => {

		if (isCorrect === true) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion <questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	}

	const handleStartButtonClick = () => {
		setQuizState(QUIZ_STATES.PLAYING);
	};

	const handleResetButtonClick = () => {
		setCurrentQuestion(0);
		setShowScore(false);
		setScore(0);
		setQuizState(QUIZ_STATES.STARTING);
	};

	return (
		<div className='app'>
			if ({quizState === QUIZ_STATES.RESETING && showScore}) {
				<div className='end-section'>
					<div className='score-section'>You scored {score} out of {questions.length}</div>
					<button className='reset-button' onClick={handleResetButtonClick}>Reset quiz</button>
				</div>
			} else if ({quizState === QUIZ_STATES.PLAYING}) {
				<>
				<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
				</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOptions) => 
						<button className='answer-button' onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button> )}
					</div>
				</>
			} else {
				<div className='start-section'>
					<div className='start-section'>Let's play!</div>
					<button className='start-button' onClick={handleStartButtonClick}>Start quiz</button>
				</div>
			};
		</div>
	);
}