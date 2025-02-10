const cat = {
    name: "Barsik",
    age: 3,
    relatives: [
        { breedName: "British", origin: "UK" },
        { breedName: "Sphynx", origin: "Canada" },
        { breedName: "Mainecoon", origin: "USA" }
    ],
    printInfo: function() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Relatives:");
        this.relatives.forEach(function(relative, index) {
            console.log("Breed " + (index + 1) + ": " + relative.breedName + ", Origin: " + relative.origin);
        });
    }
};

console.log(cat);
cat.printInfo();
