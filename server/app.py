from flask import Flask
from api.routes import configure_routes
from dotenv import load_dotenv

load_dotenv()


def create_app():
    app = Flask(__name__)

    # Configuring routes
    configure_routes(app)

    return app


if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)
