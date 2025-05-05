import { useState } from "react";
import axios from "axios";
import './App.css';

function App() {
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");

  const fetchProfile = async () => {
    try {
      const res = await axios.get(`/api/github/${username}`);
      setProfile(res.data);
      setError("");
    } catch (err) {
      setProfile(null);
      setError("User not found.");
    }
  };

  return (
    <div className="container">
      <h1>GitHub Profile Viewer</h1>
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={fetchProfile}>Search</button>
      </div>

      {error && <p className="error">{error}</p>}

      {profile && (
        <div className="card">
          <img src={profile.avatar_url} alt="avatar" />
          <h2>{profile.name}</h2>
          <p>{profile.bio}</p>
          <p><b>Location:</b> {profile.location}</p>
          <h3>Top Repositories:</h3>
          <ul>
            {profile.repos.map((repo) => (
              <li key={repo.name}>
                <a href={repo.url} target="_blank" rel="noreferrer">
                  {repo.name} ⭐ {repo.stars}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
