import cavalierImg from '../img/cavalier.jpg';

export const DOGS_SIZE = Object.freeze({
    SMALL: "small",
    MEDIUM: "medium",
    BIG: "big",
    HUGE: "huge",
});

const dogs = [
    {
        id: 1,
        breedName: 'Cavalier King Charles Spaniel',
        size: DOGS_SIZE.SMALL,
        isChildFriendly: true,
        easyToTrain: true,
        lowMaintanance: false,
        goodWithOtherPets: true,
        goodAlone: true,
        icon: cavalierImg,
    },
    {
        id: 2,
        breedName: 'Golden Retriever',
        size: DOGS_SIZE.BIG,
        isChildFriendly: true,
        easyToTrain: true,
        lowMaintanance: false,
        goodWithOtherPets: true,
        goodAlone: false,
    },
    {
        id: 3,
        breedName: 'Vizsla',
        size: DOGS_SIZE.BIG,
        isChildFriendly: true,
        easyToTrain: true,
        lowMaintanance: true,
        goodWithOtherPets: true,
        goodAlone: false,
    },
    {
        id: 4,
        breedName: 'Newfoundland',
        size: DOGS_SIZE.HUGE,
        isChildFriendly: true,
        easyToTrain: true,
        lowMaintanance: false,
        goodWithOtherPets: true,
        goodAlone: true,
    },
    {
        id: 5,
        breedName: 'Nova Scotia Duck Tolling Retriever',
        size: DOGS_SIZE.MEDIUM,
        isChildFriendly: true,
        easyToTrain: true,
        lowMaintanance: false,
        goodWithOtherPets: true,
        goodAlone: true,
    },
    {
        id: 6,
        breedName: 'Lagotto Romagnolo',
        size: DOGS_SIZE.MEDIUM,
        isChildFriendly: true,
        easyToTrain: true,
        lowMaintanance: false,
        goodWithOtherPets: true,
        goodAlone: true,
    },
    {
        id: 7,
        breedName: 'Akita',
        size: DOGS_SIZE.BIG,
        isChildFriendly: false,
        easyToTrain: false,
        lowMaintanance: false,
        goodWithOtherPets: false,
        goodAlone: true,
    },
    {
        id: 8,
        breedName: 'Pyrenean Mountain Dog',
        size: DOGS_SIZE.HUGE,
        isChildFriendly: true,
        easyToTrain: false,
        lowMaintanance: false,
        goodWithOtherPets: true,
        goodAlone: true,
    },
    {
        id: 9,
        breedName: 'Chihuahua',
        size: DOGS_SIZE.SMALL,
        isChildFriendly: false,
        easyToTrain: false,
        lowMaintanance: true,
        goodWithOtherPets: true,
        goodAlone: true,
    },
    {
        id: 10,
        breedName: 'Bullmastiff',
        size: DOGS_SIZE.HUGE,
        isChildFriendly: true,
        easyToTrain: false,
        lowMaintanance: true,
        goodWithOtherPets: true,
        goodAlone: true,
    },
    {
        id: 11,
        breedName: 'Leonberger',
        size: DOGS_SIZE.HUGE,
        isChildFriendly: true,
        easyToTrain: false,
        lowMaintanance: true,
        goodWithOtherPets: true,
        goodAlone: true,
    },
    {
        id: 12,
        breedName: 'Great Dane',
        size: DOGS_SIZE.HUGE,
        isChildFriendly: true,
        easyToTrain: false,
        lowMaintanance: true,
        goodWithOtherPets: true,
        goodAlone: true,
    },
    {
        id: 13,
        breedName: 'Irish Wolfhound',
        size: DOGS_SIZE.HUGE,
        isChildFriendly: true,
        easyToTrain: false,
        lowMaintanance: true,
        goodWithOtherPets: true,
        goodAlone: true,
    },
    {
        id: 14,
        breedName: 'Scottish Deerhound',
        size: DOGS_SIZE.HUGE,
        isChildFriendly: true,
        easyToTrain: false,
        lowMaintanance: true,
        goodWithOtherPets: true,
        goodAlone: true,
    },
    {
        id: 15,
        breedName: 'Corgi',
        size: DOGS_SIZE.SMALL,
        isChildFriendly: true,
        easyToTrain: false,
        lowMaintanance: true,
        goodWithOtherPets: true,
        goodAlone: true,
    },
    {
        id: 16,
        breedName: 'Chow Chow',
        size: DOGS_SIZE.MEDIUM,
        isChildFriendly: false,
        easyToTrain: true,
        lowMaintanance: false,
        goodWithOtherPets: false,
        goodAlone: true,
    },
    {
        id: 17,
        breedName: 'Weimaraner',
        size: DOGS_SIZE.BIG,
        isChildFriendly: false,
        easyToTrain: true,
        lowMaintanance: true,
        goodWithOtherPets: false,
        goodAlone: false,
    },
    {
        id: 18,
        breedName: 'Border Collie',
        size: DOGS_SIZE.MEDIUM,
        isChildFriendly: true,
        easyToTrain: true,
        lowMaintanance: false,
        goodWithOtherPets: true,
        goodAlone: true,
    },
    {
        id: 19,
        breedName: 'Shetland Sheepdog',
        size: DOGS_SIZE.SMALL,
        isChildFriendly: true,
        easyToTrain: false,
        lowMaintanance: false,
        goodWithOtherPets: false,
        goodAlone: false,
    },
    {
        id: 20,
        breedName: 'Airedale Terrier',
        size: DOGS_SIZE.SMALL,
        isChildFriendly: false,
        easyToTrain: true,
        lowMaintanance: true,
        goodWithOtherPets: false,
        goodAlone: false,
    },
    {
        id: 21,
        breedName: 'Alaskan Malamute',
        size: DOGS_SIZE.BIG,
        isChildFriendly: false,
        easyToTrain: true,
        lowMaintanance: false,
        goodWithOtherPets: false,
        goodAlone: false,

    },
    {
        id: 22,
        breedName: 'Bernese Mountain Dog',
        size: DOGS_SIZE.BIG,
        isChildFriendly: false,
        easyToTrain: true,
        lowMaintanance: false,
        goodWithOtherPets: false,
        goodAlone: false,

    },
    {
        id: 23,
        breedName: 'American Pitbull Terrier',
        size: DOGS_SIZE.BIG,
        isChildFriendly: false,
        easyToTrain: false,
        lowMaintanance: true,
        goodWithOtherPets: false,
        goodAlone: true,
    },
    {
        id: 24,
        breedName: 'American Staffordshire Terrier',
        size: DOGS_SIZE.MEDIUM,
        isChildFriendly: false,
        easyToTrain: false,
        lowMaintanance: true,
        goodWithOtherPets: false,
        goodAlone: true,
    },
    {
        id: 25,
        breedName: 'Boxer',
        size: DOGS_SIZE.MEDIUM,
        isChildFriendly: false,
        easyToTrain: true,
        lowMaintanance: true,
        goodWithOtherPets: false,
        goodAlone: false,
    },
    {
        id: 26,
        breedName: 'The Persian Greyhound - Saluki',
        size: DOGS_SIZE.MEDIUM,
        isChildFriendly: false,
        easyToTrain: false,
        lowMaintanance: false,
        goodWithOtherPets: false,
        goodAlone: false,
    },
    {
        id: 27,
        breedName: 'Chesapeake Bay Retriever',
        size: DOGS_SIZE.BIG,
        isChildFriendly: true,
        easyToTrain: true,
        lowMaintanance: true,
        goodWithOtherPets: true,
        goodAlone: true,
    },
    {
        id: 28,
        breedName: 'English Cocker Spaniel',
        size: DOGS_SIZE.SMALL,
        isChildFriendly: true,
        easyToTrain: true,
        lowMaintanance: false,
        goodWithOtherPets: true,
        goodAlone: false,
    },
    {
        id: 29,
        breedName: 'Basset Hound',
        size: DOGS_SIZE.SMALL,
        isChildFriendly: true,
        easyToTrain: false,
        lowMaintanance: true,
        goodWithOtherPets: true,
        goodAlone: true,
    },
    {
        id: 30,
        breedName: 'Basenji',
        size: DOGS_SIZE.MEDIUM,
        isChildFriendly: true,
        easyToTrain: false,
        lowMaintanance: true,
        goodWithOtherPets: false,
        goodAlone: true,
    },
    {
        id: 31,
        breedName: 'Australian Shepherd',
        size: DOGS_SIZE.MEDIUM,
        isChildFriendly: false,
        easyToTrain: true,
        lowMaintanance: false,
        goodWithOtherPets: true,
        goodAlone: true,
    },
    {
        id: 32,
        breedName: 'Australian Terrier',
        size: DOGS_SIZE.SMALL,
        isChildFriendly: true,
        easyToTrain: true,
        lowMaintanance: false,
        goodWithOtherPets: true,
        goodAlone: true,
    },
    {
        id: 33,
        breedName: 'Bearded Collie',
        size: DOGS_SIZE.MEDIUM,
        isChildFriendly: false,
        easyToTrain: true,
        lowMaintanance: false,
        goodWithOtherPets: true,
        goodAlone: true,
    },
    {
        id: 34,
        breedName: 'Belgian Shepherd - Groenendael',
        size: DOGS_SIZE.MEDIUM,
        isChildFriendly: false,
        easyToTrain: true,
        lowMaintanance: false,
        goodWithOtherPets: false,
        goodAlone: true,
    },
    {
        id: 35,
        breedName: 'Black Russian Terrier',
        size: DOGS_SIZE.BIG,
        isChildFriendly: true,
        easyToTrain: true,
        lowMaintanance: false,
        goodWithOtherPets: false,
        goodAlone: true,
    },
    {
        id: 36,
        breedName: 'Bluetick Coonhound',
        size: DOGS_SIZE.MEDIUM,
        isChildFriendly: true,
        easyToTrain: false,
        lowMaintanance: true,
        goodWithOtherPets: true,
        goodAlone: true,
    },
    {
        id: 37,
        breedName: 'Bloodhound',
        size: DOGS_SIZE.BIG,
        isChildFriendly: true,
        easyToTrain: false,
        lowMaintanance: true,
        goodWithOtherPets: true,
        goodAlone: true,
    },
];

export default dogs;