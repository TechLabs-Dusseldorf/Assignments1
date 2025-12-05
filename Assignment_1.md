let test = "The demand for individuals with tech skills is increasing. The good news is that you do not have to study IT to learn coding! We help you enter the Tech World – independent of your prior knowledge. Our Digital Shaper Program combines online learning, project work and community events to make learning as fun and easy as possible. As we believe that education should be free for everyone we are pleased to educate Techies in our four courses: Web Development, Data Science, Artificial Intelligence and UX-Design. We believe that these tracks are perfect to get started and enter the tech world. Sign up for our program beginning of each semester."

//removing punctuations and double-spaces
test=test.toLowerCase()
test=test.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()–]/g,"")
test=test.replace("  "," ")

//creating the main array
funtion assignment1(string){
in a while loop, use slice to cut string to the next space, trim it and put it into an array, put the rest of the string in the variable (like array_maker or whatev), add to totalWords each time.
averageWordLength=(test.length-(totalWords-1))/totalWords, then round it to two decimals //remove spaces from the count


results = `there are ${totalWords} words in this string. The average length of them is ${averageWordLength}. The top5Words are ${topArray}`
return results
}

top5words: read array of words, create an array with couples word count and change count when same thing is found again, sort on the second couple member? do this during the slice loop.


- Use a `Map`/object to count word frequencies.
- Sort frequency entries by count (desc) to get the top 5.

### **Bonus Challenges (Optional)**

- Make the “top N” configurable (default 5).
- Use the Commandline for input and 


### ❤️ Happy Coding!
