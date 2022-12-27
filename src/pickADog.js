import DOGS_SIZE from './data/dogs.js';

const pickADog = (dogsList, dogsFeaturesList) => {
    let newDogs = dogsList;

    if (dogsFeaturesList.excludedSize !== undefined) {
        newDogs = newDogs.filter(dog => {
            if (dogsFeaturesList.excludedSize === DOGS_SIZE.HUGE && dog.size === DOGS_SIZE.HUGE) {
                return false;
            }

            return true;
        });
    }


    if (dogsFeaturesList.childFriendlyRequired !== undefined) {
        newDogs = newDogs.filter(dog => {
            if (dogsFeaturesList.childFriendlyRequired && dog.isChildFriendly) {
                return true;
            } else if (dogsFeaturesList.childFriendlyRequired && !dog.isChildFriendly) {
                return false;
            } else if (!dogsFeaturesList.childFriendlyRequired) {
                return true;
            }

            return true;
        });
    }

    if (dogsFeaturesList.experienced !== undefined) {
        newDogs = newDogs.filter(dog => {
            // jesli experienced jest true to zwracam wszystkie psy
            if (dogsFeaturesList.experienced) {
                return true;
                // jesli experienced jest false i psy sa easy to train to psa
            } else if (!dogsFeaturesList.experienced && dog.easyToTrain) {
                return true;
                // jesli experienced jest false i psy nie sa easy to train to nie zwracam nic
            } else if (!dogsFeaturesList.experienced && !dog.easyToTrain) {
                return false
            }

            return true;
        });
    }


    if (dogsFeaturesList.haveOtherPets !== undefined) {
        newDogs = newDogs.filter(dog => {
            //jesli have other pets jest true i good with other pets jest true to zwracam psa
            if (dogsFeaturesList.haveOtherPets && dog.goodWithOtherPets) {
                return true;
                //jesli have other pets jest true, ale pies nie jest good with other pets to nie zwracam psa
            } else if (dogsFeaturesList.haveOtherPets && !dog.goodWithOtherPets) {
                return false;
                //jesli have other pets jest false to zwracam wszyskie psy
            } else if (!dogsFeaturesList.haveOtherPets) {
                return true;
            }

            return true;
        });
    }

    if (dogsFeaturesList.oftenAway !== undefined) {
        newDogs = newDogs.filter(dog => {
            if (dogsFeaturesList.oftenAway && dog.goodAlone) {
                return true;
            } else if (dogsFeaturesList.oftenAway && !dog.goodAlone) {
                return false;
            } else if (!dogsFeaturesList.oftenAway) {
                return true;
            }

            return true;
        });
    }

    if (dogsFeaturesList.wantsToTrain !== undefined) {
        newDogs = newDogs.filter(dog => {
            if (dogsFeaturesList.wantsToTrain && dog.easyToTrain) {
                return true;
            } else if (dogsFeaturesList.wantsToTrain && !dog.easyToTrain) {
                return false;
            } else if (!dogsFeaturesList.wantsToTrain) {
                return true;
            }

            return true;
        });
    }

    if (dogsFeaturesList.timeToBrush !== undefined) {
        newDogs = newDogs.filter(dog => {
            if (dogsFeaturesList.timeToBrush && dog.lowMaintanance) {
                return true;
            } else if (dogsFeaturesList.timeToBrush && !dog.lowMaintanance) {
                return true;
            } else if (!dogsFeaturesList.timeToBrush && dog.lowMaintanance) {
                return true;
            } else if (!dogsFeaturesList.timeToBrush) {
                return false;
            }

            return true;
        });
    }

    if (dogsFeaturesList.size === DOGS_SIZE.SMALL) {
        // jesli rozmiar wybranego psa jest small pokazuje tylko psy z size small
        newDogs = newDogs.filter(dog => {
            if (dog.size === DOGS_SIZE.SMALL) {
                return true;
            }

            return false;
        });
    }

    if (dogsFeaturesList.size === DOGS_SIZE.MEDIUM) {

        newDogs = newDogs.filter(dog => {
            if (dog.size === DOGS_SIZE.MEDIUM) {
                return true;
            }

            return false;
        });
    }

    if (dogsFeaturesList.size === DOGS_SIZE.BIG) {
        console.log(newDogs);
        newDogs = newDogs.filter(dog => {
            if (dog.size === DOGS_SIZE.BIG) {
                return true;
            }

            return false;
        });
    }

    if (dogsFeaturesList.size === DOGS_SIZE.HUGE) {
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
        icon: null,
    };

    pickADogResult.dogFound = newDogs.length > 0;

    if (pickADogResult.dogFound) {
        pickADogResult.breedName = newDogs[Math.floor(Math.random() * newDogs.length)].breedName;
        pickADogResult.icon = newDogs.icon;
    };

    return pickADogResult;
}

export default pickADog;