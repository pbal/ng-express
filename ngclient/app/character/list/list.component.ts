import { Component, OnInit } from '@angular/core';
import CharacterListService from './list.service';

@Component({
  selector: 'character-list-component',
  styleUrls: ['./list.component.css'],
  templateUrl: './list.component.html'
})

export class CharacterListComponent implements OnInit {
  private list: Array<Character> = [];

  constructor(private listService: CharacterListService) {
    listService.list$.subscribe( value => {
      const self = this;
      this.list = [];
      Object.keys(value).forEach(function (key) {
        const char = new CharacterData();
        char.Name = value[key]['name']
        char.Culture = value[key]['culture']
        char.Gender = value[key]['gender']
        char.Born = value[key]['born']
        char.Id = +key
        self.list.push(char);
      });
    });
  }
  onClick(item: Character) {
    this.listService.itemObserver.next(item.Id);
  }
  ngOnInit() {
    this.listService.getList();
  }
}

class CharacterData implements Character{
  Name: string;
  Culture: string;
  Gender: string;
  Born: string;
  Id: number;
}
