import { ClerkProvider, SignIn } from "@clerk/nextjs";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Sign in",
  description: "Sign in to manage Zion Opaaje's blog."
};

export default function SignInPage() {
  if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
    return (
      <main className="auth-page">
        <div className="auth-card">
          <p className="eyebrow">BLOG ADMIN</p>
          <h1>Sign-in is not configured yet.</h1>
          <p>Add the Clerk keys in Vercel before using Google sign-in.</p>
        </div>
      </main>
    );
  }

  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <main className="auth-page">
        <div className="auth-card">
          <p className="eyebrow">BLOG ADMIN</p>
          <h1>Sign in with Google.</h1>
          <p>Use your Google account to access the private publishing area.</p>
          <SignIn fallbackRedirectUrl="/admin/blog" />
        </div>
      </main>
    </ClerkProvider>
  );
}
