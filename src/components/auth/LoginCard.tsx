import { Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
    width: '100%',
    maxWidth: 400,
    boxShadow: 'none',
    border: 'none',
    backgroundColor: 'transparent',
}));

interface LoginCardProps {
    children: React.ReactNode;
}

export function LoginCard({ children }: LoginCardProps) {
    return (
        <StyledCard>
            <CardContent sx={{ p: 0 }}>
                {children}
            </CardContent>
        </StyledCard>
    );
}