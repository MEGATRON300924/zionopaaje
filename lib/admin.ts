import { currentUser } from "@clerk/nextjs/server";

export const ADMIN_EMAIL = "zopaaje8@gmail.com";

export async function requireAdmin() {
  const user = await currentUser();
  const email = user?.emailAddresses.find((item) => item.id === user.primaryEmailAddressId)?.emailAddress.toLowerCase();

  if (!email || email !== ADMIN_EMAIL) return null;
  return user;
}
