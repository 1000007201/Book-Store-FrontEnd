import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  book_name:any
  transform(value:any, filterstring:string){
    if (value?.length == 0 || filterstring?.length == 0){
      return value;
    }
    const books = [];
    for (const book of value){
      console.log(filterstring)
      if (book['name'].includes(filterstring)){
        books.push(book)
      }
    }
    return books;
  }

}
