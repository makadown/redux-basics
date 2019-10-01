/**
 * Interface que representa una acción
 */
interface Action {
    type: string;
    payload?: any;
}

/**
 * Representa un objeto (accion) que tiene tipo 'INCREMENTAR'
 */
const incrementadorAction: Action = {
    type: 'INCREMENTAR'
};

/**
 * Un Reducer, es una funcion comun y corriente
 * puede tener otro nombre, pero se deja así 
 * para ilustrar.
 * El objetivo del reducer es siempre regresr un
 * nuevo estado.
 * @param state 
 * @param action 
 */
function reducer(state = 10, action: Action) {
        if (action.type === 'INCREMENTAR') {
            return state += 1;
        }
        return state;
}

console.log(reducer(10, incrementadorAction));