from flask import Flask, redirect
app = Flask(__name__)

@app.route('/')
def home():
    return redirect("/static/index.html", code=302)

@app.route("/api")
def text():
    return "Here it is!"
