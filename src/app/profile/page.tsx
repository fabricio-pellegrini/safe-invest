import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import Box from "@mui/material/Box";


export default async function ProfilePage() {

    const session = await getServerSession(options);

    return (
        <Box  sx={{ flexGrow: 1 }}>
            <h1>Profile</h1>
            <p>Welcome {session?.user?.name}</p>
        </Box>
    );
}