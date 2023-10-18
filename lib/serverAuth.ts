import { NextApiRequest } from "next";
import { getSession } from "next-auth/react";

import prismadb from "@/lib/prismadb";

const serverAuth = async (req: NextApiRequest) => {
    
    const body = req.body;
    req.body = '';
    const session = await getSession({req});
    req.body = body;

    if (!session?.user?.email) {
        throw new Error('User is not signed in!');
    }

    const user = await prismadb.user.findUnique({
        where: {
            email: session.user.email
        }
    });

    if (!user) {
        throw new Error('User is not signed in!');
    }

    return user;
};

export default serverAuth;