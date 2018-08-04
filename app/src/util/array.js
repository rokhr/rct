const reduceOne = (array, itt) => {
    let targetIndex = -1;
    const isFound = array.some((value, index) => {
        const _isFound = itt(value, index);
        if (_isFound) {
            targetIndex = index;
        }
        return _isFound;
    });
    let copied = array.slice();
    if (isFound === true) {
        copied.splice( targetIndex, 1)
    }
    return copied;
}
  
export {
    reduceOne
}
