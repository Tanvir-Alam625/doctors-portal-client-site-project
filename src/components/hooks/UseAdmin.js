import { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);
  useEffect(() => {
    const email = user?.email;
    if (email) {
      fetch(`https://doctors-portal-server-project-tanvir.onrender.com/admin/${email}`, {
        method: "GET",
        headers: {
          authorization: `bearer ${localStorage.getItem("access-token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setAdminLoading(false);
          setAdmin(data.admin);
        });
    }
  }, [user]);
  return [admin, adminLoading];
};
export default useAdmin;
