import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'dragon-character-list',
  templateUrl: './character-list.component.html',
})
export class CharacterListComponent {
characters: any;
}
