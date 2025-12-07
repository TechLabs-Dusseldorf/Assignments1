# 📝 Assignment 1: Text Analyzer

---

### 🎯 **Objective**

Build a function that analyzes a paragraph (string) and returns key text metrics.  
You’ll practice string processing, array methods, and basic data aggregation.

---

### 📋 **Requirements**

1. **Input**
   - Accept a single string representing a paragraph.
   - Treat words case-insensitively (e.g., “The” and “the” are the same word).q
   - Ignore punctuation when counting words.

2. **Words & Tokenization**
   - Split the text into words (letters/numbers);
   - normalize whitespace.

3. **Return the following**
   - **totalWords** → total number of words
   - **uniqueWords** → number of distinct words
   - **averageWordLength** → average length of all words (round to 2 decimals)
   - **top5Words** → the 5 most frequent words with counts (e.g., array of `{ word, count }`)

---

### 💡 **Hints / Guidance**

- Normalize with `.toLowerCase()`.
- Strip punctuation using a regex before splitting.
- Use a `Map`/object to count word frequencies.
- Compute average by summing lengths and dividing by `totalWords`.
- Sort frequency entries by count (desc) to get the top 5.

---

### **Bonus Challenges (Optional)**

- Make the “top N” configurable (default 5).
- Use the Commandline for input and 

---

### 🧪 Test Paragraph

Use this text to test your function:

The demand for individuals with tech skills is increasing. The good news is that you do not have to study IT to learn coding! We help you enter the Tech World – independent of your prior knowledge. Our Digital Shaper Program combines online learning, project work and community events to make learning as fun and easy as possible. As we believe that education should be free for everyone we are pleased to educate Techies in our four courses: Web Development, Data Science, Artificial Intelligence and UX-Design. We believe that these tracks are perfect to get started and enter the tech world. Sign up for our program beginning of each semester.

### ❤️ Happy Coding!
