import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'custom-page',
  templateUrl: './custom-page.component.html',
})
export class CustomPageComponent {
  public isUpperCase: boolean = false;
  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.red
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Linterna Verde',
      canFly: true,
      color: Color.green
    },
    {
      name: 'Capitan America',
      canFly: false,
      color: Color.blue
    }
  ]
  public orderBy?: keyof Hero;

  toggleCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrderBy(property: keyof Hero): void{
    this.orderBy = property;
  }
}
