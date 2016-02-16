function httpGet(theUrl, updateElement)
{
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            console.log(xmlhttp.responseText);
            if (updateElement){
                updateElement.innerHTML = xmlhttp.responseText;
            }
        }
    }
    xmlhttp.open("GET", theUrl, true );
    xmlhttp.send();
}

var gopigo = gopigo || {};
gopigo.fwd = function(){httpGet("/command/fwd");}
gopigo.bwd = function(){httpGet("/command/bwd");}
gopigo.stop = function(){httpGet("/command/stop");}
gopigo.bwd = function(){httpGet("/command/bwd");}
gopigo.right = function(){httpGet("/command/right");}
gopigo.right_rot = function(){httpGet("/command/right_rot");}
gopigo.left = function(){httpGet("/command/left");}
gopigo.left_rot = function(){httpGet("/command/left_rot");}
gopigo.rightled_on = function(){httpGet("/command/rightled_on");}
gopigo.rightled_off = function(){httpGet("/command/rightled_off");}
gopigo.leftled_on = function(){httpGet("/command/leftled_on");}
gopigo.leftled_off = function(){httpGet("/command/leftled_off");}
gopigo.speed = function(speed, left_speed, right_speed, updateElement){
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
        httpGet(command, updateElement);
    }
}

