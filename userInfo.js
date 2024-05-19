function createUserProfiles(originalNames, modifiedNames) {
    if (originalNames.length !== modifiedNames.length) {
        throw new Error("Both arrays must have the same length");
    }

    return originalNames.map((name, index) => {
        return {
            id: index + 1,
            originalName: name,
            modifiedName: modifiedNames[index]
        };
    });
}

// Example usage:
const originalNames = ["Ama", "Kofi", "Christian", "Dag", "Eirene"];
const modifiedNames = ["ama", "KOFI", "christian", "DAG", "eirene"];

const userProfiles = createUserProfiles(originalNames, modifiedNames);
console.log(userProfiles);
/*
Output:
[
  { id: 1, originalName: "Ama", modifiedName: "ama" },
  { id: 2, originalName: "Kofi", modifiedName: "KOFI" },
  { id: 3, originalName: "Christian", modifiedName: "christian" },
  { id: 4, originalName: "Dag", modifiedName: "DAG" },
  { id: 5, originalName: "Eirene", modifiedName: "eirene" }
]
*/
