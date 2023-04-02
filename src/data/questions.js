import { DOGS_SIZE } from './dogs.js';

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
            { answerText: 'Small apartment', excludedSize: DOGS_SIZE.HUGE },
            { answerText: 'Apartment' },
            { answerText: 'House' },
        ],
    },
    {
        id: QUESTION_DESCRIPTION.KIDS,
        questionText: 'Will he have any kids to snuggle with?',
        answerOptions: [
            { answerText: 'No, I don\'t have kids and I\'m not planning on it', childFriendlyRequired: false },
            { answerText: 'No, I don\'t have kids... Yet', childFriendlyRequired: true },
            { answerText: 'Yes, I have kids under 12 years old', childFriendlyRequired: true },
            { answerText: 'Yes, I have kids over 12 years old', childFriendlyRequired: true },
        ],
    },
    {
        id: QUESTION_DESCRIPTION.EXP,
        questionText: 'Have you owned a dog before?',
        answerOptions: [
            { answerText: 'I\'m an experienced dog owner', experienced: true },
            { answerText: 'I have some experience but don\'t feel like an expert', experienced: true },
            { answerText: 'This will be my first dog', experienced: false },
        ],
    },
    {
        id: QUESTION_DESCRIPTION.PETS,
        questionText: 'Will it have roommates? (Other pets)',
        answerOptions: [
            { answerText: 'No other pets', haveOtherPets: false },
            { answerText: 'Other dogs', haveOtherPets: true },
            { answerText: 'Cats', haveOtherPets: true },
            { answerText: 'Other small animals', haveOtherPets: true },
        ],
    },
    {
        id: QUESTION_DESCRIPTION.BARK,
        questionText: 'In terms of barking, how much noise can you tolerate?',
        answerOptions: [
            { answerText: 'None, I prefer a dog who doesn\'t bark much', quietRequired: true },
            { answerText: 'Some barking doesn\'t bother me too much' },
            { answerText: 'Barking is not an issue for me'},
        ],
    },
    {
        id: QUESTION_DESCRIPTION.PLAY,
        questionText: 'How much will your dog be able to play with you?',
        answerOptions: [
            { answerText: 'Only indoor playtime', 
            buyAFish: true 
        },
            { answerText: 'A short walk or backyard play' },
            { answerText: 'Occasional long walks', active: true },
            { answerText: 'Daily walks and jogs', active: true },
        ],
    },
    {
        id: QUESTION_DESCRIPTION.ALONE,
        questionText: 'How much time will your new dog be spending alone?',
        answerOptions: [
            { answerText: 'I or someone else will be home most of the time' },
            { answerText: 'Only about 4 hours at a time' },
            { answerText: 'Just until I get home from work', oftenAway: true },
            { answerText: 'My dog should be fine by himself for at least 8 hours', 
            oftenAway: true },
        ],
    },
    {
        id: QUESTION_DESCRIPTION.TRAIN,
        questionText: 'How much training will your new dog receive?',
        answerOptions: [
            { answerText: 'None', 
        },
            { answerText: 'Basic obedience', wantsToTrain: true },
            { answerText: 'Advanced obedience', wantsToTrain: true },
        ],
    },
    {
        id: QUESTION_DESCRIPTION.SIZE,
        questionText: 'What size will your new dog be?',
        answerOptions: [
            { answerText: 'Small', size: DOGS_SIZE.SMALL },
            { answerText: 'Medium', size: DOGS_SIZE.MEDIUM },
            { answerText: 'Big', size: DOGS_SIZE.BIG },
            { answerText: 'Huge - over 50 kg', size: DOGS_SIZE.HUGE, hide: false },
        ],
    },
    {
        id: QUESTION_DESCRIPTION.GROOM,
        questionText: 'How much time can you dedicate to your new dog\'s grooming?',
        answerOptions: [
            { answerText: 'Very little' },
            { answerText: 'Every so often', timeToBrush: true },
            { answerText: 'Daily', timeToBrush: true },
        ],
    },
];

export default questions;
export { QUESTION_DESCRIPTION };