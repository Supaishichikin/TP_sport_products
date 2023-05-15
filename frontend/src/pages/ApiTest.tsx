import { useEffect, useState } from "react";
import { apiTest } from "../api/api";

export default function ApiTest() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    apiTest().then((response) => setMessage(response.message));
  }, []);

  return <>{message ?? null}</>;
}
