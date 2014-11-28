var form = document.getElementById("theForm");

 $(function() {
     $( "#tabs" ).tabs();
 });

form.go.onclick = function () {  
    //If the form does not pass validation then return without doing anything.
    if(! $('#theForm').valid()){
        return;
    }
    
    // Here we get the values that were entered by the user.
    var row, col;
    var rLow = parseInt(form.rLow.value);
    var rHigh = parseInt(form.rHigh.value);
    var cLow = parseInt(form.cLow.value);
    var cHigh = parseInt(form.cHigh.value);
    
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
        
    var num_tabs = $("div#tabs ul li").length + 1;

    // Add the tab.
    $("div#tabs ul").append(
        "<li><a href='#tab" + num_tabs + "'>Table " + (num_tabs - 1) + "</a></li>"
    );

    // Add the div that will contain the content for the tab.
    $("div#tabs").append(
        "<div id='tab" + num_tabs + "'>" + "</div>"
    );
    
    // Add the table to the new tab.
    $("div#tab" + num_tabs).append(tbl);

    // Refresh the tab so the table will be visible.
    $("div#tabs").tabs("refresh");
     
};
  
  $("#theForm").validate({
        // These are the validation rules.
        rules: {
            rLow: {
                required: true,
                number: true
            },
            rHigh: {
                required: true,
                number: true
            },
            cLow: {
                required: true,
                number: true
            },
            cHigh: {
                required: true,
                number:true
            }
        },
        
        // These are the validation error messages.
        messages: {
            rLow: "Please enter a number",
            rHigh: "Please enter a number",
            cLow: "Please enter a number",
            cHigh: "Please enter a number"
        }
    });
