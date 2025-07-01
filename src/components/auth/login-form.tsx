"use client";

import * as React from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useRouter} from 'next/navigation';
import Link from 'next/link';

import {Button} from "@/components/ui/button";
import {Form, FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {type LoginFormData, LoginSchema} from "@/lib/schemas";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import {login} from "@/lib/api/auth";
import SocialMediaButtons from "@/components/ui/social-media";

export function LoginForm() {
    const router = useRouter();
    const [isLoading, setIsLoading] = React.useState(false);
    const [step, setStep] = React.useState<'email' | 'password'>('email');

    const form = useForm<LoginFormData>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const handleContinueClick = async () => {
        setIsLoading(true);
        const emailIsValid = await form.trigger("email");
        setIsLoading(false);
        if (emailIsValid) {
            setStep('password');
        }
    };

    async function onSubmitActualLogin(data: LoginFormData) {
        setIsLoading(true);
        const currentUser = await login(data);
        if (currentUser) {
            router.push('/dashboard');
        }
        setIsLoading(false);
    }

    return (
        <Card className="w-full max-w-sm shadow-none border-none bg-transparent">
            <CardHeader className="text-center p-0 mb-6">
                <CardTitle className="text-2xl font-semibold mb-6">Welcome back</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmitActualLogin)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({field}) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            placeholder="Email"
                                            {...field}
                                            disabled={isLoading || step === 'password'}
                                            className="text-base h-12 rounded-lg border-input focus:border-primary focus:ring-primary"
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        {step === 'password' && (
                            <FormField
                                control={form.control}
                                name="password"
                                render={({field}) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                type="password"
                                                placeholder="Password"
                                                {...field}
                                                disabled={isLoading}
                                                className="text-base h-12 rounded-lg border-input focus:border-primary focus:ring-primary"
                                            />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                        )}

                        {step === 'email' ? (
                            <Button
                                type="button"
                                onClick={handleContinueClick}
                                className="w-full text-base py-3 h-12 rounded-lg bg-primary hover:bg-primary/90"
                                disabled={isLoading}
                            >
                                {isLoading ? "Continuing..." : "Continue"}
                            </Button>
                        ) : (
                            <Button
                                type="submit"
                                className="w-full text-base py-3 h-12 rounded-lg bg-primary hover:bg-primary/90"
                                disabled={isLoading}
                            >
                                {isLoading ? "Logging in..." : "Login"}
                            </Button>
                        )}
                    </form>
                </Form>

                <div className="text-center my-4">
                    <p className="text-sm text-muted-foreground">
                        Don&apos;t have an account?{" "}
                        <Link href="/signup" className="text-accent hover:underline">Sign up</Link>
                    </p>
                </div>

                <div className="relative my-6">
                    <Separator className="absolute top-1/2 left-0 w-full -translate-y-1/2"/>
                    <span
                        className="relative bg-background px-2 text-sm text-muted-foreground z-10 flex justify-center">
                        <span className="bg-background px-2">OR</span>
                    </span>
                </div>

                <SocialMediaButtons/>
            </CardContent>
            <CardFooter className="flex flex-col items-center justify-center mt-8 p-0">
                <div className="text-xs text-muted-foreground space-x-2">
                    <Link href="#" className="hover:underline">Terms of Use</Link>
                    <span>|</span>
                    <Link href="#" className="hover:underline">Privacy Policy</Link>
                </div>
            </CardFooter>
        </Card>
    );
}