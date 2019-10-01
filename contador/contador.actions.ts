import { Action } from '../ngrx-fake/ngrx';
/**
 * Representa un objeto (accion) que tiene tipo 'INCREMENTAR'
 */
export const incrementadorAction: Action = {
  type: 'INCREMENTAR'
};

/**
 * Representa un objeto (accion) que tiene tipo 'DECREMENTAR'
 */
export const decrementadorAction: Action = {
  type: 'DECREMENTAR'
};

/**
 * Representa un objeto (accion) que tiene tipo 'MULTIPLICAR'
 */
export const multiplicadorAction: Action = {
  type: 'MULTIPLICAR',
  payload: 2
};

/**
 * Representa un objeto (accion) que tiene tipo 'DIVIDIR'
 */
export const divisorAction: Action = {
  type: 'DIVIDIR',
  payload: 2
};

/**
 * Representa un objeto (accion) que tiene tipo 'RESET'
 */
export const resetAction: Action = {
  type: 'RESET'
};

