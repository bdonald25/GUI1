var form = document.getElementById("theForm");

form.go.onclick = function () {
    var row, col;
    var rLow = parseInt(form.rLow.value);
    var rHigh = parseInt(form.rHigh.value);
    var cLow = parseInt(form.cLow.value);
    var cHigh = parseInt(form.cHigh.value);
    
    /* Check that all values entered are numbers */
    if (isNaN(rLow) || isNaN(rHigh) || isNaN(cLow) || isNaN(cHigh)) {
        alert("All values must be numbers");
        return;
    }

    var rows = rHigh - rLow + 1;
    var cols = cHigh - cLow + 1;
    
    /* Checks to make sure everything is sane if not 
     * anyErrors displays a message and returns false */
    if (anyErrors(rows, cols)) {
        return;
    }
    var div = document.getElementById("result");
    
    // remove previous table if it exists
    if (div.firstChild !== null) {
        div.removeChild(div.firstChild);
    }
    
    var border = document.createElement("div");
    border.className = "border";
    var content = document.createElement("div");
    content.className = "content";
    div.appendChild(border);
    border.appendChild(content);
    
    var tbl = document.createElement("table");
    tbl.className = "theTable";

    row = tbl.insertRow();
    row.insertCell(); // blank cell inserted top left 
    for (var r = rLow; r <= rHigh; ++r) {
        col = row.insertCell();
        col.innerHTML = r;
    }

    for (var c = cLow; c <= cHigh; ++c) {
        row = tbl.insertRow();
        col = row.insertCell();
        col.innerHTML = c;
        for (var r = rLow; r <= rHigh; ++r) {
            var col = row.insertCell();
            col.innerHTML = r * c;
        }
    }
    content.appendChild(tbl);
};

/* function to check for errors and display
 * a message if it finds a problem. Returns false if no
 * errors are found and true if there is an error */
function anyErrors(rows, cols) { 
     if(rows < 0) {
        alert("Range for rows must be increasing");
        return true;
    }
    if (cols < 0){
        alert("Range for colomns must be increasing");
        return true;
    }
    if (rows < 3 ) {
	alert("Rows must have more than 3 elements");
        return true;
    }
    if (rows > 30) {
	alert("Rows cannot have more than 30 elements");
        return true;
    }
    if (cols < 3) {
	alert("Colomns must have more than three elements");
        return true;
    }
    if (cols > 30) {
	alert("Colomns cannot have more than 30 elements");
        return true;
    }
    return false;
};