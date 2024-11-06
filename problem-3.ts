
{
    type CountOcc = (sentence: string, word: string) => number


    const countWordOccurrences: CountOcc = (sentence,word)=>{
        const SentenceCaseInsensitive:string = sentence.toLocaleLowerCase()

        const SentenceExpression = SentenceCaseInsensitive.split(/\W+/)
        
        const wordCaseInsensitive: string = word.toLocaleLowerCase()
        
        const FindWord: string[] = SentenceExpression.filter((word: string)=> word === wordCaseInsensitive)
  
        return FindWord.length
      }


    let x: number = 0

   x = countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript"); 

   console.log(x);
   


}