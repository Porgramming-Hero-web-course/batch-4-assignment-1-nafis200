{
    var countWordOccurrences = function (sentence, word) {
        var SentenceCaseInsensitive = sentence.toLocaleLowerCase();
        var SentenceExpression = SentenceCaseInsensitive.split(/\W+/);
        var wordCaseInsensitive = word.toLocaleLowerCase();
        var FindWord = SentenceExpression.filter(function (word) { return word === wordCaseInsensitive; });
        return FindWord.length;
    };
    var x = 0;
    x = countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript");
    console.log(x);
}
