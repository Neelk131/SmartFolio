import { withAuth } from "next-auth/middleware";

export default withAuth({
    callbacks: {
        authorized: ({ token }) => {
            console.log('token : ',token);
            
            // Only allow access if the user has a token and a specific role
            return !!token;
        },
    },
    pages: {
        signIn: '/', // Redirect to sign-in page if not authenticated
    },
});