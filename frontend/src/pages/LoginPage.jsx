import { sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import { Link } from "react-router-dom";
import { auth } from '../auth/firebaseConfig';

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isEmailVerified, setIsEmailVerified] = useState(false);

    const handleLogin = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            if (!user.emailVerified) {
                await sendEmailVerification(user);
                alert("Please verify your email to continue.");
            } else {
                setIsEmailVerified(true);
                // Proceed to the app after login
            }
        } catch (error) {
            console.error("Error logging in", error.message);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <Link to="/">
                <button className="bg-white text-blue-500 mt-6 px-6 py-3 rounded-full mb-20">Home Page</button>
            </Link>
            <div className="bg-white p-8 rounded-lg shadow-lg w-80">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <input
                    type="email"
                    className="mb-4 p-2 w-full border rounded"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    className="mb-4 p-2 w-full border rounded"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    className="bg-blue-500 text-white p-2 w-full rounded"
                    onClick={handleLogin}
                >
                    Login
                </button>
            </div>
        </div>
    );
};

export default LoginPage;
