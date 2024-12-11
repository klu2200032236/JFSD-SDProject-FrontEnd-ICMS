// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import NavBar from './components/NavBar';
// import Signup from './components/Signup';
// import Login from './components/Login';
// import HomePage from './components/HomePage';

// function App() {
//     return (
//         <Router>
//             <div className="App">
//                 <NavBar />
//                 <Routes>
//                     <Route path="/" element={<HomePage />} />
//                     <Route path="/signup" element={<Signup />} />
//                     <Route path="/login" element={<Login />} />
//                 </Routes>
//             </div>
//         </Router>
//     );
// }

// export default App;






















import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Signup from './components/Signup';
import Login from './components/Login';
import HomePage from './components/HomePage';
import AdminDashboard from './components/AdminDashboard';
import CulturalEnthusiastDashboard from './components/CulturalEnthusiastDashboard';
import ContentCreatorDashboard from './components/ContentCreatorDashboard';
import TourGuideDashboard from './components/TourGuideDashboard';
import Attractions from './components/Attractions';
import Contact from './components/Contact';
import HolidaysCalendar from './components/HolidaysCalendar';
import Festivals from './components/Festivals';
import Uttarakhand from './components/states/Uttarakhand';
import BlogList from './components/BlogList';
import PostBlog from './components/PostBlog';
import RedFort from './components/RedFort';

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/attractions" element={<Attractions />} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="/calendar" element={<HolidaysCalendar/>} />
                    <Route path="/festivals" element={<Festivals/>} />
                    <Route path="/states/Uttarakhand" element={<Uttarakhand/>} />
                    <Route path="/blog" element={<BlogList/>} />
                    <Route path="/blogpost" element={<PostBlog/>} />
                    <Route path="/red-fort" element={<RedFort />} />




                    <Route path="/dashboard/admin" element={<AdminDashboard />} />
                    <Route path="/dashboard/cultural-enthusiast" element={<CulturalEnthusiastDashboard />} />
                    <Route path="/dashboard/content-creator" element={<ContentCreatorDashboard />} />
                    <Route path="/dashboard/tour-guide" element={<TourGuideDashboard />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

