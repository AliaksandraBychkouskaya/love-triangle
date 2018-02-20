/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
let result = 0;

let index2;
let index3;

for (let i = 0; i < preferences.length; i++)
{
  if (preferences[i] !== 0)
  {
    index2 = preferences[i] - 1;
    if ((i + 1) === preferences[index2])
    {
      preferences[i] = 0;
      preferences[index2] = 0;
    }
    else
    {
      index3 = preferences[index2] - 1;
      if (preferences[index3] === (i + 1))
      {
        result++;
        preferences[i] = 0;
        preferences[index2] = 0;
        preferences[index3] = 0;
      }
    }
  }
}
return result;
};
