import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const email = user?.user?.email;
    const currentUser = { email: email };
    if (email) {
      fetch(`https://shielded-sierra-98684.herokuapp.com/user/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((result) => {
          setToken(result);
          console.log(result);
          const token = result?.token;
          localStorage.setItem("access-token", token);
        });
    }
    // console.log("inside users", user);
  }, [user]);
  return [token];
};
export default useToken;
