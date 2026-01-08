import { redirectIfAuthenticated } from "@/utils/auth";
import AuthWrapper from "@/features/auth/auth-wrapper";

const LoginPage = async () => {
  await redirectIfAuthenticated();
  return <AuthWrapper />;
};

export default LoginPage;
