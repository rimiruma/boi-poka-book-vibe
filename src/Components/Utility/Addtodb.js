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

const getStoredWishList = () => {
    const storedWishListSrt = localStorage.getItem('wish-list');
    if(storedWishListSrt) {
        const storedWishList = JSON.parse(storedWishListSrt);
        return storedWishList;
    }
    else{
        return[];
    }
}

const addToStoredWishList = (id) => {
    const storedWishList = getStoredWishList();
    if(storedWishList.includes(id)) {
        // already exists.do not it
        console.log(id, 'already exists in the read list');
        
    }
    else {
        storedWishList.push(id);
        const storedWishListSrt = JSON.stringify(storedWishList);
        localStorage.setItem('wish-list', storedWishListSrt);
    }
}


export { addToStoredReadList, addToStoredWishList, getStoredReadList }