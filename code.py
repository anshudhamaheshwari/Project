def splitParagraphIntoSentences(paragraph):
    ''' break a paragraph into sentences
        and return a list '''
    import re
    # to split by multile characters

    #   regular expressions are easiest (and fastest)
    sentenceEnders = re.compile('[.!?]')
    sentenceList = sentenceEnders.split(paragraph)
    return sentenceList


if __name__ == '__main__':
    p = input("Original Sentence : ")

    sentences = splitParagraphIntoSentences(p)
    print("Reversing Sentence : )
    for s in sentences:
        
        ## initializing the s1(string)
        s1 = s.strip()
        
        ## splitting the string on space
        words = s1.split()

        ## reversing the words using reversed() function
        sentence_rev = " ".join(reversed(words[:-2])) +" "+ " ".join(words[-2:])

        ## joining the words and printing
        print (sentence_rev)
