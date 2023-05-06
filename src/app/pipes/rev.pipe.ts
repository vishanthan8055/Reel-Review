import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rev'
})
export class RevPipe implements PipeTransform {

  transform(movies: any, title:string): any {
    return movies.filter((x:any)=>x.title===title);
  }

}
