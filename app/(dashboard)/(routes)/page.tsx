import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
    return (
        <>
            <UserButton afterSignOutUrl="/" />
            <p className="text-3xl font-medium text-sky-700">Hello World</p>
            <Button variant="link">버튼</Button>
        </>
    );
}
