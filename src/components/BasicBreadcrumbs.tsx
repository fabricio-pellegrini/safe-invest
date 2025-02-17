'use client'

import { Breadcrumbs, Link } from "@mui/material";
import { usePathname } from 'next/navigation';

export function BasicBreadcrumbs() {

    const paths = usePathname()
    const pathNames = paths.split('/').filter(path => path)

    let accumulatedPath = '';

    return (
        <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
                Safe Invest
            </Link>
            {pathNames.map((path) => {
                const decodedPath = decodeURIComponent(path);
                accumulatedPath += `/${path}`;
                return (
                    <Link key={path} underline="hover" color="inherit" href={accumulatedPath}>
                        {decodedPath.charAt(0).toUpperCase() + decodedPath.slice(1)}
                    </Link>
                );
            })}
        </Breadcrumbs>
    );
}

