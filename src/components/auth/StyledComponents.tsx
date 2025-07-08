import { TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledTextField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        height: 48,
        borderRadius: 8,
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Add semi-transparent background
        '& fieldset': {
            borderColor: 'rgba(255, 255, 255, 0.3)', // Light border
        },
        '&:hover fieldset': {
            borderColor: theme.palette.primary.main,
        },
        '&.Mui-focused fieldset': {
            borderColor: theme.palette.primary.main,
        },
    },
    '& .MuiInputBase-input': {
        fontSize: 16,
        color: 'white', // White text input
        '&::placeholder': {
            color: 'rgba(255, 255, 255, 0.7)', // Light placeholder
            opacity: 1,
        },
    },
    '& .MuiFormHelperText-root': {
        color: 'rgba(255, 255, 255, 0.8)', // Light helper text
    },
}));

export const StyledButton = styled(Button)(({ theme }) => ({
    height: 48,
    borderRadius: 8,
    fontSize: 16,
    fontWeight: 500,
    textTransform: 'none',
}));