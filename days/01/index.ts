const fs = require("node:fs");

const getFormattedCaloriesData = (path: string) => {
    const stringData: string = fs.readFileSync(path, "utf-8");
    const formattedData = stringData.split("\n").map((str: string) => Number(str.trim()));
    return formattedData;
};

const getEachPersonCalories = (calories: number[]) => {
    const personCalories: number[] = [];
    const caloriesByPerson: number[][] = [];
    calories.forEach((calorie) => {
        if (!calorie) {
            caloriesByPerson.push([...personCalories]);
            return personCalories.splice(0);
        }
        personCalories.push(calorie);
    });
    return caloriesByPerson;
};

const getHighestCalorieValue = (calories: number[]) => {
    const highestCalorieValue = calories.reduce((max, val) => (val > max ? (max = val) : (max = max)), 0);
    const highestCalorieValueIndex = calories.findIndex((val) => val === highestCalorieValue);
    return { highestCalorieValue, highestCalorieValueIndex };
};

const getTopCaloriesValues = (calories: number[]) => {
    const topCaloriesValues: number[] = [];
    for (let i = 0; i < 3; i++) {
        const highestCalorieValue = getHighestCalorieValue(calories);
        topCaloriesValues.push(highestCalorieValue.highestCalorieValue);
        calories.splice(highestCalorieValue.highestCalorieValueIndex, 1);
    }
    return topCaloriesValues
};

const calories = getFormattedCaloriesData("./data.txt");
const eachPersonCalories = getEachPersonCalories(calories);
const caloriesSummaryOfEachPerson = eachPersonCalories.map((calories) => calories.reduce((acc, val) => acc + val, 0));
const topCaloriesValues = getTopCaloriesValues(caloriesSummaryOfEachPerson);
const sumTopCaloriesValues = topCaloriesValues.reduce((acc, val) => acc + val, 0);