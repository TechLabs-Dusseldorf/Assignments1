const test = "The demand for individuals with tech skills is increasing. The good news is that you do not have to study IT to learn coding! We help you enter the Tech World – independent of your prior knowledge. Our Digital Shaper Program combines online learning, project work and community events to make learning as fun and easy as possible. As we believe that education should be free for everyone we are pleased to educate Techies in our four courses: Web Development, Data Science, Artificial Intelligence and UX-Design. We believe that these tracks are perfect to get started and enter the tech world. Sign up for our program beginning of each semester."




function assignment1(string){
//cleaning the text
string=string.toLowerCase().trim()
string = string.replace(/[^a-zA-Z0-9 ]+/g, "");
string = string.replace(/\s+/g, " ");

//make an array for words and sorting
let testArray = string.split(" ")
let totalWords = testArray.length

averageWordLength=Math.round(((string.length-(totalWords-1))/totalWords)*100)/100 //removing spaces from length

const countMap = new Map();
for (const word of testArray) {
  countMap.set(word, (countMap.get(word) || 0) + 1);
}

const sorted = [...countMap.entries()].sort((a, b) => b[1] - a[1]);
const top5Words = sorted.slice(0, 5);

results = `there are ${totalWords} words in this string.${/\s}The average length of them is ${averageWordLength}.${/\s}The top5Words are ${top5Words}`
return results
}

//top5words: read array of words, create an array with couples word count and change count when same thing is found again, sort on the second couple member? do this during the slice loop.


//- Use a `Map`/object to count word frequencies.
//- Sort frequency entries by count (desc) to get the top 5.

//### **Bonus Challenges (Optional)**

//- Make the “top N” configurable (default 5).
//- Use the Commandline for input and 
