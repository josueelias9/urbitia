import json
from os import environ as env
from urllib.parse import quote_plus, urlencode

from authlib.integrations.flask_client import OAuth
from dotenv import find_dotenv, load_dotenv
from flask import Flask, redirect, render_template, session, url_for, Blueprint


bp = Blueprint("oauth", __name__,url_prefix="/")


ENV_FILE = find_dotenv()
if ENV_FILE:
    load_dotenv(ENV_FILE)

app = Flask(__name__)
app.secret_key = env.get("APP_SECRET_KEY")

oauth = OAuth(app)

def init_all(app):
    oauth.init_app(app)

    oauth.register(
        "auth0",
        client_id=env.get("AUTH0_CLIENT_ID"),
        client_secret=env.get("AUTH0_CLIENT_SECRET"),
        client_kwargs={
            "scope": "openid profile email",
        },
        server_metadata_url=f'https://{env.get("AUTH0_DOMAIN")}/.well-known/openid-configuration'
    )

@bp.route("/login")
def login():
    return oauth.auth0.authorize_redirect(
        prompt="consent",
        redirect_uri=url_for("oauth.callback", _external=True)
    )

@bp.route("/callback", methods=["GET", "POST"])
def callback():
    token = oauth.auth0.authorize_access_token()
    session["user"] = token
    return redirect("/")

@bp.route("/logout")
def logout():
    session.clear()
    return redirect("/")

@bp.route("/")
def home():
    return render_template("oauth/home.html", session=session.get('user'), pretty=json.dumps(session.get('user'), indent=4))

