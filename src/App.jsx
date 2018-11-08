import React, { Suspense, lazy, useState } from "react";
import { Spinner } from "./components/Spinner";

const Users = lazy(() => import("./components/Users"));
const SignIn = lazy(() => import("./components/SignIn"));

export function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const onSuccess = () => setLoggedIn(true);

  return (
    <Suspense maxDuration={500} fallback={Spinner}>
      {loggedIn ? <Users /> : <SignIn onSuccess={onSuccess} />}
    </Suspense>
  );
}
