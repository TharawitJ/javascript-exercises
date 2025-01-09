newtext = []
text = "A car, a man, a maraca."
def palindromes(text):
    text = text.replace(' ','')
    text = text.replace(',','')
    text = text[::-1]
    return print(text)

palindromes(text)