import logo from './logo.svg';
import './App.css';
import  {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Login from "./Component/Login/login";
import HomePage from "./Component/Home/homePage";
import NoPageFound from "./Component/NoPageFound/noPageFound";

function App() {
  return (
      /**
       * Routing Define
       */
      <Router> {/* Browser*/}
            <Routes> {/* Url*/}
                <Route path="/" element={<HomePage/>} />
                <Route path={'/login'} element={<Login/>}/> {/* Page*/}

                {/*HOMEWORK
                Create a register page

                NAME, EMAIL,PhoneNumber, Password,ConfirmPassword

                Insert Data to localstorage -> navigate to home page

                Home Page-> show the name and email of the person

                */}


                <Route path="*" element={<NoPageFound/>}/> {/* ANY PAGE THAT DOESN'T EXISTS*/}
            </Routes>
      </Router>
  );
}

export default App;
