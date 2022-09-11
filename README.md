# Mr. Roboger's Neighborhood
By Bai Jaitrong:  
Mr. Roboger's Neighborhood.  
# Technologies Used
  * HTML
  * CSS
  * Bootstrap
  * JavaScript
  * Web APIs
  * Craiyon AI generated image
# Description
Mr. Roboger's Neighborhood is a web application that takes a number from the user and returns a list of values from zero(0) to the inputed number with the following twist:
  * Numbers containing a 1 will be replaced with the string "Beep!".*
  * Numbers containing a 2 will be replaces with the string "Boop!."
  * Numbers containing a 3 will be replaced with the string "Won't you be my neighbor?".
  * For numbers containing a combination of 1, 2, or 3, the replacement string for the greater value ( 3 > 2 >1) will be used. for example,  the replacement string for 123 would be "won't you be my neighbor?".


# Setup/Installation Requirements
  * Clone the repository to your desktop or a subdirectory in your desktop by typing **https://github.com/bjaitrong22/mr-robogers-neighborhood.git**
  * Be careful not to clone the repository inside a local repository. Otherwise, you will have a nested git respository.
  * Navigate to the top level of the directory.
  * Open index.html 

# Showing your work on GitHub pages
  * Use this link to view this web page on **GitHub Pages**: https://bjaitrong22.github.io/mr-robogers-neighborhood.git/
  * To create gitHub Pages for your portfolio, type **git branch gh-pages**
  * Switch over to your gh-pages branch, type **git checkout gh-pages**
  * Push your gh-pages branch to GitHub, type **git push origin gh-pages**
  * If you have a nickname for your remote, you can use it in place of **origin** in the above push command.
  * You can view your webpage at **my-github-username.github.io/repository-name**

# Known Bugs
  * No known bugs
# License
 * Portfolio is licensed under the terms of GNU AFFERO GENERAL PUBLIC LICENS Version 3, 19 November 2007

# TDD method: Test
Describe: beepBoop()
Test: "It should return an error message if the user did not a number"
Code: beepBoop("tree");
Expected Output: {error: true, message: 'A positive Integer was not entered'}

Test: "It should return an error message if the user enters 0"
Code: beepBoop(0);
Expected Output: {error: true, message: 'A positive Integer was not entered'}

Test: "It should return an error message if the user enters negative integers"
Code: beepBoop(-1);
Expected Output: {error: true, message: 'A positive Integer was not entered'}

Test: "It should return an error message if the user enters "" "
Code: beepBoop("");
Expected Output: {error: true, message: 'A positive Integer was not entered'}

Test: "It should return an error message if the user enters "      " "
Code: beepBoop("      ");
Expected Output: {error: true, message: 'A positive Integer was not entered'}
  
Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: beepBoop(5);
Expected Output: [0, 1, 2, 3, 4, 5]

Test: "It should return an array with the numbers converted to a string"
Code: beepBoop(5);
Expected Output: ["0, 1, 2, 3, 4, 5"]

Test: "It should return an array with each string as individual elements of the array"
Code: beepBoop(5);
Expected Output: ["0", "1", "2", "3", "4", "5"]

Describe: replaceElements()
Test: "It should return an array with the number 1 replace with "Beep!"
Code: let numberArray = beepBoop(1);
      beepBoop(numberArray);
Expected Output: ["0", "Beep!"]

Describe: replaceElements()
Test: "It should return an array with the number 1 and 2 replaced with their respecive strings, "Beep!" and "Boop!".
Code: numberArray = beepBoop(2);
      beepBoop(numberArray);
Expected Output: ["0", "Beep!", "Boop!"]

Describe: replaceElements()
Test: "It should return an array with the number 1,2,3 replaced with their respecive strings, "Beep!","Boop!", and "Won't you be my neighbor.
Code: numberArray = beepBoop(2);
      beepBoop(numberArray);
Expected Output: ["0", "Beep!", "Boop!", "Won't you be my neighbor"]

Describe: replaceElements()
Test: "For any numbers containing a combination of 1s,2s, or 3s, the number will be replace with "Won't you be my neighbor if the number contains a 3, returns a "Boop!" if it contains a 2, and "Beep!" if it contains a 1.
Code: numberArray = [11,12,13,123];
      numberArray = numberArray.toString().split(",");
      replaceElements(numberArray);
Expected Output: ["Beep!", "Boop!", "Won't you be my neighbor", "Won't you be my neighbor"]


