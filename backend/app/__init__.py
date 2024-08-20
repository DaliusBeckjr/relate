from flask import Flask, Blueprint, jsonify
from flask_cors import CORS
from .config import config


def create_app(config_class=config):
    app = Flask(__name__)
    app.config.from_object(config_class)
    CORS(app)

    api = Blueprint('api', __name__, url_prefix="/api")


    @api.route('/hello')
    def hello() -> dict:
        return jsonify({"mesage": "what's good"})



    app.register_blueprint(api)
    return app





