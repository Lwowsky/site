import Container from "../Container/Container.jsx";

function Page({ children, className = "" }) {
  return (
    <main className={`page ${className}`.trim()}>
      <Container>
        {children}
      </Container>
    </main>
  );
}

export default Page;