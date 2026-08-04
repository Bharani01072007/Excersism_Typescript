import re

def count_words(sentence):
    words = re.findall(r"[a-z0-9]+(?:'[a-z0-9]+)?", sentence.lower())

    word_count = {}

    for word in words:
        word_count[word] = word_count.get(word, 0) + 1

    return word_count