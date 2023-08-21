import { Routes, Route } from "react-router-dom";
import MovieList from "../pages/MovieList";
import MovieDetail from "../pages/MovieDetail";
import Search from "../pages/Search";
import PageNotFound from "../pages/PageNotFound";


const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<MovieList/>}/>
            <Route path="movie/:id" element={<MovieDetail/>}/>
            <Route path="movies/popular" element={<MovieList/>}/>
            <Route path="movie/:top" element={<MovieList/>}/>
            <Route path="movies/upcoming" element={<MovieList/>}/>
            <Route path="search" element={<Search/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    </>
  )
}


export default AllRoutes;
 