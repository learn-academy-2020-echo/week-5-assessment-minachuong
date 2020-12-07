// ASSESSMENT 5: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"

function encodeMessage(secret) {
  const encryptionMap = {
    'a': 4,
    'e': 3,
    'i': 1,
    'o': 0
  };

  const encryptionKeys = Object.keys(encryptionMap);

  return secret
          .split('')
          .map(letter => 
            encryptionKeys.includes(letter) ? encryptionMap[letter] : letter)
          .join('');
}



// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"

function wordsContainingA(listOfWords) {
  return listOfWords.filter(word => word.toLowerCase().includes('a'));
}



// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false
var hand4 = [3, 5, 3, 5, 3]
// Expected output: true

// STRETCH:
var hand5 = ["K", 5, "K", 5, "K"]
// Expected output: true
var hand6 = ["A", "Q", "A", 5, 3]
// Expected output: false

function isFullHouse(hand) {
  let occurrenceOfCards = {};
  // map the array to a hash { "rank": countOfOccurrence }
  hand.forEach((card) => {
    const rank = card.toString();
    if (Object.keys(occurrenceOfCards).includes(rank)) {
      occurrenceOfCards[rank]++;
    } else {
      occurrenceOfCards[rank] = 1;
    }
  });
  // continue if there are only two key-pairs 
  if (Object.keys(occurrenceOfCards).length != 2) {
    return false;
  }

  // continue to check if there is only one key-pair with count of 3 and one key-pair with count of 2
  return Object.values(occurrenceOfCards).includes(2) 
    && Object.values(occurrenceOfCards).includes(3);
}