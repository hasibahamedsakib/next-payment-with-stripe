// import localFont from "next/font/local";
import Footer from "@/components/Footer";
import "./globals.css";
import Header from "@/components/Header";
import { Sunflower } from 'next/font/google';
import { Toaster } from "react-hot-toast";
import axios from "axios";
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken'
import SessionWrapper from "@/components/SessionWrapper";
import { useSession } from "next-auth/react";
import 'leaflet/dist/leaflet.css';
import { FormProvider } from "@/context/FormContext";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
const sunflower = Sunflower({
  weight: ['300', '500', '700'],  // You can choose which weights to include
  subsets: ['latin'],
  display: 'swap',
});


export const metadata = {
  title: "Move Around",
  description: "Generated by create next app",
};




export default function RootLayout({ children }) {

  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value;

  // console.log(`token : ${token}`);
  

  const data = jwt.decode(token)
  // console.log(`token data: ${data}`);

  // const cookieStored = cookies();
  //   const tokend = cookieStored.get('next-auth.session-token')?.value;

  //   // Decode the token to get user data
  //   const decoded = jwt.decode(tokend);
  //   console.log(`tokend:  ${tokend}`);
    
  
  
  
  
  

  return (
    <FormProvider >

<SessionWrapper >
    <html lang="en">
      <body
        className={`${sunflower.className}  bg-[#FFFCF9] text-black antialiased`}
      >
      <Header user={token ? true : false} userData = {data} />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
    </SessionWrapper>

    </FormProvider>
  );
}

// export async function getStaticProps() {
//   try {
    
//     const res = await axios.get('http://localhost:3000/api/user/details');
//     const data = res.data;

//     console.log(data);

//     return {
//       props: { data },
//       revalidate: 5, 
//     };
//   } catch (error) {
//     console.error('Error fetching static content', error);
//     return {
//       props: {
//         data: null, 
//       },
//     };
//   }
// }