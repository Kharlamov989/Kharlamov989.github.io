import { Injectable } from '@angular/core';

export type InternalStateType = {
  [key: string]: any
};

@Injectable()
export class AppState {

    public _state: InternalStateType = { };

    public get state() {
        return this._state;
    }

    public set state(value) {
        throw new Error('do not mutate the `.state` directly');
    }

    public get(prop?: any) {
        return this._state.hasOwnProperty(prop) ? this._state[prop] : this._state;
    }

    public set(prop: string, value: any) {
        return this._state[prop] = value;
    }

    private _clone(object: InternalStateType) {
        return JSON.parse(JSON.stringify( object ));
    }
}
