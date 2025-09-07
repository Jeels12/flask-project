from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/process', methods=['POST'])
def process_data():
    data = request.get_json()
    name = data.get("name")
    email = data.get("email")
    return jsonify({"message": f"Hello {name}, your email {email} was received!"})

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000)
