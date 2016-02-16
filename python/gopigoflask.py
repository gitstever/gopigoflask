#!/usr/bin/env python
import atexit
import flask
import gopigo
import logging
import time

atexit.register(gopigo.stop)


app = flask.Flask(__name__)

@app.route("/")
def hello():
    return flask.render_template('index.html')

@app.route("/command/<command>")
def do_command(command=None):
    logging.debug(command)
    if command in ["forward","fwd"]:
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
    elif command in ["back","bwd"]:
        gopigo.bwd()
    elif command == "speed":
        logging.debug("speed")
        speed = flask.request.args.get("speed")
        logging.debug("speed:" + str(speed))
        if speed:
            logging.debug("in if speed")
            gopigo.set_speed(int(speed))
        left_speed = flask.request.args.get("left_speed")
        logging.debug("left_speed:" + str(left_speed))
        if left_speed:
            logging.debug("in if left_speed")
            gopigo.set_left_speed(int(left_speed))
        right_speed = flask.request.args.get("right_speed")
        logging.debug("right_speed:" + str(right_speed))
        if right_speed:
            logging.debug("in if right_speed")
            gopigo.set_right_speed(int(right_speed))
        speed_result = gopigo.read_motor_speed()
        logging.debug(speed_result)
        return flask.json.jsonify({'speed':speed_result,'right':speed_result[0],'left':speed_result[1]})
    return ""

if __name__ == "__main__":
    logging.basicConfig(level=logging.DEBUG)
    app.run(host='0.0.0.0')

