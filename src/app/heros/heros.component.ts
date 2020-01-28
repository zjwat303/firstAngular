import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  heros: Hero[];
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  constructor(private heroService: HeroService) { }
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heros = heroes);
  }
  ngOnInit() {
    this.getHeroes();
  }


}
