
{
    type CountOcc = (sentence: string, word: string) => number


    const countWordOccurrences: CountOcc = (sentence,word)=>{
        const SentenceCaseInsensitive:string = sentence.toLocaleLowerCase()
        const SentenceExpression = SentenceCaseInsensitive.split(/\W+/)
        const wordCaseInsensitive: string = word.toLocaleLowerCase()
        
        let Countmatch = 0;
        
        for(const word of SentenceExpression){
           if(word === wordCaseInsensitive){
            Countmatch++;
           }
        }

        return Countmatch
      }


    let x: number = 0

   x = countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript"); 

   console.log(x);
   


}