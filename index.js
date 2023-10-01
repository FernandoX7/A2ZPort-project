const input = "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers";

const countVowels = word => {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  return [...word].filter(char => vowels.has(char)).length;
};

const findLongestWordInSentence = sentence => {
  const words = sentence.split(' ');
  const alphabeticCharacterRegex = /[a-zA-Z]/

  return words.reduce((max, current) => {
    const cleanedWord = [...current].filter(char => alphabeticCharacterRegex.test(char)).join('');
    const vowelCount = countVowels(cleanedWord);

    if (cleanedWord.length > max.word.length || (cleanedWord.length === max.word.length && vowelCount > max.vowelCount)) {
      return { word: cleanedWord, vowelCount };
    }

    return max;
  }, { word: '', vowelCount: 0 }).word;
};

const longestWord = findLongestWordInSentence(input);

console.log(longestWord);