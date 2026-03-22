const height = 152;
const oddHeight = height - 100;
let weight = (oddHeight * 9) / 10;
let maxWeight = oddHeight;
let minWeight = (oddHeight * 8) / 10;
if (height > 100) {
   console.log(`Chieu cao: ${height}cm, Ly tuong: ${weight}kg, Toi da: ${maxWeight}kg, Toi thieu: ${minWeight}kg`);
}
