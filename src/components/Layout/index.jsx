
// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <main className="flex flex-col items-center justify-items-center min-h-screen py-4">
      {children}
    </main>
  )
}

export default Layout;