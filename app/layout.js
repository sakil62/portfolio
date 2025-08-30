import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "Sakil Parvez | Portfolio",
  description: "Personal portfolio of Sakil Parvez, Full Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
