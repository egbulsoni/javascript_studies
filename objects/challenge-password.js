// isValidPassword
// length > 8
// doesn't contain word password
let isValidPassword = function(str){
    return (str.length > 8 && !str.includes('password'))

}

console.log(isValidPassword('avbasn'))
console.log(isValidPassword('yablika123$%#'))
console.log(isValidPassword('asdhuwiqpassword'))