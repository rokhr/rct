const getCopied = (array) => {
    return array.slice();
};

const findIdOne = (array, itt) => {
    let targetIndex = -1;
    // 一つだけみつける。見つけたら検索終了。
    array.some((value, index) => {
        const _isFound = itt(value, index);
        if (_isFound) {
            targetIndex = index;
        }
        return _isFound;
    });
    return targetIndex;
}

const reduceOne = (array, itt) => {
    // let targetIndex = -1;
    // const isFound = array.some((value, index) => {
    //     const _isFound = itt(value, index);
    //     if (_isFound) {
    //         targetIndex = index;
    //     }
    //     return _isFound;
    // });
    const targetIndex = findIdOne(array, itt);
    let copied = getCopied(array);
    if (targetIndex !== -1) {
        copied.splice( targetIndex, 1)
    }
    return copied;
}


  
export {
    reduceOne,
    findIdOne,
    getCopied
}
