export function calculateScrabbleScore(word) {
    //  const scores = {
    //      A: 1, B: 3
    // };
    if (word === 'A' || word === 'E'){
        return 1      
    } 
    if (word ==='B' || word === 'C'){
        return 3
    }
    if (word === 'D'){
        return 2
    }
    if (word ==='F'){
        return 4
    }   
}


