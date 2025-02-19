function  validEmail( email ) {
    if (typeof email !== "string") {
        return "Invalid" ;
    }

    if ([".", "-", "_", "+", "@"].includes(email[0])) {
        return false;
    }

    if (!email.includes("@")) {
        return false;
    }

    if (email.includes(" ")) {
        return false;
    }

    if (!email.endsWith(".com")) {
        return false;
    }

    return true; 
}

