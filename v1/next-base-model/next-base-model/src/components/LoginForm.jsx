"use client";

import { doCredentialLogin } from "@/app/actions";
import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
    const router = useRouter();
    const [error, setError] = useState("");

    async function onSubmit(event) {
        event.preventDefault();
        try {
            const formData = new FormData(event.currentTarget);

            const response = await doCredentialLogin(formData);
            if (!!response.error) {
                console.error(response.error);
                setError(response.error.message);
            } else {
                router.push("/dashboard");
            }
        } catch (e) {
            console.error(e);
            setError("Check your Credentials");
        }
    }

    return (
        <>
            <div style={{ color: 'red', margin: '10px 0' }}>{error}</div>
            <form onSubmit={onSubmit} style={{ maxWidth: '300px', margin: 'auto' }}>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="email" style={{ display: 'block' }}>Email Address</label>
                    <input type="email" name="email" id="email" style={{ width: '100%', padding: '8px', border: "1px solid black" }} />
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="password" style={{ display: 'block' }}>Password</label>
                    <input type="password" name="password" id="password" style={{ width: '100%', padding: '8px', border: "1px solid black" }} />
                </div>

                <button type="submit" style={{ background: '#555', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer' }}>
                    Login
                </button>
            </form>
        </>
    );
};

export default LoginForm;
