import { auth0 } from "@/lib/auth0";
import './globals.css';
import UserMenu from "./components/UserMenu";

export default async function Home() {
  // Fetch the user session
  const session = await auth0.getSession();

  // If no session, show sign-up and login buttons
  if (!session) {
    return (
        <main>
        <h1>Welcome to MyApp</h1>
        <div className="button-group">
          <a href="/auth/login?screen_hint=signup">
            <button className="signup">Sign up</button>
          </a>
          <a href="/auth/login">
            <button className="login">Log in</button>
          </a>
        </div>
      </main>
    );
  }

return <UserMenu name={session.user.name ?? 'User'} />;
}