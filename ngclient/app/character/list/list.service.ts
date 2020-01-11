import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import Service from '../../service';

@Injectable()
export default class CharacterListService {

    private list: Array<Object>;
    private error;
    public list$: Observable<Object[]>;
    private listObserver: Observer<Object[]>;

    public item$: Observable<number>;
    public itemObserver: Observer<number>;

    constructor(private service: Service) {
        this.list$ = new Observable<Object[]>(observer => this.listObserver = observer);
        this.item$ = new Observable<number>(observer => this.itemObserver = observer);
    }

    getList(selectDefault = true) {
        const uri = '/api/character';

        return this.service.get(uri)
            .subscribe(response => {
                this.list = [];
                this.list = response
            },
                error => this.error = <any>error,
                () => {
                    this.listObserver.next(this.list);
                    if (selectDefault) {
                        this.itemObserver.next(+Object.keys(this.list)[0]);
                    }
                }
            );
    }
}
