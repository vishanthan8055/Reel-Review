import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alang'
})
export class AlangPipe implements PipeTransform {

  transform(movies: any, title:string): any {
    if(title==="All"){
      return movies;
    }
    return movies.filter((x:any)=>x.language == title);
  }

}
