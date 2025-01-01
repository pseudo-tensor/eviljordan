from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def home():
    return "Hello from flask"

@app.route('/api/<string:Text>', methods=['POST', 'GET'])
def handle_text(Text):
    Text.lower()
    if Text=="male":
        var="Less goo"
    else:
        var="Aw hell naaaw"
    return var


if __name__ == '__main__':
    app.run(debug=True, port=3000)
