// Создать кнопку и красный квадрат с размерами 200x200px. При клике на кнопку менять у квадрата цвет заднего фона на зеленый и уменьшать его до размеров 100x100px.

document.getElementById('change-color-size').addEventListener('click', () => {
    const square = document.getElementById('red-square');
    square.style.backgroundColor = 'green';
    square.style.width = '100px';
    square.style.height = '100px';
  });
  
//   Создать кнопку и розовый квадрат с размерами 200x200px. При клике на кнопку менять цвет на синий и выводить в консоль обновленный цвет квадрата.

document.getElementById('change-color').addEventListener('click', () => {
    const square = document.getElementById('pink-square');
    square.style.backgroundColor = 'blue';
    console.log(square.style.backgroundColor);
  });



  
//   Создать кнопку и квадрат с размерами 150x150px. При клике на кнопку увеличивать высоту и ширину квадрата на 20px.

document.getElementById('increase-size').addEventListener('click', () => {
    const square = document.getElementById('square');
    const width = parseInt(square.style.width);
    const height = parseInt(square.style.height);
    square.style.width = (width + 20) + 'px';
    square.style.height = (height + 20) + 'px';
  });

// Создать кнопку и div с классом root. При клике на кнопку в div создается параграф синего цвета. Текст параграфа произвольный.

document.getElementById('create-blue-paragraph').addEventListener('click', () => {
    const root = document.querySelector('.root');
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Произвольный текст';
    paragraph.style.color = 'blue';
    root.appendChild(paragraph);
  });
  
// Создать кнопку и div с классом root. При клике на кнопку в div создаются по очереди параграфы синего и зеленого цветов. Первый цвет синий.

let isBlue = true;

document.getElementById('create-alternating-paragraphs').addEventListener('click', () => {
  const root = document.querySelector('.root');
  const paragraph = document.createElement('p');
  paragraph.textContent = 'Произвольный текст';
  
  if (isBlue) {
    paragraph.style.color = 'blue';
  } else {
    paragraph.style.color = 'green';
  }

  root.appendChild(paragraph);
  isBlue = !isBlue;
});