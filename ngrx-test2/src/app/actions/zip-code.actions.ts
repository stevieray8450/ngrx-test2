import { Action } from '@ngrx/store';

export enum ZipCodeActionTypes {
  LoadZipCodes = '[ZipCode] Load ZipCodes',
  AddZipCode = '[ZipCode] Add ZipCode',
  RemoveZipCode = '[ZipCode] Remove ZipCode'
}

export class LoadZipCodes implements Action {
  readonly type = ZipCodeActionTypes.LoadZipCodes;
}

export class AddZipCode implements Action {
  readonly type = ZipCodeActionTypes.AddZipCode;

  constructor(public payload: string) { }
}

export class RemoveZipCode implements Action {
  readonly type = ZipCodeActionTypes.RemoveZipCode;

  constructor(public payload: string) { }
}

export type ZipCodeActions = LoadZipCodes | AddZipCode | RemoveZipCode;
