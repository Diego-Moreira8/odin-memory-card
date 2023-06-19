export default function shuffleArray(array) {
  const newArray = Array(array.length).fill(null);
  let currIndex = array.length - 1;

  do {
    const randomIndex = Math.floor(Math.random() * array.length);
    if (newArray[randomIndex] === null) {
      newArray[randomIndex] = array[currIndex];
      currIndex--;

      if (currIndex === 1) {
        newArray[newArray.indexOf(null)] = array[currIndex];
        currIndex--;
      }
    }
  } while (currIndex >= 0);

  return newArray;
}
