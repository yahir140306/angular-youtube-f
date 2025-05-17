import { Component, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  standalone: true,
  imports: [],
  templateUrl: './character-add.component.html',
})
export class CharacterAddComponent {
  name = signal('');
  power = signal(0);

  newCharacter = output<Character>();

  addCharacter() {
    console.log(this.name(), this.power());

    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    const newCharacter: Character = {
      id: Math.floor(Math.random() * 1000),
      // id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };

    // this.characters.update((list) => [...list, newCharacter]);
    // console.log({ newCharacter });
    this.newCharacter.emit(newCharacter);
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
