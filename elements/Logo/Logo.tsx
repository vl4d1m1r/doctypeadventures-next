import Link from 'next/link'
import Image from 'next/image'

import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";

function Logo() {
    return (
        <>
            <Link href='/'>
                <Box mr={2}>
                    <Avatar alt='logo' src='/images/logo-doctype-circle.jpg' />
                </Box>
            </Link>
            <Link href='/'>
                <Box mr={2} sx={{ display: { xs: "none", md: "flex" } }}>
                    <Image src='/images/logo-doctype-text.png' width={160} height={35} alt='Logo image' />
                </Box>
            </Link>
        </>
    );
}

export default Logo;
