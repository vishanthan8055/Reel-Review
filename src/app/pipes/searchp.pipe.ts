import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchp'
})
export class SearchpPipe implements PipeTransform {

  transform(movies: any, title:string): any {
    if(title===""){
      return movies;
    }
    return movies.filter((x:any)=>x.title == title);
  }

}
