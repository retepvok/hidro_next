export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/*<meta charSet="utf-8">*/}
        <title>Hidroworks</title>
        {/*<base href="/">*/}
        {/*<meta name="viewport" content="width=device-width, initial-scale=1">*/}
        {/*<link rel="icon" type="image/x-icon" href="/assets/favicon.ico">*/}
      </head>
      <body>{children}</body>
    </html>
  )
}