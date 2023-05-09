import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { getAllData } from "../../services/dataServices";
function GetAllData() {
  const [posts, setPosts] = useState([]);
  /// pour chaque nom verifier "&#039;s &quot;" et si présent le sortir.
  useEffect(() => {
    getAllData().then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <div className="card-container">
      {posts
        .sort(({ id: previousID }, { id: currentID }) => currentID - previousID)
        .map((post, i) => (
          <div key={post.video_name + post.link + i++}>
            <h2>{post.video_name}</h2>
            <p>{post.description}</p>
            <p>{post.link}</p>
          </div>
        ))}
    </div>
  );
}

export default GetAllData;
