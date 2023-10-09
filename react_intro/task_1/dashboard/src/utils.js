function getFullYear() {
    const Year = new Date().getFullYear();
    return Year;
}
function getFooterCopy(isIndex){
    if(isIndex) { return 'Holberton School'; }
    return 'Holberton School main dashboard';
}