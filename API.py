from flask import Flask, request, jsonify

app = Flask(__name__)

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
    res = {
    "Input": Text,
    "Result": var
    }
    return jsonify(res)


if __name__ == '__main__':
    app.run(debug=True, port=3000)
