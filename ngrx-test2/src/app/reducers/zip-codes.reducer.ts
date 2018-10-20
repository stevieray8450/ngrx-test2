import { ZipCodeActionTypes, ZipCodeActions } from '../actions/zip-code.actions';

export interface ZipCodeState {
  zipCodes: string[];
}

export const initialState: ZipCodeState = {
  zipCodes: []
};

export function zipCodeReducer(state = initialState, action: ZipCodeActions): ZipCodeState {
  switch (action.type) {
    case ZipCodeActionTypes.AddZipCode:
      return {...state, zipCodes: [...state.zipCodes, action.payload]};
    case ZipCodeActionTypes.RemoveZipCode:
      return {...state, zipCodes: [...state.zipCodes.filter(z => z !== action.payload)]};
    default:
      return state;
  }
}
