import { Box, Typography } from '@mui/material';

export function LoginHeader() {
    return (
        <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
                variant="h4"
                component="h1"
                className="text-white"
                sx={{
                    fontWeight: 600,
                    fontSize: '1.5rem',
                    mb: 3
                }}
            >
                Welcome back
            </Typography>
        </Box>
    );
}