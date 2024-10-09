import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const path = request.nextUrl.pathname;
  // console.log(path);

  const isPublicPath =
    path === "/auth/signin" || path === "/auth/signup" || path === "/";

  const token = request.cookies.get("token")?.value || "";
  // const tokend = request.cookies.get('next-auth.session-token')?.value;

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/auth/signin", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/auth/signup",
    "/auth/signin",
    // '/verifyemail',
    "/profile",
    "/payment",
    "/dashboard/:path*",
  ],
};
