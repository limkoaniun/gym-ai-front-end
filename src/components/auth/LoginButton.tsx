import { CircularProgress } from '@mui/material';
import { StyledButton } from "./StyledComponents";

interface LoginButtonProps {
    type: 'button' | 'submit';
    onClick?: () => void;
    isLoading: boolean;
    loadingText: string;
    text: string;
}

export function LoginButton({
                                type,
                                onClick,
                                isLoading,
                                loadingText,
                                text
                            }: LoginButtonProps) {
    return (
        <StyledButton
            type={type}
            onClick={onClick}
            variant="contained"
            fullWidth
            disabled={isLoading}
            sx={{ mt: 1 }}
        >
            {isLoading ? (
                <>
                    <CircularProgress size={20} sx={{ mr: 1 }} />
                    {loadingText}
                </>
            ) : (
                text
            )}
        </StyledButton>
    );
}