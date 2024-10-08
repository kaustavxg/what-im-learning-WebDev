let arr = ["harkirat", 21, {
    name: "kaustav",
    age: 20,
    cities: ["delhi", "dubai", "banglore", {
        country: "usa",
        city: "new york"
    }]
}];

console.log(arr[2])
console.log(arr[2].cities[3].city)