import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="typography-primary-l-l">Chez Popette</h1>
      <h2 className="typography-secondary-l">Chez Popette</h2>
      <h3 className="typography-tertiary-l">Chez Popette</h3>
      <h4 className="typography-alt-l">Chez Popette</h4>
      <br />
      <button className="bg-primary text-on-primary px-6 py-4 hover:bg-on-primary hover:text-primary hover:border-2 transition-all cursor-pointer active:scale-95">
        Popette Primary
      </button>
      <br />
      <button className="bg-secondary-container text-on-secondary-container px-6 py-4 hover:bg-on-secondary-container hover:text-secondary-container transition-all cursor-pointer active:scale-95">
        Popette Secondary
      </button>
      <br />
      <button className="border-2 border-solid border-primary text-primary px-6 py-4 cursor-pointer">
        Popette Secondary
      </button>
      <br />
      <br />
      <article className="bg-primary-container">
        <h1 className="typography-secondary-l-bold">Boeuf Wagyu</h1>
        <p className="typography-primary-s text-on-primary-container">
          Lorem ipsum dolor sit amet
        </p>
      </article>
      <article className="bg-secondary-container">
        <h1 className="typography-secondary-l-bold">Boeuf Wagyu</h1>
        <p className="typography-primary-s text-on-primary-container">
          Lorem ipsum dolor sit amet
        </p>
      </article>
      <Header />
      <Navigation />
      <main className=""></main>
      <Footer />
    </div>
  );
}
