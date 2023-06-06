import "./globals.css";
import { Inter, Roboto, Poppins } from "next/font/google";
import { ThemeProvider } from "./utils/contexts/ThemeContext";
import { Footer, Navbar } from "./components/layouts";
import AuthProvider from "./utils/providers/auth/AuthProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Project 16 - MERN BLOG NEXT AUTH",
  description: "This is the description",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      
        <body className={inter.className}>
          <ThemeProvider>
            <AuthProvider>
            
              <div className='container'>
                <Navbar />
                {children}
                <Footer />
              </div>
            </AuthProvider>
          </ThemeProvider>
        </body>
    </html>
  );
}
