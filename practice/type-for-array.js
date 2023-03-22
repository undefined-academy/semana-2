
const typeForArray = ( value ) => {

    if ( Array.isArray(value)  ) {
        return `The value of: ${value} is an array`
    }

    return `The value of: ${value} is not an array`
}

console.log( typeForArray(3) )