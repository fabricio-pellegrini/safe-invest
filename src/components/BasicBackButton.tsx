'use client'

import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { useRouter } from 'next/navigation'

export function BasicBackButton() {

    const router = useRouter()

    return (
        <IconButton  onClick={() => router.back()}>
            <ArrowBackIcon/>
        </IconButton>
    );
}