const initialState = {
    loanType: 'Home Purchase',
    propertyType: 'Single Family Home',
    city: '',
    propToBeUsedOn: '',
    found: "false",
    realEstateAgent: "false",
    cost: 0,
    downPayment: 0,
    credit: '',
    history: '',
    addressOne: '',
    addressTwo: '',
    addressThree: '',
    firstName: '',
    lastName: '',
    email: ''
}

const UPDATE_LOAN_TYPE     = 'UPDATE_LOAN_TYPE',
    UPDATE_PROPERTY_TYPE   = 'UPDATE_PROPERTY_TYPE',
    UPDATE_CITY            = 'UPDATE_CITY',
    UPDATE_PROP            = 'UPDATE_PROP' ,
    UPDATE_FOUND           = 'UPDATE_FOUND',
    UPDATE_AGENT           = 'UPDATE_AGENT',
    UPDATE_COST            = 'UPDATE_COST',
    UPDATE_DOWN_PAYMENT    = 'UPDATE_DOWN_PAYMENT',
    UPDATE_CREDIT          = 'UPDATE_CREDIT',
    UPDATE_HISTORY         = 'UPDATE_HISTORY',
    UPDATE_ADDRESS_ONE     = 'UPDATE_ADDRESS_ONE',
    UPDATE_ADDRESS_TWO     = 'UPDATE_ADDRESS_TWO',
    UPDATE_ADDRESS_THREE   = 'UPDATE_ADDRESS_THREE',
    UPDATE_FIRST_NAME      = 'UPDATE_FIRST_NAME',
    UPDATE_LAST_NAME       = 'UPDATE_LAST_NAME',
    UPDATE_EMAIL           = 'UPDATE_EMAIL'


export default function reducer(state = initialState, action){
    const stateCopy = {...state}
    switch(action.type) {
        case UPDATE_LOAN_TYPE:
            stateCopy.loanType = action.payload;
            return stateCopy;
        case UPDATE_PROPERTY_TYPE:
            stateCopy.propertyType = action.payload;
            return stateCopy;
        case UPDATE_CITY:
            stateCopy.city = action.payload;
            return stateCopy
        case UPDATE_PROP:
            stateCopy.propToBeUsedOn = action.payload;
            return stateCopy;
        case UPDATE_FOUND:
            return {...state, found: action.payload};
        case UPDATE_AGENT:
            return {...state, realEstateAgent: action.payload};
        case UPDATE_COST:
            return {...state, cost: action.payload};
        case UPDATE_DOWN_PAYMENT:
            return {...state, downPayment: action.payload};
        case UPDATE_CREDIT:
            return {...state, credit: action.payload};
        case UPDATE_HISTORY:
            return {...state, history: action.payload};
        case UPDATE_ADDRESS_ONE:
            return {...state, addressOne: action.payload};
        case UPDATE_ADDRESS_TWO:
            return {...state, addressTwo: action.payload};
        case UPDATE_ADDRESS_THREE:
            return {...state, addressThree: action.payload};
        case UPDATE_FIRST_NAME:
            return {...state, firstName: action.payload};
        case UPDATE_LAST_NAME:
            return {...state, lastName: action.payload}
        case UPDATE_EMAIL:
            return {...state, email: action.payload}
        default:
            return state;
    }
}

export function updateLoanType(loanType) {
    return {
        type: UPDATE_LOAN_TYPE,
        payload: loanType
    }
}
export function updatePropertyType(propertyType) {
    return {
        type: UPDATE_PROPERTY_TYPE,
        payload: propertyType
    }
}
export function updateCity(cityType) {
    return {
        type: UPDATE_CITY,
        payload: cityType
    }
}
export function updateProp(prop) {
    return {
        type: UPDATE_PROP,
        payload: prop
    }
}
export function updateFound(found) {
    return {
        type: UPDATE_FOUND,
        payload: found
    }
}
export function updateAgent(str) {
    return {
        type: UPDATE_AGENT,
        payload: str
    }
}
export function updateCost(cost) {
    return {
        type: UPDATE_COST,
        payload: cost
    }
}
export function updateDownPayment(payment) {
    return {
        type: UPDATE_DOWN_PAYMENT,
        payload: payment
    }
}
export function updateCredit(credit) {
    return {
        type: UPDATE_CREDIT,
        payload: credit
    }
}
export function updateHistory(history) {
    return {
        type: UPDATE_HISTORY,
        payload: history
    }
}
export function updateAddressOne(one) {
    return {
        type: UPDATE_ADDRESS_ONE,
        payload: one
    }
}
export function updateAddressTwo(two) {
    return {
        type: UPDATE_ADDRESS_TWO,
        payload: two
    }
}
export function updateAddressThree(three) {
    return {
        type: UPDATE_ADDRESS_THREE,
        payload: three
    }
}
export function updateFirstName(firstName) {
    return {
        type: UPDATE_FIRST_NAME,
        payload: firstName
    }
}
export function updateLastName(lastName) {
    return {
        type: UPDATE_LAST_NAME,
        payload: lastName
    }
}
export function updateEmail(email) {
    return {
        type: UPDATE_EMAIL,
        payload: email
    }
}