{
    var countWordOccurrences = function (sentence, word) {
        var SentenceCaseInsensitive = sentence.toLocaleLowerCase();
        var SentenceExpression = SentenceCaseInsensitive.split(/\W+/);
        var wordCaseInsensitive = word.toLocaleLowerCase();
        var Countmatch = 0;
        for (var _i = 0, SentenceExpression_1 = SentenceExpression; _i < SentenceExpression_1.length; _i++) {
            var word_1 = SentenceExpression_1[_i];
            if (word_1 === wordCaseInsensitive) {
                Countmatch++;
            }
        }
        return Countmatch;
    };
    var x = 0;
    x = countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript");
    console.log(x);
}
