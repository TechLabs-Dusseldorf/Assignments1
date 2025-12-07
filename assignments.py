

def analyze_text(paragraph: str) -> dict:
    
    text = paragraph.lower()
    punctuation = ".,!?;:-–()[]{}\"'"
    for p in punctuation:
        text = text.replace(p, " ")
    words = []
    for part in text.split():
        clean_word = ""
        for ch in part:
            if ('a' <= ch <= 'z') or ('0' <= ch <= '9'):
                clean_word += ch
        if clean_word != "":
            words.append(clean_word)
    if not words:
        return {
            "totalWords": 0,
            "uniqueWords": 0,
            "averageWordLength": 0.0,
            "top5Words": []
        }
    total_words = len(words)

    unique_words = len(set(words))

    total_length = 0
    for w in words:
        total_length += len(w)
    average_word_length = round(total_length / total_words, 2)

    x = {}
    for w in words:
        if w in x:
            x[w] += 1
        else:
            x[w] = 1

    x_list = list(x.items())
    for i in range(len(x_list)):
        for j in range(i + 1, len(x_list)):
            if x_list[j][1] > x_list[i][1]:
                x_list[i], x_list[j] = x_list[j], x_list[i]

    top5 = []
    for word, count in x_list[:5]:
        top5.append({"word": word, "count": count})

    return {
        "totalWords": total_words,
        "uniqueWords": unique_words,
        "averageWordLength": average_word_length,
        "top5Words": top5
    }


if __name__ == "__main__":
    print("Please enter your paragraph:")
    print("(Press ENTER on an empty line to finish.)\n")

    lines = []
    while True:
        line = input()
        if line == "":
            break
        lines.append(line)

    paragraph = " ".join(lines)

    result = analyze_text(paragraph)

    print("\n--- Text Analysis Result ---")
    print("Total words:         ", result["totalWords"])
    print("Unique words:        ", result["uniqueWords"])
    print("Average word length: ", result["averageWordLength"])
    print("\nTop 5 words:")
    for item in result["top5Words"]:
        print(f"  {item['word']} → {item['count']} times")
