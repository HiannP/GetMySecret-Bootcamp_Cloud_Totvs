# Importa o Flask
from flask import Flask, render_template

app = Flask(__name__)

# Define a rota das páginas
@app.route("/")
def homepage():
    return render_template("home.html")

# Coloca o site no ar
if __name__=="__main__":
    app.run(debug=True)
