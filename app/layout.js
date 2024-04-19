import '../styles/globals.css';

function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://stijndv.com" />
        <link
          rel="stylesheet"
          href="https://stijndv.com/fonts/Eudoxus-Sans.css"
        />
        <meta
          name="description"
          content="Whether you're a patient looking to access your medical records, a healthcare provider seeking to collaborate with patients, or a caregiver managing the health of a loved one, our website is here to help. We're committed to providing you with the highest level of service and support."
        />
        <meta
          name="keywords"
          content="Hackathon, Hackstreet, Hackstreet 2.0, Hackers"
        />
        <link rel="icon" href="/SmartMedlogo1.ico" />
        <title>SmartMed</title>
      </head>
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
