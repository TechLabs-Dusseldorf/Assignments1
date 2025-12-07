let text = "The demand for individuals with tech skills is increasing. The good news is that you do not have to study IT to learn coding! We help you enter the Tech World – independent of your prior knowledge. Our Digital Shaper Program combines online learning, project work and community events to make learning as fun and easy as possible. As we believe that education should be free for everyone we are pleased to educate Techies in our four courses: Web Development, Data Science, Artificial Intelligence and UX-Design. We believe that these tracks are perfect to get started and enter the tech world. Sign up for our program beginning of each semester.";
let lowerText = text.toLowerCase();
let cleanText = lowerText.replace(/[^\w\s]/g, "");
let words = cleanText.trim().split(/\s+/);
let totalWords = words.length;
    console.log("The total number of words is:", totalWords);
let wordMap = {};
let currentWord = "";
let wordLength = 0;
for (let i = 0; i < words.length; i++){
    currentWord = words[i];
    if (wordMap[currentWord] == true){
        wordMap[currentWord] += 1;
    } else{
        wordMap[currentWord] = 1;
    }
    wordLength += words[i].length;
}
let uniqueWords = Object.keys(wordMap).length;
    console.log("The number of distinct words is:", uniqueWords);
let averageWordLength = (wordLength / totalWords).toFixed(2);
    console.log("The average length of all words is:", averageWordLength);

let keys = Object.keys(wordMap);
keys.sort(function(a, b) {
    let countA = wordMap[a];
    let countB = wordMap[b];
    return countB - countA;
});

console.log("The 5 most frequent words are:");
let top5Words = [];
for (i = 0; i < 5; i++) {
    let word = keys[i];
    top5Words.push({ 
        word: word, 
        count: wordMap[word] 
    });
    console.log("   At Position ", i+1 ," the word: '",top5Words[i].word,"' with the count:", top5Words[i].count);
}
