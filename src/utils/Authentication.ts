import { AuthData, Credentials } from "@/api/types";
import { v4 as uuidv4 } from "uuid";

const Authentication = (authData: AuthData[], credentials: Credentials) => {
  let x = "";
  for (let i = 0; i < authData.length; i++) {
    if (authData[i].email === credentials.email) {
      x = "email matched";
      if (authData[i].password === credentials.password) {
        console.log("password.check");
        x = "password matched";
        return {
          Authentication: "success",
          name: authData[i].name,
          token: uuidv4(),
          error: "",
        };
      }
    }
  }
  if (x === "") {
    return {
      Authentication: "failure",
      token: "",
      error: "Email not Registered",
    };
  }
  if (x === "email matched") {
    return {
      Authentication: "failure",
      token: "",
      error: "Incorrect password",
    };
  }
};

export default Authentication;
