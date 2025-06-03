import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function PostsPage() {
  const [postsList, setPostsList] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((res) => {
      const listPosts = res.data;
      setPostsList(listPosts);
    });
  }, []);

  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {postsList.map(function (currentCard) {
            return (
              <div className="col" key={currentCard.id}>
                <Link
                  to={`/posts/${currentCard.id}`}
                  className="card h-100 link"
                >
                  <img
                    src={"http://localhost:3000" + currentCard.image}
                    className="card-img-top"
                    alt={currentCard.title}
                  />
                  <div className="card-body ">
                    <h5 className="card-title text-center">
                      {currentCard.title}
                    </h5>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
