function TextAnalyzer(text) {
    text = text.toLowerCase()
    text = text.replace(/[^a-z0-9]+/gi, " ")
    let words = text.split(/\s+/).filter(word => word.length > 0)
    let totalWords = words.length

    let uniqueSet = {}
    for (let i = 0; i < words.length; i++) {
        uniqueSet[words[i]] = true
    }
    let uniqueWords = Object.keys(uniqueSet).length

    let totalLength = 0
    for (let i = 0; i < words.length; i++) {
        totalLength += words[i].length
    }
    let averageWordLength = 0
    if (totalWords > 0) {
        averageWordLength = totalLength / totalWords
    }
    averageWordLength = Math.round(averageWordLength * 100) / 100

    let wordCounts = {}
    for (let i = 0; i < words.length; i++) {
        let w = words[i]
        if (wordCounts[w] === undefined) {
            wordCounts[w] = 1
        } else {
            wordCounts[w]++
        }
    }

    let freqArray = [];
    for (let w in wordCounts) {
        freqArray.push({ word: w, count: wordCounts[w] })
    }
    freqArray.sort(function (a, b) {
        return b.count - a.count
    });
    let top5Words = freqArray.slice(0, 5)

    return {
        totalWords: totalWords,
        uniqueWords: uniqueWords,
        averageWordLength: averageWordLength,
        top5Words: top5Words
    };
}

module.exports = TextAnalyzer;