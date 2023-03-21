const type = ( value ) => {

    if ( typeof value === 'object' && typeof value !==  null ) {
        return `The value of: ${value} is an object!`
    }

    return `The value of: ${value} not is an object`
}

console.log( type( 2 ) )