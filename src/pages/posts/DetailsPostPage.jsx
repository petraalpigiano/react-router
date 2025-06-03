import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DetailsPostPage() {
  const { id } = useParams();
  const [postDetails, setPostDetails] = useState({});
  useEffect(() => {
    axios.get("http://localhost:3000/posts/" + id).then((res) => {
      const specificPost = res.data;
      setPostDetails(specificPost);
    });
  }, []);
  return (
    <>
      <div className="container">
        <div className="card ">
          <img
            src={"http://localhost:3000" + postDetails.image}
            className="card-img-top"
            alt={postDetails.title}
          />
          <div className="card-body">
            <h5 className="card-title text-center ">{postDetails.title}</h5>
            <p className="card-text">{postDetails.content}</p>
          </div>
        </div>
      </div>
    </>
  );
}
