
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Component/Pages/HomePage/Home/Home';
import AuthProvider from './Component/Context/AuthProvider';
import Login from './Component/Pages/Form/Login/Login';
import Register from './Component/Pages/Form/Register/Register';
import NotFound from './Component/Pages/NotFound/NotFound';
import Header from './Component/Pages/HomePage/Header/Header';
import Footer from './Component/Pages/Footer/Footer';
import Order from './Component/Pages/Dashboard/Order/Order';
import Payment from './Component/Pages/Dashboard/Payment/Payment';
import MakeAdmin from './Component/Pages/Dashboard/MakeAdmin/MakeAdmin';
import UserDashBoard from './Component/Pages/Dashboard/UserDashBoard/UserDashBoard';
import PrivetRoute from './Component/SecureRoute/PrivetRoute/PrivetRoute';
import AdminRoute from './Component/SecureRoute/AdminRoute/AdminRoute';
import Dashboard from './Component/Pages/Dashboard/Dashboard/Dashboard';
import TestimonialForm from './Component/Pages/Form/TestimonialForm/TestimonialForm';
import Profile from './Component/Pages/Dashboard/Profile/Profile';
import OrderPage from './Component/Pages/Dashboard/OrderPage/OrderPage';
import About from './Component/Pages/About/About';
import Projects from './Component/Pages/Projects/Projects';

function App() {
  return (
    <div className="App">
     <AuthProvider>
        <BrowserRouter>
        <Header></Header>
          <Routes>
          <Route  path="/dashBoard" element={<UserDashBoard />}>
            <Route  exact path="/dashBoard" element={<PrivetRoute><Dashboard/></PrivetRoute>}/>
            <Route path="/dashBoard/profile" element={<PrivetRoute><Profile /></PrivetRoute>}/>
            <Route  path="/dashBoard/payment/:id" element={<PrivetRoute><Payment /></PrivetRoute>}/>
            <Route  path="/dashBoard/myorder" element={<Order/>}/>
            <Route  path="/dashBoard/testimonialForm" element={<TestimonialForm />}/> 
            <Route  path="/dashBoard/makeAdmin" element={<AdminRoute><MakeAdmin/></AdminRoute>}/>
              </Route>

         
            <Route path="/home" element={<Home/>} />

            <Route path="/project" element={<Projects/>} />

            <Route  path="/about" element={<PrivetRoute><About /></PrivetRoute>}/>

            <Route path="/orderPage/:id" element={<OrderPage/>} />

            <Route path="/login" element={<Login/>} />

            <Route path="/register" element={<Register/>} />
            
            <Route exact path="/" element={<Home/>} />

            <Route path="*" element={<NotFound/>} />
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
