import Logo from "@/components/logo";
import Typography from "@/components/typography";

const AuthWrapper = () => {
  return (
    <div className="min-h-screen w-full grid grid-cols-1 md:grid-cols-[55%_45%]">
      <div className="flex justify-center flex-col bg-amber-50 p-4">
        <Logo />
        <Typography variant="h1">Hello</Typography>
      </div>
      <div>right</div>
    </div>
  );
};

export default AuthWrapper;
