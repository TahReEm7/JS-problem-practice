function  isBestFriend( f1 , f2 ) {
    
    if (typeof f1 !== 'object' || f1 === null || Array.isArray(f1)) {
        return "Invalid";
    }

    if (typeof f2 !== 'object' || f2 === null || Array.isArray(f2)) {
        return "Invalid";
    }
    
    if (f1.bestFriend === f2.roll && f2.bestFriend === f1.roll) {
        return true ;
    } else {
        return false ;
    }

}


