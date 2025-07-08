import { Box, Typography } from '@mui/material';

export function LoginHeader() {
    return (
        <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
                variant="h4"
                component="h1"
                sx={{
                    fontWeight: 600,
                    fontSize: '1.5rem',
                    mb: 3,
                    color: 'white',
                }}
            >
                Welcome back
            </Typography>
        </Box>
    );
}