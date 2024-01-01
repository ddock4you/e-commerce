import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
    return <div className="bg-rose-800 h-full text-white">{children}</div>;
};

export default AuthLayout;
