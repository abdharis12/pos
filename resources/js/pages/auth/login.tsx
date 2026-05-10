import { Form, Head } from '@inertiajs/react';
import InputError from '@/components/input-error';
import PasswordInput from '@/components/password-input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import TextLink from '@/components/text-link';
import { store } from '@/routes/login';
import { request } from '@/routes/password';

type Props = {
    status?: string;
    canResetPassword: boolean;
    canRegister: boolean;
};

export default function Login({ status, canResetPassword }: Props) {
    return (
        <>
            <Head title="Masuk" />

            <div className="relative flex max-h-screen items-center justify-center overflow-hidden bg-stone-950 py-10 border border-amber-500 rounded-3xl">

                {/* Grid bg */}
                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage:
                            'linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)',
                        backgroundSize: '48px 48px',
                    }}
                />

                {/* Amber glow top */}
                <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-96 -translate-x-1/2 rounded-full bg-amber-400/15 blur-[80px]" />

                <div className="relative z-10 w-full max-w-[360px] px-4">

                    {/* Brand mark */}
                    <div className="mb-10 flex flex-col items-center gap-3">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400 text-2xl shadow-lg shadow-amber-400/30">
                            🍚
                        </div>
                        <div className="text-center">
                            <h1 className="text-xl font-black tracking-tight text-white">
                                Bubur Ayam Kang LW
                            </h1>
                            <p className="mt-0.5 text-xs text-stone-500">Sistem POS</p>
                        </div>
                    </div>

                    {/* Status */}
                    {status && (
                        <div className="mb-4 rounded-xl bg-emerald-500/10 px-4 py-3 text-center text-sm font-semibold text-emerald-400 ring-1 ring-emerald-500/20">
                            {status}
                        </div>
                    )}

                    {/* Form card */}
                    <div className="rounded-3xl border border-stone-800 bg-stone-900 p-6">
                        <Form
                            {...store.form()}
                            resetOnSuccess={['password']}
                            className="flex flex-col gap-4"
                        >
                            {({ processing, errors }) => (
                                <>
                                    {/* Email */}
                                    <div className="grid gap-1.5">
                                        <Label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-stone-500">
                                            Email
                                        </Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            name="email"
                                            required
                                            autoFocus
                                            tabIndex={1}
                                            autoComplete="email"
                                            placeholder="email@example.com"
                                            className="h-11 rounded-xl border-stone-700 bg-stone-800 px-4 text-sm text-white placeholder-stone-600 transition focus:border-amber-400 focus:ring-1 focus:ring-amber-400/20"
                                        />
                                        <InputError message={errors.email} />
                                    </div>

                                    {/* Password */}
                                    <div className="grid gap-1.5">
                                        <div className="flex items-center justify-between">
                                            <Label htmlFor="password" className="text-xs font-bold uppercase tracking-widest text-stone-500">
                                                Password
                                            </Label>
                                            {canResetPassword && (
                                                <TextLink
                                                    href={request()}
                                                    tabIndex={5}
                                                    className="text-xs font-semibold text-amber-400 hover:text-amber-300"
                                                >
                                                    Lupa?
                                                </TextLink>
                                            )}
                                        </div>
                                        <PasswordInput
                                            id="password"
                                            name="password"
                                            required
                                            tabIndex={2}
                                            autoComplete="current-password"
                                            placeholder="••••••••"
                                            className="h-11 rounded-xl border-stone-700 bg-stone-800 px-4 text-sm text-white placeholder-stone-600 transition focus:border-amber-400 focus:ring-1 focus:ring-amber-400/20"
                                        />
                                        <InputError message={errors.password} />
                                    </div>

                                    {/* Remember */}
                                    <div className="flex items-center gap-2">
                                        <Checkbox
                                            id="remember"
                                            name="remember"
                                            tabIndex={3}
                                            className="rounded-md border-stone-600 data-[state=checked]:border-amber-400 data-[state=checked]:bg-amber-400 data-[state=checked]:text-stone-900"
                                        />
                                        <Label htmlFor="remember" className="cursor-pointer text-sm text-stone-500">
                                            Ingat saya
                                        </Label>
                                    </div>

                                    {/* Submit */}
                                    <Button
                                        type="submit"
                                        tabIndex={4}
                                        disabled={processing}
                                        data-test="login-button"
                                        className="mt-1 h-11 w-full rounded-xl bg-amber-400 text-sm font-black text-stone-900 shadow-lg shadow-amber-400/10 transition-all hover:bg-amber-300 active:scale-[0.98] disabled:bg-stone-700 disabled:text-stone-500 disabled:shadow-none"
                                    >
                                        {processing
                                            ? <span className="flex items-center gap-2"><Spinner className="text-stone-600" /> Memproses...</span>
                                            : 'Masuk →'
                                        }
                                    </Button>
                                </>
                            )}
                        </Form>
                    </div>

                    <p className="mt-6 text-center text-xs text-stone-700">
                        © 2026 Bubur Ayam Kang LW · Palembang
                    </p>
                </div>
            </div>
        </>
    );
}

Login.layout = undefined;
