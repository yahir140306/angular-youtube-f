import { Component, inject, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import { CharacterAddComponent } from '../../components/dragonball/character-add/character-add.component';
import { Character } from '../../interfaces/character.interface';
import { DragonballService } from '../service/dragonball.service';

@Component({
  selector: 'dragonball-super',
  imports: [CharacterListComponent, CharacterAddComponent],
  templateUrl: './dragonball-super-page.component.html',
  standalone: true,
})
export class DragonballSuperPageComponent {

  // constructor(
  //   public dragonballService: DragonballService
  // ) {}

  public dragonBallService = inject(DragonballService);


}
