// LAYOUTS
import { AppLayout } from "./components/layouts";
// STYLES
import "./globals.css";
import { GlobalProvider } from "./utils/providers/GlobalProvider";

// web page title tab
export const metadata = {
  title: "Project 16 - MERN BLOG NEXT AUTH",
  description: "This is the description",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
          <GlobalProvider>
            <AppLayout>
              {children}
            </AppLayout>
          </GlobalProvider>
      </body>
    </html>
  );
}
