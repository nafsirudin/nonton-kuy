import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
// import NavigationBar from "./components/NavigationBar";
// import HomePage from './pages/Home/HomePage';
// import NotFoundPage from './pages/NotFoundPage';
import MoviesPage from './pages/Movies/MoviesPage';
import MoviesDetail from './pages/Movies/MoviesDetail';
import Footer from './components/Footer';
import './App.css';
const HomePage = React.lazy(() => import("./pages/Home/HomePage"));
const NavigationBar = React.lazy(() => import("./components/NavigationBar"));
const NotFoundPage = React.lazy(() => import("./pages/NotFoundPage"));
function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/movies' element={<MoviesPage />}></Route>
        <Route path='/movies/detail/:movieId' element={<MoviesDetail />}></Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
