import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function DetailsPostPage() {
  const { id } = useParams();
  useEffect(() => {
    axios.get("http://localhost:3000/posts/" + id).then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <>
      <h1>Dettagli</h1>
    </>
  );
}
