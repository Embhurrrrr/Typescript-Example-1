"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchCities = exports.displayCity = exports.addCity = void 0;
let cityListView = JSON.parse(localStorage.getItem("CityList") || "[]");
const addCity = (cityName, country, population) => {
    cityListView.push({ cityName, country, population });
    localStorage.setItem("CityList", JSON.stringify(cityListView));
    (0, exports.displayCity)();
    console.log(cityListView);
};
exports.addCity = addCity;
const displayCity = () => {
    let list = document.getElementById("cityList");
    if (list) {
        while (list.hasChildNodes() && list.firstChild) {
            list.removeChild(list.firstChild);
        }
    }
    cityListView.forEach((element) => {
        let row = document.createElement("tr");
        let cityCell = document.createElement("td");
        cityCell.innerText = element.cityName;
        row.appendChild(cityCell);
        let countryCell = document.createElement("td");
        countryCell.innerText = element.country;
        row.appendChild(countryCell);
        let populationCell = document.createElement("td");
        populationCell.innerText = element.population.toString();
        row.appendChild(populationCell);
        if (list) {
            list.appendChild(row);
        }
    });
};
exports.displayCity = displayCity;
const searchCities = (searchCity) => {
    const filteredCities = cityListView.filter((city) => {
        const lowerSearchCity = searchCity.toLowerCase();
        return (city.cityName.toLowerCase().includes(lowerSearchCity) ||
            city.country.toLowerCase().includes(lowerSearchCity));
    });
    let listOfCity = document.getElementById("cityList");
    if (listOfCity) {
        while (listOfCity.hasChildNodes() && listOfCity.firstChild) {
            listOfCity.removeChild(listOfCity.firstChild);
        }
    }
    filteredCities.forEach((element) => {
        let row = document.createElement("tr");
        let cityCell = document.createElement("td");
        cityCell.innerText = element.cityName;
        row.appendChild(cityCell);
        let countryCell = document.createElement("td");
        countryCell.innerText = element.country;
        row.appendChild(countryCell);
        let populationCell = document.createElement("td");
        populationCell.innerText = element.population.toString();
        row.appendChild(populationCell);
        if (listOfCity) {
            listOfCity.appendChild(row);
        }
    });
};
exports.searchCities = searchCities;
const searchCity = document.getElementById("searchCity");
searchCity.addEventListener("input", () => {
    const searchTerm = searchCity.value;
    (0, exports.searchCities)(searchTerm);
});
(0, exports.displayCity)();
// ISBN 10 Validation
const isValidISBN10 = (isbn) => {
    // Remove any non-digit characters from the ISBN
    const cleanedISBN = isbn.replace(/\D/g, "");
    // Check if the cleaned ISBN has a length of 10
    if (cleanedISBN.length !== 10) {
        return false;
    }
    let sum = 0;
    // Calculate the sum of the digits multiplied by their position
    for (let i = 0; i < 9; i++) {
        const digit = parseInt(cleanedISBN[i]);
        if (isNaN(digit)) {
            return false;
        }
        sum += digit * (i + 1);
    }
    const lastCharacter = cleanedISBN[9];
    // Handle the special case for the last character (can be 0-9 or X)
    if (lastCharacter === "X") {
        sum += 10 * 10;
    }
    else {
        const digit = parseInt(lastCharacter);
        if (isNaN(digit)) {
            return false;
        }
        sum += digit * 10;
    }
    // Check if the sum modulo 11 equals zero
    return sum % 11 === 0;
};
console.log(isValidISBN10("1112223339")); // true
console.log(isValidISBN10("111222333")); // false
console.log(isValidISBN10("1112223339X")); // false
console.log(isValidISBN10("1234554321")); // true
console.log(isValidISBN10("1234512345")); // false
console.log(isValidISBN10("048665088X")); // true
console.log(isValidISBN10("X123456788")); // false
// Change it up!
const transformString = (str) => {
    const vowels = ["A", "E", "I", "O", "U"];
    let result = "";
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const nextChar = String.fromCharCode(char.charCodeAt(0) + 1);
        if (char.toUpperCase() !== "Y") {
            if (vowels.includes(char.toUpperCase())) {
                result += nextChar.toUpperCase();
            }
            else {
                result += nextChar.toLowerCase();
            }
        }
        else {
            result += char;
        }
    }
    return result;
};
console.log(transformString("Cat30"));
// Moving Zeroes to the end
const moveZerosToEnd = (arr) => {
    const nonZeroElements = [];
    let zeroCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeroCount++;
        }
        else {
            nonZeroElements.push(arr[i]);
        }
    }
    return [...nonZeroElements, ...Array(zeroCount).fill(0)];
};
console.log(moveZerosToEnd([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
console.log(moveZerosToEnd([false, 0, 0, 1, 0, 0, 1, 3, "g"]));
