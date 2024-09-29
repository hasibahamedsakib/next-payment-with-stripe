import jwt from "jsonwebtoken"
import { NextResponse } from "next/server"

export const getTokenData = (req) => {
    try {
        
        const token = req.cookies.get("token")?.value || ""
        // const token = req.headers.authorization?.split(' ')[1];
        // console.log(token);
        // console.log(`tokened: ${token}`);

        // console.log('token',token)


        if (!token) {
            console.log("No token found in cookies");
        }
        
        
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY)
        // console.log(decodedToken);
        

        return decodedToken.id

    } catch (error) {
        console.log('getToken error', error.message);
        
    }
}