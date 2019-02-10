let arr = [];
const cells = document.querySelector('.cells');
const classNameHightlight = 'cells__cell--hightlight';
const classNameFirstCell = 'cells__cell--charlizard';
const classNameSecondCell = 'cells__cell--pikachu';
const classNameThirdCell = 'cells__cell--squirtle';
const classNameFourthCell = 'cells__cell--pidgey';

function showHightlights(target) {
  [].forEach.call(arr,(elem, i) => [].forEach.call(elem,(elem,j) => {
    if (elem === target) {
      const contain = elem.classList;
      let classContain = '';

      if (contain.contains(classNameFirstCell)) { classContain = classNameFirstCell }
      if (contain.contains(classNameSecondCell)) { classContain = classNameSecondCell }
      if (contain.contains(classNameThirdCell)) { classContain = classNameThirdCell }
      if (contain.contains(classNameFourthCell)) { classContain = classNameFourthCell }

      if (j < arr[i].length - 1 && arr[i][j + 1].classList.contains(classContain) && !arr[i][j + 1].classList.contains(classNameHightlight)) {
        arr[i][j + 1].classList.add(classNameHightlight);
        showHightlights(arr[i][j + 1]);
      }

      if (j > 0 && arr[i][j - 1] && arr[i][j - 1].classList.contains(classContain) && !arr[i][j - 1].classList.contains(classNameHightlight)) {
        arr[i][j - 1].classList.add(classNameHightlight);
        showHightlights(arr[i][j - 1]);
      }

      if (i > 0 && arr[i - 1][j] && arr[i - 1][j].classList.contains(classContain) && !arr[i - 1][j].classList.contains(classNameHightlight)) {
        arr[i - 1][j].classList.add(classNameHightlight);
        showHightlights(arr[i - 1][j]);
      }

      if(i < arr.length - 1  && j < arr[i + 1].length) {
        if (arr[i + 1][j].classList.contains(classContain) && !arr[i + 1][j].classList.contains(classNameHightlight)) {
          arr[i + 1][j].classList.add(classNameHightlight);
          showHightlights(arr[i + 1][j]);
        }
      }
    }
  }));
}

function buildCells() {
  const width = +cells.dataset.width || 100;
  const height = +cells.dataset.height || 100;
  const margin = +cells.dataset.margin || 5;
  const cellWidthHeightValue = width + margin * 2;
  const elementsInRow =  Math.floor(+cells.offsetWidth / cellWidthHeightValue);
  const elementsInColumn =  Math.floor(+cells.offsetHeight / cellWidthHeightValue);
  const allCellNumber = elementsInRow * elementsInColumn;

  let count = 0;
  arr = [[]];
  let placeInArr = arr[0];

  for (let i = 0; i < allCellNumber; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('cells__cell');
    newDiv.style.width = `${width}px`;
    newDiv.style.height = `${height}px`;
    newDiv.style.margin = `${margin}px`;
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
      const min = 0,
       max = arr.length - 1;

      return arr[Math.round(min - 0.5 + Math.random() * (max - min + 1))];
    }
  }

  addRandomClass(document.querySelectorAll('.cells__cell'), [classNameFirstCell, classNameSecondCell, classNameThirdCell, classNameFourthCell]);
}

buildCells();

window.addEventListener('resize', () => {
  document.querySelectorAll('.cells__cell').forEach(elem => elem.remove());
  buildCells();
});

cells.addEventListener('mouseover', (event) => showHightlights(event.target));


cells.addEventListener('mouseout', () => {
  document.querySelectorAll(`.${classNameHightlight}`).forEach( elem => elem.classList.remove(classNameHightlight));
});

cells.addEventListener('click', () => {
  document.querySelectorAll(`.${classNameHightlight}`).forEach( elem => elem.remove());

  const cellWidthHeightValue = +cells.dataset.width + +cells.dataset.margin * 2;
  const elementsInRow =  Math.floor(+cells.offsetWidth / cellWidthHeightValue);
  const elementsInColumn =  Math.floor(+cells.offsetHeight / cellWidthHeightValue);
  const allCellNumber = document.querySelectorAll('.cells__cell');

  let count = 0;
  arr = [[]];
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






