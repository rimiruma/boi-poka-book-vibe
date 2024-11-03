const getStoredReadList = () => {
    // red list
    const storedListStr = localStorage.getItem('red-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else {
        return [];
    }
}

const addToStoredReadList = (id) => {
    const storedList = getStoredReadList();
    if (storedList.includes(id)) {
        // already exists. do not add it
        console.log(id, 'already exists in the red list');
    }
    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('red-list', storedListStr);
    }
}


export { addToStoredReadList }