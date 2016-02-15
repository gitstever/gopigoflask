var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (request.readyState === 4) {
        if (request.status === 200) {
            document.body.className = 'ok';
            console.log(request.responseText);
        } else {
            document.body.className = 'error';
        }
    }
};

function piCommand(command){
    request.open("GET", command);
    request.send(null);
}

