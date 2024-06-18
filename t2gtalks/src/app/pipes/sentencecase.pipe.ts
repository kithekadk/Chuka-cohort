import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sentencecase',
  standalone: true
})
export class SentencecasePipe implements PipeTransform {

  transform(sentence: string):string {
    if(sentence){
      let convertedSentence = sentence[0].toUpperCase()+ sentence.substring(1).toLowerCase()

      return convertedSentence
    }else{
      return sentence
    }
  }

}
