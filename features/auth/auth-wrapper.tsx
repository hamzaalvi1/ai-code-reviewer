import { JSX } from "react";

import LoginProvider from "./login-provider";
import AuthIntroSection from "./auth-intro-section";

const AuthWrapper = (): JSX.Element => {
  return (
    <div className="min-h-screen w-full grid grid-cols-1 md:grid-cols-[45%_55%]">
      <AuthIntroSection />
      <LoginProvider />
    </div>
  );
};

export default AuthWrapper;
