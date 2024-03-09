import "@/assets/styles/globals.css";

export const metadata = {
  title: "PropertyPulse | Find the Perfect Rental",
  description:
    "Find the perfect rental property in Bangkok, Thailand. Search for apartments, condos, and houses for rent in Bangkok.",
  keywords: "rental, property, bangkok, thailand",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="th">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
