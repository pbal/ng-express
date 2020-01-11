import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import CharacterDetailService from './detail.service';
import CharacterListService from '../list/list.service';

@Component({
  selector: 'character-detail-component',
  templateUrl: './detail.component.html'
})
export class CharacterDetailComponent {
  private id: number;
  private character: Character = {
    Gender: '',
    Culture: '',
    Born: '',
    Name: '',
    Id: 0
  };

  constructor(private listService: CharacterListService,
    private detailService: CharacterDetailService) {
    listService.item$.subscribe(value => {
      this.id = value;
      if (this.id) {
        detailService.getItem(this.id);
      } else {
        this.character = {
          Gender: '',
          Culture: '',
          Born: '',
          Name: '',
          Id: 0
        };
      }
    });

    detailService.detail$.subscribe(value => {
      this.character.Name = value['name'];
      this.character.Born = value['born'];
      this.character.Gender = value['gender'];
      this.character.Culture = value['culture'];
      this.id = value['id'];
    });
  }

  onSubmit(form: FormGroup) {
    if (this.id) {
      this.detailService.update(this.id,
        this._getFormData(form)
      );
    } else {
      this.detailService.insert(
        this._getFormData(form)
      );
    }
  }

  _getFormData(form: FormGroup) {
    return {
      Name: form.value.name,
      Gender: form.value.gender,
      Culture: form.value.culture,
      Born: form.value.born
    };
  }
}
