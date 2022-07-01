export const capitalizeText = (busqueda = '') => {
    let result = busqueda.trim().split(' ')
    result = result.map( w =>w.charAt(0).toUpperCase() + w.slice(1));
    return result.join(' ');
}