import pickADog from '../pickADog.js';
import DOGS_SIZE from '../data/dogs.js';

test('Properly choose small dog size', () => {
    // arrange
    let dogs = [{
            id: 1,
            breedName: 'Cavalier King Charles Spaniel',
            size: DOGS_SIZE.SMALL,
            isChildFriendly: true,
            easyToTrain: true,
            lowMaintanance: false,
            goodWithOtherPets: true,
            goodAlone: true,
            icon: null,
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
            breedName: 'Newfoundland',
            size: DOGS_SIZE.HUGE,
            isChildFriendly: true,
            easyToTrain: true,
            lowMaintanance: false,
            goodWithOtherPets: true,
            goodAlone: true,
        },
        {
            id: 4,
            breedName: 'Nova Scotia Duck Tolling Retriever',
            size: DOGS_SIZE.MEDIUM,
            isChildFriendly: true,
            easyToTrain: true,
            lowMaintanance: false,
            goodWithOtherPets: true,
            goodAlone: true,
        },
    ]

    let dogsFeatures = {
        excludedSize: undefined,
        childFriendlyRequired: undefined,
        experienced: undefined,
        haveOtherPets: undefined,
        quietRequired: undefined,
        active: undefined,
        oftenAway: undefined,
        wantsToTrain: undefined,
        size: DOGS_SIZE.SMALL,
        timeToBrush: undefined,
    };
    // act

    // assert
    let result = pickADog(dogs, dogsFeatures)

    expect(result.dogFound).toEqual(true);
    expect(result.breedName).toEqual('Cavalier King Charles Spaniel');
});