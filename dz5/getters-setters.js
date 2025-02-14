const cat = {
    name: "Barsik",
    age: 3,
    relatives: [
        { breedName: "British", origin: "UK" },
        { breedName: "Sphynx", origin: "Canada" },
        { breedName: "Mainecoon", origin: "USA" }
    ],
    owner: {
        name: "Sofiia",
        city: "Chernihiv"
    },

    get info() {
        return `${this.name}, ${this.age} y.o., pet of ${this.owner.name}, ${this.owner.city}`;
    },

    get ageInfo() {
        return `${this.age} y. o.`;
    },

    set _owner(newOwner) {
        if (newOwner.name && newOwner.city) {
            this.owner = newOwner;
        } else {
            console.log("Error");
        }
    },

    get _owner() {
        return this.owner || null;
    },

    printInfo: function() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Owner: " + this.owner.name + " from " + this.owner.city);
        console.log("Relatives:");
        this.relatives.forEach(function(relative, index) {
            console.log("Breed " + (index + 1) + ": " + relative.breedName + ", Origin: " + relative.origin);
        });
    },

    changeAge: function(newAge) {
        if (newAge > 0) {
            this.age = newAge;
            return `Happy Birthday! cat is ${this.age} y.o.`;
        } else {
            return "Error";
        }
    }
};

console.log(cat);
cat.printInfo();
console.log(cat.info);
console.log(cat.ageInfo);
console.log("Breeds: " + cat.breedsList);
cat.updateOwner = { name: "Roma", city: "Lviv" };
console.log(cat.info);
console.log(cat.changeAge(5));
