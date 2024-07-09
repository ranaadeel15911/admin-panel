import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
const allowedUsers = ["ra0511083@gmail.com", "nt3784927@gmail.com"];
const handler = NextAuth({providers: [GoogleProvider( {
clientId: process.env.CLIENT_ID,
clientSecret: process.env.CLIENT_SECRET,
}),
],
secret: process.env.NEXTAUTH_SECRET,
callbacks:{
    async signIn(user,account,profile){
if (allowedUsers.includes(user.user.email)) {
    console.log(user.user.email)
    return true
}
else{
    return false
}
    }
},
pages:{
    error:"/page404",
    // newUser:"/admin/dashboard",
    signIn:"/login",
    signOut:"/login",
    // verifyRequest:"/admin/dashboard"
}
});
export { handler as GET, handler as POST };

