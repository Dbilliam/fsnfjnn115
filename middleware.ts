import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
    '/dashboard(.*)',
    '/forum(.*)',
  ]);

// export default clerkMiddleware({
//     publicRoutes: [
//         '/',
//         '/events/:id',
//         '/api/webhook/clerk',
//         '/api/webhook/stripe',
//         '/api/uploadthing'
//     ],
//     ignoredRoutes: [
//         '/api/webhook/clerk',
//         '/api/webhook/stripe',
//         '/api/uploadthing'
//     ]
// });

export default clerkMiddleware((auth, req) => {
    if (!auth().userId && isProtectedRoute(req)) {
  
      // Add custom logic to run before redirecting
  
      return auth().redirectToSignIn();
    }
  });
  

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};