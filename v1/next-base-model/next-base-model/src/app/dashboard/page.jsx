// import withAuth from "@/hocs/withAuth";

// const Dashboard = () => {
//     return <>
//         <h1>Dashboard</h1>
//     </>
// }

// export default withAuth(Dashboard);

import Image from "next/image";
import LoginForm from "@/components/LoginForm";
import Logout from "@/components/Logout";
import { auth } from "@/auth";

import { redirect } from "next/navigation";
import withAuth from "@/hocs/withAuth";

const Dashboard = async () => {
    const session = await auth();

    if (!session?.user) redirect("/sign-in");

    return (
        <div className="flex flex-col items-center m-4">
            {session?.user?.name && session?.user?.image ? (
                <>
                    <h1 className="text-3xl my-2">
                        Welcome, {session?.user?.name}
                    </h1>
                    <Image
                        src={session?.user?.image}
                        alt={session?.user?.name}
                        width={72}
                        height={72}
                        className="rounded-full"
                    />
                </>
            ) : (
                <h1 className="text-3xl my-2">
                    Welcome, {session?.user?.email}
                </h1>
            )}
            <Logout />
        </div>
    );
};

// export default withAuth(Dashboard);
export default Dashboard;
