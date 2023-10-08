
// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <main className="flex flex-col items-center min-h-screen">
      {children}
    </main>
  )
}

export default Layout;