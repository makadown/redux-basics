import { Action } from './ngrx-fake/ngrx';
import {
  incrementadorAction,
  decrementadorAction,
  multiplicadorAction,
  divisorAction,
  resetAction
} from './contador/contador.actions';

/**
 * Un Reducer, es una funcion comun y corriente
 * puede tener otro nombre, pero se deja así
 * para ilustrar.
 * El objetivo del reducer es siempre regresr un
 * nuevo estado.
 * El Reducer TIENE QUE SER UNA FUNCION PURA QUE NO TENGA
 * INTERVENCION DEL EXTERIOR EN LO ABSOLUTO.
 * @param state
 * @param action
 */
function reducer(state = 10, action: Action) {
  switch (action.type) {
    case 'INCREMENTAR':
      return (state += 1);
    case 'DECREMENTAR':
      return (state -= 1);
    case 'MULTIPLICAR':
      return state * action.payload;
    case 'DIVIDIR':
      return state / action.payload;
    case 'RESET':
      return (state = 0);
    default:
      return state;
  }
}

console.log(reducer(10, incrementadorAction));
console.log(reducer(10, decrementadorAction));
console.log(reducer(10, multiplicadorAction));
console.log(reducer(10, divisorAction));
console.log(reducer(10, resetAction));
