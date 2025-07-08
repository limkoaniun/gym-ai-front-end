import Link from 'next/link';
import { Box, Typography, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledDivider = styled(Divider)(({ theme }) => ({
    margin: theme.spacing(3, 0),
    '&::before, &::after': {
        borderColor: 'rgba(255, 255, 255, 0.2)', // Light divider
    },
}));

export function LoginFooter() {
    return (
        <>
            <Box sx={{ textAlign: 'center', mt: 2 }}>
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    Don't have an account?{' '}
                    <Link
                        href="/signup"
                        style={{
                            color: 'inherit',
                            textDecoration: 'none',
                            fontWeight: 500
                        }}
                    >
                        <Box
                            component="span"
                            sx={{
                                color: 'primary.main',
                                '&:hover': { textDecoration: 'underline' }
                            }}
                        >
                            Sign up
                        </Box>
                    </Link>
                </Typography>
            </Box>

            <StyledDivider>
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                    OR
                </Typography>
            </StyledDivider>
        </>
    );
}