function paragraf (text) {

text = text.toLowerCase();
text =text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()–]/g,"");
let words = text.split(/\s+/);

let totalWords = words.length;
console.log("totalWords " + totalWords);

let wordscount = new Map();
let totalLength = 0;

for (let word of words) {
    totalLength += word.length;
    if (wordscount.has(word)) {
      wordscount.set(word, wordscount.get(word) + 1);
    } else {
      wordscount.set(word, 1);
    } 

}

let arr = Array.from(wordscount); 

arr.sort((a, b) => b[1] - a[1]);   

let top5 = arr.slice(0, 5);         


console.log(`uniqueWords: ${wordscount.size}`);
console.log(`Average word length: ${ (totalLength / totalWords).toFixed(2) }`);
console.log(`top5Words: ${top5}`);
  
}
paragraf("The demand for individuals with tech skills is increasing. The good news is that you do not have to study IT to learn coding! We help you enter the Tech World – independent of your prior knowledge. Our Digital Shaper Program combines online learning, project work and community events to make learning as fun and easy as possible. As we believe that education should be free for everyone we are pleased to educate Techies in our four courses: Web Development, Data Science, Artificial Intelligence and UX-Design. We believe that these tracks are perfect to get started and enter the tech world. Sign up for our program beginning of each semester.");
