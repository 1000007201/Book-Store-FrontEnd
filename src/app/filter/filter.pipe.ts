import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  book_name:any
  transform(value:any, filterstring:string, sorting_by:string){
    if (value?.length == 0 || filterstring?.length == 0){
      if (sorting_by?.length == 0){
        return value;
      }
      if (sorting_by === "name"){
        value.sort((a:any, b:any) => (a.name > b.name) ? 1 : -1)
        return value;
      }
      if (sorting_by === "price"){
        value.sort((a:any, b:any) => (a.price > b.price) ? 1 : -1)
        return value;
      }
      if (sorting_by === "rating"){
        value.sort((a:any, b:any) => (a.rating > b.rating) ? 1 : -1)
        value.reverse();
        return value;
      }

    }
    const books = [];
    for (const book of value){
      console.log(filterstring)
      if (book['name'].includes(filterstring)){
        books.push(book)
      }
    }
    if (sorting_by?.length == 0){
      return books;
    }
    if (sorting_by === "name"){
      books.sort((a:any, b:any) => (a.name > b.name) ? 1 : -1)
      return books;
    }
    if (sorting_by === "price"){
      books.sort((a:any, b:any) => (a.price > b.price) ? 1 : -1)
      return books;
    }
    if (sorting_by === "rating"){
      books.sort((a:any, b:any) => (a.rating > b.rating) ? 1 : -1)
      books.reverse();
      return books;
    }
  }

}
