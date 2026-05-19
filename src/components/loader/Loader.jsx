import { useEffect } from "react";
import "./loader.css";

function Loader({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="loader">
      <div className="cluster">
        {Array.from({ length: 18 }).map((_, i) => (
          <span key={i} className={`particle p${i % 6}`} />
        ))}
      </div>

      <div className="loader-text">Welcome To This Galaxy..!</div>
    </div>
  );
}

export default Loader;
