import { Controller, Control, FieldErrors } from "react-hook-form";
import { StyledTextField } from "./StyledComponents";
import { type LoginFormData } from "@/lib/schemas";

interface PasswordStepProps {
    control: Control<LoginFormData>;
    errors: FieldErrors<LoginFormData>;
    isLoading: boolean;
}

export function PasswordStep({ control, errors, isLoading }: PasswordStepProps) {
    return (
        <Controller
            name="password"
            control={control}
            render={({ field }) => (
                <StyledTextField
                    {...field}
                    type="password"
                    placeholder="Password"
                    fullWidth
                    disabled={isLoading}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                    variant="outlined"
                />
            )}
        />
    );
}