import { mock } from '../mock';

export default class Character {
    constructor() {
        this.db = mock;
    }

    getAll() {
        return this.db;
    }

    get(id) {
        return Object.assign({ id }, this.db[id]);
    }

    post(id, data) {
        if (data && !data.name) {
            throw new Error('Name is required');
        }
        Object.keys(data).forEach(dataKey => {
            this.db[id][dataKey] = data[dataKey];
        });
    }

    put(data) {
        if (data && !data.name) {
            throw new Error('Name is required');
        }
        const newId = this._size(this.db) + 1;
        this.db[newId] = data;
        return newId;
    }

    _size(obj) {
        let size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++; // eslint-disable-line
        }
        return size;
    }
}
