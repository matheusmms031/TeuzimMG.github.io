from flask import Flask, json,request,jsonify
from flask.wrappers import Response
import json
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

@app.route("/",methods=['POST'])
def hello_world():
    response = json.loads(request.data)
    data = str(response['ip'])
    return data
