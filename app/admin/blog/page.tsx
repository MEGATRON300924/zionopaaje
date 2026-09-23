"use client";

import { useState } from "react";
import { ClerkProvider, useUser } from "@clerk/nextjs";
import { upload } from "@vercel/blob/client";

const ADMIN_EMAIL = "zopaaje8@gmail.com";

function BlogAdmin() {

  const { isLoaded, isSignedIn, user } = useUser();
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [tags, setTags] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");

  const email = user?.emailAddresses.find((item) => item.id === user.primaryEmailAddressId)?.emailAddress?.toLowerCase();
  const isAdmin = email === ADMIN_EMAIL;

  async function uploadMedia(file: File) {
    setMessage(`Uploading ${file.name}…`);
    try {
      const result = await upload(`blogs/media/${Date.now()}-${file.name.replace(/[^a-zA-Z0-9._-]/g, "-")}`, file, {
        access: "public",
        handleUploadUrl: "/api/blog/upload",
        multipart: file.size > 8 * 1024 * 1024
      });
      setMessage("Upload complete.");
      return result.url;
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Upload failed.");
      return null;
    }
  }

  async function savePost() {
    setMessage("Publishing…");
    const response = await fetch("/api/blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title, slug, excerpt,
        tags: tags.split(",").map((tag) => tag.trim()).filter(Boolean),
        coverImage, content
      })
    });
    const data = await response.json();
    if (!response.ok) return setMessage(data.error || "Could not publish.");

    setMessage(`Published: /blog/${data.post.slug}`);
    setTitle(""); setSlug(""); setExcerpt(""); setTags(""); setCoverImage(""); setContent("");
  }

  if (!isLoaded) return <main className="admin-page"><div className="admin-card">Checking access…</div></main>;
  if (!isSignedIn) return <main className="admin-page"><div className="admin-card"><p className="eyebrow">BLOG ADMIN</p><h1>Sign in required.</h1><a className="primary" href="/sign-in">Sign in with Google →</a></div></main>;
  if (!isAdmin) return <main className="admin-page"><div className="admin-card"><p className="eyebrow">ACCESS DENIED</p><h1>This account cannot publish.</h1><p>The blog admin is restricted to the authorized administrator account.</p></div></main>;

  return (
    <main className="admin-page">
      <div className="admin-shell">
        <div className="admin-heading">
          <div><p className="eyebrow">BLOG ADMIN</p><h1>Publish a new article.</h1><p>Create a post with text, images, video and SEO metadata.</p></div>
          <a href="/blog">View blog →</a>
        </div>
        <div className="admin-grid">
          <section className="admin-card">
            <label>Title<input value={title} onChange={(e) => { const value = e.target.value; setTitle(value); if (!slug) setSlug(value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")); }} placeholder="My latest build" /></label>
            <label>Slug<input value={slug} onChange={(e) => setSlug(e.target.value)} placeholder="my-latest-build" /></label>
            <label>Excerpt<textarea value={excerpt} onChange={(e) => setExcerpt(e.target.value)} rows={3} placeholder="A short description used in cards and search previews." /></label>
            <label>Tags<input value={tags} onChange={(e) => setTags(e.target.value)} placeholder="AI, software, building" /></label>
            <label>Cover image URL<input value={coverImage} onChange={(e) => setCoverImage(e.target.value)} placeholder="Upload an image below, then use its URL." /></label>

            <div className="media-tools">
              <div><strong>Media</strong><span>Upload an image or video, then it can be inserted into the article.</span></div>
              <label className="upload-button">Cover image<input type="file" accept="image/*" hidden onChange={async (e) => { const file = e.target.files?.[0]; if (!file) return; const url = await uploadMedia(file); if (url) setCoverImage(url); }} /></label>
              <label className="upload-button">Inline image<input type="file" accept="image/*" hidden onChange={async (e) => { const file = e.target.files?.[0]; if (!file) return; const url = await uploadMedia(file); if (url) setContent((value) => value + `\\n\\n![Image](${url})\\n\\n`); }} /></label>
              <label className="upload-button">Video<input type="file" accept="video/*" hidden onChange={async (e) => { const file = e.target.files?.[0]; if (!file) return; const url = await uploadMedia(file); if (url) setContent((value) => value + `\\n\\n@[video](${url})\\n\\n`); }} /></label>
            </div>

            <label>Article content<textarea className="article-editor" value={content} onChange={(e) => setContent(e.target.value)} rows={18} placeholder={"Write your article here.\n\nUse **bold**, *italic*, ## headings, [links](https://example.com), ![alt text](image-url) and @[video](video-url)."} /></label>
            <div className="admin-actions"><button className="primary" type="button" onClick={savePost}>Publish article →</button><span>{message}</span></div>
          </section>

          <aside className="admin-card admin-guide">
            <p className="eyebrow">EDITOR GUIDE</p><h2>Simple publishing.</h2>
            <p>Upload media first. The editor automatically inserts the correct syntax for inline media.</p>
            <ul>
              <li><code>**bold**</code> for bold</li><li><code>*italic*</code> for italic</li><li><code>## Heading</code> for headings</li><li><code>![alt](URL)</code> for images</li><li><code>@[video](URL)</code> for videos</li><li><code>[text](URL)</code> for links</li>
            </ul>
            <p className="small-note">Each post gets a canonical URL, Open Graph metadata, Twitter metadata and BlogPosting structured data.</p>
          </aside>
        </div>
      </div>
    </main>
  );
}

}

export default function BlogAdminPage() {
  if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
    return (
      <main className="admin-page">
        <div className="admin-card">
          <p className="eyebrow">BLOG ADMIN</p>
          <h1>Authentication is not configured.</h1>
          <p>Add the Clerk publishable key and secret key to the Vercel project environment variables, then redeploy.</p>
        </div>
      </main>
    );
  }

  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <BlogAdmin />
    </ClerkProvider>
  );
}
