import React, { useState, useEffect } from "react";
import axios from "axios";
// "https://api.github.com/users/elie"

const ProfileViewer = ({ name = "Elie", color = "purple" }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function loadProfile() {
      const res = await axios.get(`https://api.github.com/users/${name}`);
      setData(res.data.name);
    }
    loadProfile();
  }, [name])

  return (
    <div>
      <strong>Example 2:</strong>
      <p>Fetching Data on Initial Render</p>
      <h3 style={{ color }}>{data ? data : 'Loading...'}</h3>
    </div>
  )
};

export default ProfileViewer;