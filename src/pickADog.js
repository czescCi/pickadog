import { DOGS_SIZE } from "./data/dogs.js";

const pickADog = (dogsList, dogsFeaturesList) => {
  let newDogs = dogsList;

  if (dogsFeaturesList.excludedSize !== undefined) {
    newDogs = newDogs.filter((dog) => {
      if (
        dogsFeaturesList.excludedSize === DOGS_SIZE.HUGE &&
        dog.size === DOGS_SIZE.HUGE
      ) {
        return false;
      }

      return true;
    });
  }

  if (dogsFeaturesList.childFriendlyRequired !== undefined) {
    newDogs = newDogs.filter((dog) => {
      if (dogsFeaturesList.childFriendlyRequired && dog.isChildFriendly) {
        return true;
      } else if (
        dogsFeaturesList.childFriendlyRequired &&
        !dog.isChildFriendly
      ) {
        return false;
      } else if (!dogsFeaturesList.childFriendlyRequired) {
        return true;
      }

      return true;
    });
  }

  if (dogsFeaturesList.experienced !== undefined) {
    newDogs = newDogs.filter((dog) => {
      if (dogsFeaturesList.experienced) {
        return true;
      } else if (!dogsFeaturesList.experienced && dog.easyToTrain) {
        return true;
      } else if (!dogsFeaturesList.experienced && !dog.easyToTrain) {
        return false;
      }

      return true;
    });
  }

  if (dogsFeaturesList.haveOtherPets !== undefined) {
    newDogs = newDogs.filter((dog) => {
      if (dogsFeaturesList.haveOtherPets && dog.goodWithOtherPets) {
        return true;
      } else if (dogsFeaturesList.haveOtherPets && !dog.goodWithOtherPets) {
        return false;
      } else if (!dogsFeaturesList.haveOtherPets) {
        return true;
      }

      return true;
    });
  }

  if (dogsFeaturesList.oftenAway !== undefined) {
    newDogs = newDogs.filter((dog) => {
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
    newDogs = newDogs.filter((dog) => {
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
    newDogs = newDogs.filter((dog) => {
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

  console.log('dogs size before: ');
  console.log(newDogs);

  console.log('dogs features list before: ');
  console.log(dogsFeaturesList);

  if (dogsFeaturesList.size === DOGS_SIZE.SMALL) {
    newDogs = newDogs.filter((dog) => {
      if (dog.size === DOGS_SIZE.SMALL) {
        return true;
      }

      return false;
    });
  }

  if (dogsFeaturesList.size === DOGS_SIZE.MEDIUM) {
    newDogs = newDogs.filter((dog) => {
      if (dog.size === DOGS_SIZE.MEDIUM) {
        return true;
      }

      return false;
    });
  }

  if (dogsFeaturesList.size === DOGS_SIZE.BIG) {
    newDogs = newDogs.filter((dog) => {
      if (dog.size === DOGS_SIZE.BIG) {
        return true;
      }

      return false;
    });
  }

  if (dogsFeaturesList.size === DOGS_SIZE.HUGE) {
    newDogs = newDogs.filter((dog) => {
      if (dog.size === DOGS_SIZE.HUGE) {
        return true;
      }

      return false;
    });
  }

  
  console.log('dogs size after: ');
  console.log(newDogs);

  let pickADogResult = {
    dogFound: false,
    breedName: null,
  };

  pickADogResult.dogFound = newDogs.length > 0;

  if (pickADogResult.dogFound) {
    pickADogResult.breedName =
      newDogs[Math.floor(Math.random() * newDogs.length)].breedName;
  }

  return pickADogResult;
};

export default pickADog;
