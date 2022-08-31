import { Provider } from "react-redux";
import BlogList from "./components/BlogList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Search from "./components/Search";
import store from "./redux/store"
function App() {
  return (
    <Provider store={store}>
      <Nav />
      <Search />
      <section className="relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <Header />
          <BlogList />
        </div>
      </section>
      <Footer />
    </Provider>
  );
}

export default App;
