import { Component } from '@angular/core';
import CharacterListService from './list/list.service';

@Component({
  selector: 'app-character-component',
  templateUrl: './character.component.html'
})
export class CharacterComponent {
  constructor(private listServive: CharacterListService) {

  }

  onNewClick() {
    this.listServive.itemObserver.next(null);
  }
}
