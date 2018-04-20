// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
document.getElementById('submitBtn').addEventListener('click', makeGrid);

function makeGrid() {
    let height = document.getElementById('inputHeight').value;
    let width = document.getElementById('inputWidth').value;
    let tableArea = document.getElementById('pixelCanvas');

    //reset the table
    tableArea.innerHTML = "";
    
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

    console.log(height);
    console.log(width);
    console.log(tableArea);
    return false;

  };

