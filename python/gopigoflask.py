#!/usr/bin/env python
import atexit
import flask
import gopigo
import logging
import time

logging.basicConfig(level=logging.DEBUG)
atexit.register(gopigo.stop)


app = flask.Flask(__name__)

@app.route("/")
def hello():
    return flask.render_template('index.html')

@app.route("/command/<command>")
def do_command(command=None):
    logging.debug(command)
    if command == "forward":
        gopigo.fwd()
    elif command == "left":
        gopigo.left()
    elif command == "left_rot":
        gopigo.left_rot()
    elif command == "right":
        gopigo.right()
    elif command == "right_rot":
        gopigo.right_rot()
    elif command == "stop":
        gopigo.stop()
    elif command == "leftled_on":
        gopigo.led_on(0)
    elif command == "leftled_off":
        gopigo.led_off(0)
    elif command == "rightled_on":
        gopigo.led_on(1)
    elif command == "rightled_off":
        gopigo.led_off(1)
    elif command == "back":
        gopigo.bwd()
    return ""

if __name__ == "__main__":
    app.run(host='0.0.0.0')

