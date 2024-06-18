import { Pipe, PipeTransform } from '@angular/core';
import { post } from '../interfaces/interfaces';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(posts:post[] , searchString: string): post[] {
    if(!posts || searchString == ''){
      return posts
    }

    let filteredPosts:post[] = []

    for(let post of posts){
      if(post.content.toLowerCase().includes(searchString.toLowerCase())){
        filteredPosts.push(post)
      }
    }

    return filteredPosts
  }

}
