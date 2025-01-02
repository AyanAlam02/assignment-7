// src/app/page.tsx
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Server from "../components/Server/Server";
import BookManager from "../components/Client/Client";

export default async function Page() {
  const res = await fetch("https://simple-books-api.glitch.me/books", {
    cache: "no-store",
  });
  const books = await res.json();

  return (
    <div className="container">
      <Header />
      <main>
        <h1 className="title">Book List</h1>
        <BookManager books={books} />
        <Server />
      </main>
      <Footer />
    </div>
  );
}
