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
    return request.responseText;
}

var gopigo = gopigo || {};
gopigo.fwd = function(){piCommand("/command/fwd");}
gopigo.bwd = function(){piCommand("/command/bwd");}
gopigo.stop = function(){piCommand("/command/stop");}
gopigo.bwd = function(){piCommand("/command/bwd");}
gopigo.right = function(){piCommand("/command/right");}
gopigo.left = function(){piCommand("/command/left");}
gopigo.speed = function(speed, left_speed, right_speed){
    var command = "/command/speed"
    if (speed || left_speed || right_speed){
        var command = "/command/speed?";
        var add_ampersand = null;
        if (speed){
            command = command + "speed=" + speed;
            add_ampersand = true;
        }
        if (left_speed){
            if (add_ampersand){
                command = command + "&";
            }
            command = command + "left_speed=" + left_speed;
            add_ampersand = true;
        }
        if (right_speed){
            if (add_ampersand){
                command = command + "&";
            }
            command = command + "right_speed=" + right_speed;
            add_ampersand = true;
        }
        piCommand(command);
    }
}

        
