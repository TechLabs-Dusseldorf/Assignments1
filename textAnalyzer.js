function analyzeText(inputText) {
    inputText = inputText.toLowerCase();
    inputText = inputText.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()–]/g, "");
    let wordList = inputText.split(/\s+/);
    let totalWords = wordList.length;
    
    let wordMap = new Map();
    let totalLength = 0;
    
    for (let word of wordList) {
        totalLength += word.length;
        wordMap.set(word, (wordMap.get(word) || 0) + 1);
    }
    
    let uniqueWords = wordMap.size;
    let averageWordLength = (totalLength / totalWords).toFixed(2);
    
    let sortedArray = Array.from(wordMap); 
    sortedArray.sort((a, b) => b[1] - a[1]);   
    let top5Words = sortedArray.slice(0, 5);
    
    console.log(`Total Words: ${totalWords}`);
    console.log(`Unique Words: ${uniqueWords}`);
    console.log(`Average Word Length: ${averageWordLength}`);
    console.log(`Top 5 Words:`, top5Words);
    
    return {
        totalWords,
        uniqueWords,
        averageWordLength: parseFloat(averageWordLength),
        top5Words
    };

}
