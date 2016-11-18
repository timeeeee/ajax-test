from flask import Flask, url_for
app = Flask(__name__)


@app.route("/api")
def text():
    return "This came from a flask server!"
