import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fav'
})
export class FavPipe implements PipeTransform {

  transform(movies: any, title:string[]): any {
    if(title.length === 0){
      return [];
    }
    return movies.filter((x:any)=>title.includes(x.title));
  }

}
