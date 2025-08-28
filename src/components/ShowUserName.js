import { useState, useEffect } from "react";

function ShowUsername() {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    setUsername(storedUsername);
  }, []);

  return (
    <div>
      <p
        style={{
          marginTop: "-43px",
          marginRight: ".5rem",
          fontWeight: "600",
          paddingTop: "11px",
          backgroundColor: "#fff",
          width: "7rem",
          textAlign: "center",
          height: "2rem",
          borderRadius: "10px",
          border: "1px solid #55a3f0",
        }}
      >
        Hi {username}
      </p>
    </div>
  );
}

export default ShowUsername;
