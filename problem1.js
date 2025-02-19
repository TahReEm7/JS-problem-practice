
function cashOut( money ) {
    
    if (typeof money !== "number" || money < 0) {
        return "Invalid";
    }

    const cashOutRate =  1.75 / 100;
    const cashOutCharge = money * cashOutRate ;
    return cashOutCharge;
    
    }

