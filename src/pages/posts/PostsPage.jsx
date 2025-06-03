import axios from "axios";
import { useEffect } from "react";
export default function PostsPage() {
  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((res) => {
      console.log(res.data);
    });
  }, []);

  return (
    <>
      <h1>Sono la Post</h1>
    </>
  );
}
