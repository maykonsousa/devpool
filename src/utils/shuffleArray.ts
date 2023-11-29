export function shuffleArray<T>(array: T[]): T[] {
  const shuffledArray = array?.slice();

  for (
    let currentIndex = Number(shuffledArray?.length) - 1;
    currentIndex > 0;
    currentIndex -= 1
  ) {
    const randomIndex = Math.floor(Math.random() * (currentIndex + 1));

    [shuffledArray[currentIndex], shuffledArray[randomIndex]] = [
      shuffledArray[randomIndex],
      shuffledArray[currentIndex],
    ];
  }

  return shuffledArray;
}
