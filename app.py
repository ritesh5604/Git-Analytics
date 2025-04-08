import os
from flask import Flask, redirect, url_for, session, jsonify
from flask_dance.contrib.github import make_github_blueprint, github
from dotenv import load_dotenv

# Allow OAuth over HTTP (for local development)
os.environ['OAUTHLIB_INSECURE_TRANSPORT'] = '1'

# Load environment variables
load_dotenv()

app = Flask(__name__)
app.secret_key = os.getenv("SECRET_KEY")  # Required for session management

# GitHub OAuth Blueprint
github_bp = make_github_blueprint(
    client_id=os.getenv("GITHUB_CLIENT_ID"),
    client_secret=os.getenv("GITHUB_CLIENT_SECRET"),
)
app.register_blueprint(github_bp, url_prefix="/login")

@app.route("/")
def home():
    return "Welcome to Gitlytics! Go to /github to log in."

@app.route("/github")
def github_login():
    if not github.authorized:
        return redirect(url_for("github.login"))

    # Fetch user data from GitHub
    resp = github.get("/user")
    user_data = resp.json()
    
    # Store user data in session
    session["github_user"] = user_data

    # Redirect to React dashboard (assuming running on port 5173)
    return redirect("http://localhost:5173/dashboard")


@app.route("/api/user", methods=["GET"])
def get_user():
    """API to return user data - used by React frontend."""
    if "github_user" not in session:
        return jsonify({"error": "Unauthorized"}), 401
    return jsonify(session["github_user"])

if __name__ == "__main__":
    app.run(debug=True)
