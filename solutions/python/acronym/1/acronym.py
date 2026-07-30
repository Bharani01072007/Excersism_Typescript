import re

def abbreviate(words):
    # Replace hyphens with spaces
    words = words.replace("-", " ")

    # Remove all punctuation except letters, numbers, and spaces
    words = re.sub(r"[^A-Za-z0-9 ]", "", words)

    # Take the first letter of each word
    return "".join(word[0].upper() for word in words.split())