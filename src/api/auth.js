import { toast } from "react-toastify";

export const authToken = (user) => {
  const currentUser = {
    email: user.email,
  };

  fetch("https://uber-barber-server.vercel.app/jwt", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      localStorage.setItem("uber-token", data.token);
      toast.success("Successfully sign in");

      //   navigate(from, { replace: true });
      // form.reset();
    });
};
