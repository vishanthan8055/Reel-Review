import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searcha'
})
export class SearchaPipe implements PipeTransform {

  transform(movies: any, title:string): any {
    if(title===""){
      return movies;
    }
    return movies.filter((x:any)=>x.title == title);
  }

}
