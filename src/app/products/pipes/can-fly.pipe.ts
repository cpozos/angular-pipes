import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'canFly'
})
export class CanFlyPipe implements PipeTransform{
  transform(value: boolean): DisplayFlyOption {
    return value ? 'Vuela' : 'No vuela';
  }
}

type DisplayFlyOption = 'Vuela' | 'No vuela';
