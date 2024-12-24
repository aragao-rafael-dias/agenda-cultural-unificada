import json
from flask import Flask, render_template, jsonify

# Criando app Flask
app = Flask(__name__)

# Criando rota para home page
@app.route('/')
def index():
    return render_template('index.html')

# Importando JSON
path_json = '/home/rafael-dias/Área de trabalho/agenda cultural unificada/static/json/data.json'

# Carregando o JSON
with open(path_json, 'r') as f:
    cult = json.load(f)

# Criando rota para API dos eventos
@app.route('/api/cult')
def get_cult():
    cult_dict = cult
    return jsonify(cult_dict)

# Finalizando o APP
if __name__ == '__main__':
    app.run(debug=True)