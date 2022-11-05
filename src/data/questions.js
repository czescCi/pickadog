const QUESTION_DESCRIPTION = Object.freeze({
    HOME: "Living situation",
    KIDS: "Kids",
    EXP: "Dogs experience",
    PETS: "Other pets",
    BARK: "Barking",
    PLAY: "Playing",
    ALONE: "Alone time",
    TRAIN: "Training",
    SIZE: "Size",
    GROOM: "Grooming",
});

const questions = [{
        id: QUESTION_DESCRIPTION.HOME,
        questionText: 'Where will your dog live?',
        answerOptions: [
            { answerText: 'Apartment', buyACat: false },
            { answerText: 'House', buyACat: false },
        ],
    },
    {
        id: QUESTION_DESCRIPTION.KIDS,
        questionText: 'Will he have any kids to snuggle with?',
        answerOptions: [
            { answerText: 'No, I don\'t have kids and I\'m not planning on it', buyACat: false, childFriendly: 1 },
            { answerText: 'No, I don\'t have kids... Yet', buyACat: false, childFriendly: 3 },
            { answerText: 'Yes, I have kids under 12 years old', buyACat: false, childFriendly: 3 },
            { answerText: 'Yes, I have kids over 12 years old', buyACat: false, childFriendly: 2 },
        ],
    },
    {
        id: QUESTION_DESCRIPTION.EXP,
        questionText: 'Have you owned a dog before?',
        answerOptions: [
            { answerText: 'I\'m an experienced dog owner', buyACat: false },
            { answerText: 'I have some experience but don\'t feel like an expert', buyACat: false },
            { answerText: 'This will be my first dog', buyACat: false },
        ],
    },
    {
        id: QUESTION_DESCRIPTION.PETS,
        questionText: 'Will he have roommates? (Other pets)',
        answerOptions: [
            { answerText: 'No other pets', buyACat: false, goodWithPets: 1 },
            { answerText: 'Other dogs', buyACat: false, goodWithPets: 2 },
            { answerText: 'Cats', buyACat: false, goodWithPets: 2 },
            { answerText: 'Other small animals', buyACat: false, goodWithPets: 2 },
        ],
    },
    {
        id: QUESTION_DESCRIPTION.BARK,
        questionText: 'In terms of barking, how much noise can you tolerate?',
        answerOptions: [
            { answerText: 'None, I prefer a dog who doesn\'t bark much', buyACat: false },
            { answerText: 'Some barking doesn\'t bother me too much', buyACat: false },
            { answerText: 'Barking is not an issue for me', buyACat: false },
        ],
    },
    {
        id: QUESTION_DESCRIPTION.PLAY,
        questionText: 'How much will your dog be able to play with you?',
        answerOptions: [
            { answerText: 'Only indoor playtime', buyACat: true },
            { answerText: 'A short walk or backyard play', buyACat: false },
            { answerText: 'Occasional long walks', buyACat: false },
            { answerText: 'Daily walks and jogs', buyACat: false },
        ],
    },
    {
        id: QUESTION_DESCRIPTION.ALONE,
        questionText: 'How much time will your new dog be spending alone?',
        answerOptions: [
            { answerText: 'I or someone else will be home most of the time', buyACat: false, goodAlone: 1 },
            { answerText: 'Only about 4 hours at a time', buyACat: false, goodAlone: 2 },
            { answerText: 'Just until I get home from work', buyACat: false, goodAlone: 3 },
            { answerText: 'My dog should be fine by himself for at least 8 hours', buyACat: true, goodAlone: 3 },
        ],
    },
    {
        id: QUESTION_DESCRIPTION.TRAIN,
        questionText: 'How much training will your new dog receive?',
        answerOptions: [
            { answerText: 'None', buyACat: false },
            { answerText: 'Basic obedience', buyACat: false },
            { answerText: 'Advanced obedience', buyACat: false },
        ],
    },
    {
        id: QUESTION_DESCRIPTION.SIZE,
        questionText: 'What size will your new dog be?',
        answerOptions: [
            { answerText: 'small', buyACat: false },
            { answerText: 'medium', buyACat: false },
            { answerText: 'big', buyACat: false },
            { answerText: 'huge', buyACat: false },
        ],
    },
    {
        id: QUESTION_DESCRIPTION.GROOM,
        questionText: 'How much time can you dedicate to your new dog\'s grooming?',
        answerOptions: [
            { answerText: 'Very little', buyACat: false },
            { answerText: 'Every so often', buyACat: false },
            { answerText: 'Daily', buyACat: false },
        ],
    },
];

export default questions;