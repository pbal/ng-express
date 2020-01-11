import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import Service from '../../service';
import CharacterListService from '../list/list.service';

@Injectable()
export default class CharacterDetailService {
    private item: Object;
    private error;
    public detail$: Observable<Object>;
    private detailObserver: Observer<Object>;

    constructor(private service: Service, private listService: CharacterListService) {
        this.detail$ = new Observable<Object>(observer => this.detailObserver = observer);
    }

    update(id: number, data: Character) {
        const uri = `/api/character/${id}/edit`;

        return this.service.post(uri, JSON.stringify(data))
            .then(response => {
                this.item = response;
                this.detailObserver.next(this.item);
                this.listService.getList(false);
                this.getItem(response['id']);
            })
            .catch(error => this.error = <any>error);
    }

    insert(data: Character) {
        const uri = `/api/character/add`;

        return this.service.post(uri, JSON.stringify(data))
            .then(response => {
                this.item = response;
                this.detailObserver.next(this.item);
                this.listService.getList(false);
                this.getItem(response['id']);
            })
            .catch(error => this.error = <any>error);
    }

    getItem(id: number) {
        const uri = `/api/character/${id}`;

        return this.service.get(uri)
            .subscribe(response => { this.item = response },
                error => this.error = <any>error,
                () => this.detailObserver.next(this.item)
            );
    }
}
