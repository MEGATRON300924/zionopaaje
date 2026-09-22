import { SignIn } from "@clerk/nextjs";

export const metadata = {
  title: "Sign in",
  description: "Sign in to manage Zion Opaaje's blog."
};

export default function SignInPage() {
  return (
    <main className="auth-page">
      <div className="auth-card">
        <p className="eyebrow">BLOG ADMIN</p>
        <h1>Sign in with Google.</h1>
        <p>Use your Google account to access the private publishing area.</p>
        <SignIn fallbackRedirectUrl="/admin/blog" />
      </div>
    </main>
  );
}
