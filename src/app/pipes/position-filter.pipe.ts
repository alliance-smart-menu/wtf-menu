import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'positionFilter'
})

export class PositionFilterPipe implements PipeTransform {

  transform(list: any[], sub_category: any) {
    return list.filter(item => item.sub_category == sub_category)
  }
  
}