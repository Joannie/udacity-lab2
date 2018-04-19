// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
//document.getElementById('sizePicker').addEventListener('submit', makeGrid);

function makeGrid() {
    const height = document.getElementById('inputHeight').value;
    const width = document.getElementById('inputWidth').value;
    const tableArea = document.getElementById('pixelCanvas');

    //Make the grid
    for(let i = 0; i < height; i++){
      var row = document.createElement('tr');
      for (let j = 0; j < width; j++){
        var cell = document.createElement('td');
        row.appendChild(cell);
      }
      tableArea.appendChild(row);
    }
    tableArea.addEventListener('click', function(evt){
      evt.target.style.backgroundColor = document.getElementById('colorPicker').value;

    });

    return false;

  };

