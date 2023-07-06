import { useNavigate } from "react-router-dom";
import "./NotFound.css";
import { useEffect } from "react";
export function NotFound() {
  const navigate=useNavigate()
  useEffect(() => {
    setTimeout(() => {
      redireccionar();
    }, 5000);
  }, []);

  const redireccionar = () => {
    navigate("/")
  };
  return (
    <main>
      <h1 id="id404">404?</h1>
    </main>
  );
}
