import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function PostsPage() {
  const [postsList, setPostsList] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((res) => {
      const response = res.data;
      setPostsList(response);
    });
  }, []);

  return (
    <>
      <div className="container">
        <h1>Sono la Post</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {postsList.map(function (currentCard) {
            return (
              <div className="col" key={currentCard.id}>
                <div className="card h-100">
                  <img
                    src={"http://localhost:3000" + currentCard.image}
                    className="card-img-top"
                    alt={currentCard.title}
                  />
                  <Link
                    to={`/posts/${currentCard.id}`}
                    className="card-body link"
                  >
                    <h5 className="card-title text-center">
                      {currentCard.title}
                    </h5>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
