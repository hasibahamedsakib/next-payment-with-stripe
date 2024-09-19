import jwt from "jsonwebtoken"
import { NextResponse } from "next/server"

export const getTokenData = (req) => {
    try {
        
        const token = req.cookies.get("token")?.value || ""
        // const token = req.headers.authorization?.split(' ')[1];
        // console.log(token);
        // console.log(`tokened: ${token}`);
        
        
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY)
        // console.log(decodedToken);
        

        return decodedToken.id

    } catch (error) {
        throw new Error(error.message)
        console.log(error);
        
    }
}