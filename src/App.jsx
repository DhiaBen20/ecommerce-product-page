import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import ProductGallery from "./components/ProductGallery";

function App() {
    return (
        <>
            <Header />
            <main className="mx-auto max-w-6xl pb-24 md:grid md:grid-cols-2 md:gap-10 md:px-[2.75rem] md:pt-24 lg:gap-[6.55rem]">
                <ProductGallery />
                <ProductDetails />
            </main>
        </>
    );
}

export default App;
