import { getFormattedData } from '../../utils';

const personCalories: number[] = []
const caloriesListByEachPerson: number[] = getFormattedData('./input.txt').reduce((calories, calorie) => {
    if (calorie === '') return calories.push([...personCalories].reduce((acc, calorie) => acc + calorie, 0)) && personCalories.splice(0) && calories;
    personCalories.push(+calorie)
    return calories
}, [])

console.log('PART 1: ', Math.max(...caloriesListByEachPerson));
console.log('PART 2: ', caloriesListByEachPerson.sort((prev, cur) => prev - cur).slice(-3).reduce((acc, calorie) => acc + calorie, 0));