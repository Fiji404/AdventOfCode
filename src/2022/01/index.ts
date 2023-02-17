import { getData } from '../../utils/index';

const personCalories: number[] = []
const caloriesListByEachPerson = getData('./input.txt').reduce((calories, calorie): number[] => {
    if (!calorie) return calories.push(personCalories.reduce((acc, calorie) => acc + calorie, 0)) && personCalories.splice(0) && calories;
    return personCalories.push(+calorie) && calories
}, [])

console.log('PART 1: ', Math.max(...caloriesListByEachPerson));
console.log('PART 2: ', caloriesListByEachPerson.sort((a, b) => a - b).slice(-3).reduce((acc, calorie) => acc + calorie, 0));