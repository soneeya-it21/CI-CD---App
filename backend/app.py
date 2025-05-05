from flask import Flask, jsonify, request
import requests

app = Flask(__name__)

GITHUB_API_URL = "https://api.github.com/users/"

@app.route('/api/github/<username>', methods=['GET'])
def get_github_user(username):
    user_resp = requests.get(f"{GITHUB_API_URL}{username}")
    repos_resp = requests.get(f"{GITHUB_API_URL}{username}/repos")

    if user_resp.status_code != 200:
        return jsonify({"error": "User not found"}), 404

    user_data = user_resp.json()
    repos_data = repos_resp.json()

    top_repos = sorted(repos_data, key=lambda r: r.get("stargazers_count", 0), reverse=True)[:3]

    result = {
        "avatar_url": user_data.get("avatar_url"),
        "name": user_data.get("name"),
        "bio": user_data.get("bio"),
        "location": user_data.get("location"),
        "repos": [
            {"name": r["name"], "stars": r["stargazers_count"], "url": r["html_url"]}
            for r in top_repos
        ]
    }
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
