import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sub_categoryFilter'
})

export class SubCategoryFilterPipe implements PipeTransform {

  transform(list: any[], category: any) {
    return list.filter(item => item.category == category)
  }
  
}