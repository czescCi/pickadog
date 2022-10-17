const questions = [{
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
            { answerText: 'A short walk or backyard play', isCorrect: false, buyACat: false },
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

export default questions;