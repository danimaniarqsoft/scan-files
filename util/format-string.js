/**
 * Returns a string with leading spaces.
 * @return
 *   The value of cadena with leading spaces.
 */

exports.leadinSpaces = function (deep, cadena) {
    var spaces = ''
    for (let index = 0; index < deep; index++) {
        spaces = spaces + ' '
    }
    return spaces + cadena
}
