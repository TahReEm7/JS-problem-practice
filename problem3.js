function  electionResult( votes ) {
    let mango=[];
    let banana=[];

    if(!Array.isArray(votes)){
        return "Invalid";
    }

    for (let amount of votes) {
        if (amount === "mango") {
            mango.push(amount);
        } else if (amount === "banana") {
            banana.push(amount);
        }
    }

    if(mango.length === banana.length){
        return  "Draw";
    }
    else {
        if(mango.length > banana.length){
            return  "Mango" 
        }
        else {
            return "Banana"
        }
    }    
}
