"use client"

import { useUserAuth } from "./_utils/auth-context";
import ShoppingList from "./shopping-list/ShoppingList";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    return (
        <main>
            {user ? (
                <div>
                    <p> Welcome back, ({user.email}) </p>
                    <button title="Sign out" onClick={firebaseSignOut} className="text-3xl bg-black text-white">Sign out</button>
                    <ShoppingList />
                </div>
            ) : (
                <button title="Sign up with GitHub" onClick={gitHubSignIn} className="text-3xl bg-black text-white">Sign up with GitHub</button>
            )}
        </main>
    );
}