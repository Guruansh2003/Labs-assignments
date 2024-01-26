function unveilMagicOfConsecutiveNumbers(path) {
    let longestStreak = [];
    let currentStreak = [];
  
    for (let i = 0; i < path.length; i++) {
      if (i === 0 || path[i] === path[i - 1] + 1) {
        currentStreak.push(path[i]);
      } else {
        currentStreak = [path[i]];
      }
  
      if (currentStreak.length > longestStreak.length) {
        longestStreak = currentStreak.slice(); // Copy the array to preserve the longest streak
      }
    }
  
    const sumOfLongestStreak = longestStreak.reduce((sum, num) => sum + num, 0);
  
    return {
      longestStreak,
      sumOfLongestStreak,
      encouragement: "Embark on a journey of wonder and exploration. The magic of consecutive numbers awaits!",
    };
  }
  
  // Result Set 1:
  const path1 = [1, 2, 3, 6, 9, 34, 2, 6];
  const result1 = unveilMagicOfConsecutiveNumbers(path1);
  console.log("Result Set 1:", result1);
  
  // Result Set 2:
  const path2 = [3, 2, 7, 5, 6, 7, 3, 8, 9, 10, 23, 2, 1, 2, 3];
  const result2 = unveilMagicOfConsecutiveNumbers(path2);
  console.log("Result Set 2:", result2);
  
  // Result Set 3:
  const path3 = [100, 101, 102, 3, 4, 5, 6, 9];
  const result3 = unveilMagicOfConsecutiveNumbers(path3);
  console.log("Result Set 3:", result3);
  
  https://codepen.io/Sqaud245/pen/oNVoZWR?editors=1111
    