
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './screen/home/Home';
import './assets/css/style.css';
import './assets/css/Star.css';
import './assets/css/Custom.css'
import './assets/css/vendor/vendor.min.css'
import Footer from './componets/footer/Footer';
import Header from './componets/header/Header';
import './config/Fonts.css'
import About from './screen/about/About';
// import OurServices from './screen/services/OurServices';
import Contact from './screen/contact/Contact';
import NotFound from './screen/NotFound';
import AndroidApp from './screen/singleServices/AndroidApp';
import MobileAppDevelopment from './screen/serviceFirstChild/MobileAppDevelopment';
import WebDevelopment from './screen/serviceFirstChild/WebDevelopment';
import AddMobileApp from './screen/CRUDMobileApp/AddMobileApp';
import ListMobileApp from './screen/CRUDMobileApp/ListMobileApp';
import EditMobileApp from './screen/CRUDMobileApp/EditMobileApp';
import ViewDevelopedMobileApp from './screen/ViewDevelopedMobileApp/ViewDevelopedMobileApp';
import ViewDevelopedWeb from './screen/ViewDevelopedWeb/ViewDevelopedWeb';
import ListWebApp from './screen/CRUDWebApp/ListWebApp';
import AddWebApp from './screen/CRUDWebApp/AddWebApp';
import EditWebApp from './screen/CRUDWebApp/EditWebApp';
import ManualTesting from './screen/manualTesting/ManualTesting';



function App() {

  return (
    <>
      <Router>
        <Header />
        {/* <div className="main-wrapper" style={{paddingBottom: 400, zIndex:11}}> */}
        <Switch>
          <Route exact path='/'  component={Home} />
          <Route exact path='/about'  component={About} />
          {/* <Route exact path='/OurServices'  component={OurServices} /> */}
          <Route exact path='/Contact'  component={Contact} />
          <Route exact path='/AndroidApp'  component={AndroidApp} />
          <Route exact path='/MobileAppDevelopment'  component={MobileAppDevelopment} />
          <Route exact path='/WebDevelopment'  component={WebDevelopment} />
          <Route exact path='/ViewDevelopedMobileApp/:id'  component={ViewDevelopedMobileApp} />
          <Route exact path='/ViewDevelopedWeb/:id'  component={ViewDevelopedWeb} />
          {/* Mobiel App Crud */}
          <Route exact path='/ListMobileApp'  component={ListMobileApp} />
          <Route exact path='/AddMobileApp/add'  component={AddMobileApp} />
          <Route exact path='/EditMobileApp/edit/:id'  component={EditMobileApp} />
          {/* Web App Crud */}
          <Route exact path='/ListWebApp'  component={ListWebApp} />
          <Route exact path='/AddWebApp/add'  component={AddWebApp} />
          <Route exact path='/EditWebApp/edit/:id'  component={EditWebApp} />
          {/* ManualTesting */}
          <Route exact path='/ManualTesting'  component={ManualTesting} />

          <Route exact component={NotFound} />
        </Switch>
        <Footer />
        {/* </div> */}
       
      </Router>
    </>
  )  
}

export default App;
