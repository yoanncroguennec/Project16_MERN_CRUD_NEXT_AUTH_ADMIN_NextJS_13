// Layout, Navbar, Footer
// Page, Catégories




// LAYOUTS
import { AppLayout } from "./components/layouts";
// CONTEXTS
import { ThemeProvider } from "./utils/contexts/ThemeContext";
// PROVIDERS
import AuthProvider from "./utils/providers/auth/AuthProvider";
// STYLES
import "./globals.css";

// web page title tab
export const metadata = {
  title: "Project 16 - MERN BLOG NEXT AUTH",
  description: "This is the description",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <ThemeProvider>
          <AuthProvider>
            <AppLayout>
              {children}
            </AppLayout>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
