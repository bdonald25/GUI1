
navigate();

function navigate(){
    //Reference to the "content" div.
    var contentDiv = document.getElementById("content");
    
    //Isolate the fragment identifier using substr.
    //Removes the "#" character.
    fragmentId = location.hash.substr(1);
    
    // Set the "content" div innerHTML based on the fragment identifier.
    getContent(fragmentId, function (content) {
        //adds content to contentDiv
        contentDiv.innerHTML = content;
    });
  }

//Default hash is #Home if there isn't one
if(!location.hash) {
    location.hash = "#Home"
}

//When hash is changed navigate is called
window.addEventListener("hashchange", navigate);

function fetchFile(path, callback) {
    var request = new XMLHttpRequest();
    
    request.onload = function() {
        callback(request.responseText);
    };
    
    request.open("GET", path);
    request.send(null);
}

function getContent(framentId, callback) {
    fetchFile (fragmentId + ".html", callback);
}