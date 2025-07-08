import { Controller, Control, FieldErrors } from "react-hook-form";
import { StyledTextField } from "./StyledComponents";
import { type LoginFormData } from "@/lib/schemas";

interface EmailStepProps {
    control: Control<LoginFormData>;
    errors: FieldErrors<LoginFormData>;
    isLoading: boolean;
    step: 'email' | 'password';
}

export function EmailStep({ control, errors, isLoading, step }: EmailStepProps) {
    return (
        <Controller
            name="email"
            control={control}
            render={({ field }) => (
                <StyledTextField
                    {...field}
                    type="email"
                    placeholder="Email"
                    fullWidth
                    disabled={isLoading || step === 'password'}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    variant="outlined"
                />
            )}
        />
    );
}