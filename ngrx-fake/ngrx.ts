/**
 * Interface que representa una acción
 */
export interface Action {
  type: string;
  payload?: any;
}

/**
 * El Reducer es una funcion y por eso
 * pongo parentesis
 */
export interface Reducer<T> {
  (state: T, action: Action) : T
}
