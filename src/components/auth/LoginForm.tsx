"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from 'next/navigation';
import { Box, Alert } from '@mui/material';

import { type LoginFormData, LoginSchema } from "@/lib/schemas";
import { login } from "@/lib/api/auth";
import { LoginCard } from "./LoginCard";
import { LoginHeader } from "./LoginHeader";
import { EmailStep } from "./EmailStep";
import { PasswordStep } from "./PasswordStep";
import { LoginFooter } from "./LoginFooter";
import SocialMediaButtons from "@/components/ui/social-media";
import {LoginButton} from "@/components/auth/LoginButton";

export function LoginForm() {
    const router = useRouter();
    const [isLoading, setIsLoading] = React.useState(false);
    const [step, setStep] = React.useState<'email' | 'password'>('email');
    const [error, setError] = React.useState<string | null>(null);

    const form = useForm<LoginFormData>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const handleContinueClick = async () => {
        setIsLoading(true);
        setError(null);
        const emailIsValid = await form.trigger("email");
        setIsLoading(false);
        if (emailIsValid) {
            setStep('password');
        }
    };

    const onSubmitActualLogin = async (data: LoginFormData) => {
        setIsLoading(true);
        setError(null);
        try {
            const currentUser = await login(data);
            if (currentUser) {
                router.push('/dashboard');
            }
        } catch (err) {
            setError('Login failed. Please check your credentials and try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <LoginCard>
            <LoginHeader />

            {error && (
                <Alert severity="error" sx={{ mb: 2 }}>
                    {error}
                </Alert>
            )}

            <Box
                component="form"
                onSubmit={form.handleSubmit(onSubmitActualLogin)}
                sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
            >
                <EmailStep
                    control={form.control}
                    errors={form.formState.errors}
                    isLoading={isLoading}
                    step={step}
                />

                {step === 'password' && (
                    <PasswordStep
                        control={form.control}
                        errors={form.formState.errors}
                        isLoading={isLoading}
                    />
                )}

                {step === 'email' ? (
                    <LoginButton
                        type="button"
                        onClick={handleContinueClick}
                        isLoading={isLoading}
                        loadingText="Continuing..."
                        text="Continue"
                    />
                ) : (
                    <LoginButton
                        type="submit"
                        isLoading={isLoading}
                        loadingText="Logging in..."
                        text="Login"
                    />
                )}
            </Box>

            <LoginFooter />
            <SocialMediaButtons />
        </LoginCard>
    );
}