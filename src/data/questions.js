const questions = [{
        questionText: 'Where will your dog live',
        answerOptions: [
            { answerText: 'Apartment', buyACat: false },
            { answerText: 'House', buyACat: false },
        ],
    },
    {
        questionText: 'Will he have any kids to snuggle with',
        answerOptions: [
            { answerText: 'No, I don\'t have kids and I\'m not planning on it', buyACat: false },
            { answerText: 'No, I don\'t have kids... Yet', buyACat: false },
            { answerText: 'Yes, I have kids under 12 years old', buyACat: false },
            { answerText: 'Yes, I have kids over 12 years old', buyACat: false },
        ],
    },
    {
        questionText: 'Have you owned a dog before?',
        answerOptions: [
            { answerText: 'I\'m an experienced dog owner', buyACat: false },
            { answerText: 'I have some experience but don\'t feel like an expert', buyACat: false },
            { answerText: 'This will be my first dog', buyACat: false },
        ],
    },
    {
        questionText: 'Will he have roommates? (Other pets)',
        answerOptions: [
            { answerText: 'No other pets', buyACat: false },
            { answerText: 'Other dogs', buyACat: false },
            { answerText: 'Cats', buyACat: false },
            { answerText: 'Other small animals', buyACat: false },
        ],
    },
    {
        questionText: 'In terms of barking, how much noise can you tolerate',
        answerOptions: [
            { answerText: 'None, I prefer a dog who doesn\'t bark much', buyACat: false },
            { answerText: 'Some barking doesn\'t bother me too much', buyACat: false },
            { answerText: 'Barking is not an issue for me', buyACat: false },
        ],
    },
    {
        questionText: 'How much will your dog be able to play with you?',
        answerOptions: [
            { answerText: 'Only indoor playtime', buyACat: true },
            { answerText: 'A short walk or backyard play', buyACat: false },
            { answerText: 'Occasional long walks', buyACat: false },
            { answerText: 'Daily walks and jogs', buyACat: false },
        ],
    },
    {
        questionText: 'How much time will your new dog be spending alone?',
        answerOptions: [
            { answerText: 'I or someone else qill be home most of the time', buyACat: false },
            { answerText: 'Only about 4 hours at a time', buyACat: false },
            { answerText: 'Just until I get home from work', buyACat: false },
            { answerText: 'My dog should be fine by himself for at least 8 hours', buyACat: true },
        ],
    },
    {
        questionText: 'How much training will your new dog receive?',
        answerOptions: [
            { answerText: 'None', buyACat: false },
            { answerText: 'Basic obedience', buyACat: false },
            { answerText: 'Advanced obedience', buyACat: false },
        ],
    },
    {
        questionText: 'What size will your new dog be?',
        answerOptions: [
            { answerText: 'Small', buyACat: false },
            { answerText: 'Medium', buyACat: false },
            { answerText: 'Big', buyACat: false },
            { answerText: 'Huge - over 50 kg', buyACat: false },
        ],
    },
    {
        questionText: 'How much time can you dedicate to your new dog\'s grooming?',
        answerOptions: [
            { answerText: 'Very little', buyACat: false },
            { answerText: 'Every so often', buyACat: false },
            { answerText: 'Daily', buyACat: false },
        ],
    },
];

export default questions;