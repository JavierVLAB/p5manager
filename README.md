# p5Manager
React App for P5 sketch management

Create the Repo

git clone repo
yarn create react-app repo








## Adding New Sketch

- Duplicate the file src/components/sketches/SketchTemplate.js
- Rename the file with NewName
- Code your sketch inside the function Sketch
- Remember, all the p5 function and variables use "p." before. (setup -> p.setup, width -> p.width) 
- Rename the react component name (class Name... and export default Name)
- Import the new component in the Artboard.js file
- Add the new case with the component to the switch structure in Artboard.js
- Add a new item name in this.sketches (App.js)