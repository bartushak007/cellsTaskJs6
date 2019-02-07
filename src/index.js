let arr = [];
let cells = document.querySelector(`.cells`);
let hightlight = `cells__cell--hightlight`;
let charlizard = `cells__cell--charlizard`; 
let pikachu = `cells__cell--pikachu`;
let squirtle = `cells__cell--squirtle`;
let pidgey = `cells__cell--pidgey`;

function showHightlights(target) {
  arr.forEach((elem, i) => elem.forEach((elem,j) => {      
    if (elem ===  target) {      
      let contain = elem.classList;
      let classContain = ``;

      if (contain.contains(charlizard)) { classContain = charlizard }
      if (contain.contains(pikachu)) { classContain = pikachu }
      if (contain.contains(squirtle)) { classContain = squirtle }
      if (contain.contains(pidgey)) { classContain = pidgey }
        
      if (j < arr[i].length - 1 && arr[i][j + 1].classList.contains(classContain) && !arr[i][j + 1].classList.contains(hightlight)) {          
        arr[i][j + 1].classList.add(hightlight);
        showHightlights(arr[i][j + 1]);
      }

      if (j > 0 && arr[i][j - 1] && arr[i][j - 1].classList.contains(classContain) && !arr[i][j - 1].classList.contains(hightlight)) {
        arr[i][j - 1].classList.add(hightlight);
        showHightlights(arr[i][j - 1]);
      }

      if (i > 0 && arr[i - 1][j] && arr[i - 1][j].classList.contains(classContain) && !arr[i - 1][j].classList.contains(hightlight)) {
        arr[i - 1][j].classList.add(hightlight);
        showHightlights(arr[i - 1][j]);
      }

      if(i < arr.length - 1  && j < arr[i + 1].length) {
        if (arr[i + 1][j].classList.contains(classContain) && !arr[i + 1][j].classList.contains(hightlight)) {        
          arr[i + 1][j].classList.add(hightlight);
          showHightlights(arr[i + 1][j]);
        }        
      }      
    }
  }));
} 

function buildCells() {  
  let cellWidthHeightValue = +cells.dataset.width + +cells.dataset.margin * 2; 
  let elementsInRow =  Math.floor(+cells.offsetWidth / cellWidthHeightValue);
  let elementsInColumn =  Math.floor(+cells.offsetHeight / cellWidthHeightValue); 
  let allCellNumber = elementsInRow * elementsInColumn; 

  let count = 0;
  arr = [];
  arr.push([]);
  let placeInArr = arr[0];

  for (let i = 0; i < allCellNumber; i++) {    
    let newDiv = document.createElement(`div`);
    newDiv.classList.add(`cells__cell`);
    cells.appendChild(newDiv);
    
    if (count < elementsInRow) {
      placeInArr.push(newDiv);
      count++;
    } else {
      count = 0;
      arr.push([]);
      placeInArr = arr[arr.length - 1];
      placeInArr.push(newDiv);
      count++;      
    }
  }

  function addRandomClass(elements, arr) {
    elements.forEach(elem => elem.classList.add(randomClass(arr)));

    function randomClass(arr) {
      let min = 0,
       max = arr.length - 1;
           
      return arr[Math.round(min - 0.5 + Math.random() * (max - min + 1))];    
    }  
  }

  addRandomClass(document.querySelectorAll(`.cells__cell`), [charlizard, pikachu, squirtle, pidgey]);
}

buildCells();

window.addEventListener(`resize`, () => {
  document.querySelectorAll(`.cells__cell`).forEach(elem => elem.remove());
  buildCells();
});

cells.addEventListener(`mouseover`, () => showHightlights(event.target));


cells.addEventListener(`mouseout`, () => {
  document.querySelectorAll(`.${hightlight}`).forEach( elem => elem.classList.remove(hightlight));
});

cells.addEventListener(`click`, () => {
  document.querySelectorAll(`.${hightlight}`).forEach( elem => elem.remove()); 
  
  let cellWidthHeightValue = +cells.dataset.width + +cells.dataset.margin * 2; 
  let elementsInRow =  Math.floor(+cells.offsetWidth / cellWidthHeightValue);
  let elementsInColumn =  Math.floor(+cells.offsetHeight / cellWidthHeightValue);
  let allCellNumber = document.querySelectorAll(`.cells__cell`); 

  let count = 0;
  arr = [];
  arr.push([]);
  let placeInArr = arr[0];

  for (let i = 0; i < allCellNumber.length; i++) {    
    if (count < elementsInRow) {
      placeInArr.push(allCellNumber[i]);
      count++;
    } else {
      count = 0;
      arr.push([]);
      placeInArr = arr[arr.length - 1];
      placeInArr.push(allCellNumber[i]);
      count++;      
    }
  }
  
});






