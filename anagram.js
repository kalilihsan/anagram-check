let array = ["cook","save","taste","aves","vase","state","map","pam"];

function anagramGroup(array) {
    // Array for grouping of words
    let result = [];
    // Map for letter counts of word
    let letters = new Map();

    // Loop through array
    for (let word of array) {
        letters = new Map();

        // Letter count of word
        for (let letter of word) {
            letters.set(letter, letters.get(letter) + 1 || 1);
        }

        // If result array is empty, create first grouping
        if (typeof result[0] === "undefined") {
            result.push(new Map([
                ["letters", letters],
                ["words", [word]]
                        ]
                    ));
                    continue;
        }

        // Boolean variable to check if word is in grouping
        let same = true;

        // Look for same grouping
        for (let group of result) {
            same = true;
            // Evaluate letter counts
            for (let letter of letters.keys()) {
                // If one letter count is different, grouping is different, stop looking
                if (group.get("letters").get(letter) !== letters.get(letter)) {
                    same = false;
                    break;} 
                }
            // If grouping is the same, add word to grouping
            if (same) {
                group.set("words", group.get("words").concat(word));
                break;
            }
        }
        // If no same grouping was found, create new grouping
        if (!same) {
            result.push(new Map([
                ["letters", letters],
                ["words", [word]]
                        ]
                    ));
        }
    }

    // Print results
    for (let group of result) {
        console.log(group.get("words"));
    }
}

anagramGroup(array);