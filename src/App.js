import './css/App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import BlogDetails from './pages/BlogDetails';
import Navbar from './components/Navbar';
import RecipeDetails from './pages/RecipeDetails';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path='/Foodieland-React' element={<Home />} />
          <Route path='/recipes' element={<Recipes />} />
          <Route path='/recipes/:recipe' element={<RecipeDetails />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog/:details' element={<BlogDetails />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='*' element={(<h1>Not found</h1>)} />
        </Routes>
    </div>
  );
}

export default App;
