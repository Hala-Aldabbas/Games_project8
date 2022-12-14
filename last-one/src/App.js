import React from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import SimpleReactLightbox from "simple-react-lightbox";
import Container from '@material-ui/core/Container';
import GamesContextProvider from './context/GamesContext';
import GamesDetailsContextProvider from './context/GameDetailsContext';
import GenresContextProvider from './context/GenresContext';
import GenreDetailContextProvider from './context/GenreDetailContext';
import PlatformsContextProvider from './context/PlatformsContext';
import PlatformDetailContextProvider from './context/PlatformDetailContext'
import PublishersContextProvider from './context/PublishersContext';
import PublisherDetailContextProvider from './context/PublisherDetailContext'
import Header from './components/Common/Layout/Header.component';
import GameDetails from './pages/Games/GameDetails.component';
import Genres from './pages/Games/Genres.component';
import GenreDetail from './pages/Games/GenreDetail.component';
import Platforms from './pages/Games/Platforms.component';
import PlatformDetail from './pages/Games/PlatformDetail.component';
import Publishers from './pages/Games/Publishers.component';
import PublisherDetail from './pages/Games/PublisherDetail.component';
import Footer from './components/Common/Layout/Footer.component';
import Register from './pages/register/Register';
import Login from './pages/Login/Login';
import "./App.css";
import Landing from './Landing';
import HomePage from './pages/Games/HomePage.component'
import Dashbord from './Dashbord'
import Userprofile from './pages/Userprofile';

import Posts from "./Admindashbord/Posts";
import AddUser from './Admindashbord/AddUser'
import AdminProfile from "./Admindashbord/AdminProfile";

import Comments from "./Admindashbord/Comments";
import EditUser from "./Admindashbord/EditUser";
import PendingPosts from "./Admindashbord/PendingPosts";
import Users from "./Admindashbord/Users";
import EditComment from './Admindashbord/EditComment';

import About from './About';
const App = () => (
  <>  
  <BrowserRouter> 
      <Header />
   <Switch >

   <Route exact path='/Dashbord'>
        <Dashbord/>
      </Route> 
 
  
  <Route exact path='/Userprofile'>
        <Userprofile/>
      </Route> 
  
    <Route exact path='/Register'>
        <Register/>
      </Route> 
       
          <Route exact path='/About'>
        <About/>
      </Route> 
          

      <Route exact path='/Login'>
        <Login/>
      </Route> 

    <Container maxWidth="lg" className="main-container">
 
  
        <Route exact path='/'>
          <GamesContextProvider>
            <Landing />
          </GamesContextProvider>
        </Route>

        <Route exact path='/HomePage'>
          <GamesContextProvider>
            <HomePage />
          </GamesContextProvider>
  
        </Route>
        <Route path='/games/details/:id'>
          <SimpleReactLightbox>
            <GamesDetailsContextProvider>
              <GameDetails />
            </GamesDetailsContextProvider>
          </SimpleReactLightbox>
        </Route>
        <Route exact path='/genres'>
          <GenresContextProvider>
            <Genres />
          </GenresContextProvider>
        </Route>
        <Route path='/genres/:id'>
          <GenreDetailContextProvider>
            <GenreDetail />
          </GenreDetailContextProvider>
        </Route>
        <Route exact path='/platforms'>
          <PlatformsContextProvider>
            <Platforms />
          </PlatformsContextProvider>
        </Route>
        <Route path='/platforms/:id'>
          <PlatformDetailContextProvider>
            <PlatformDetail />
          </PlatformDetailContextProvider>
        </Route>
        <Route exact path='/publishers'>
          <PublishersContextProvider>
            <Publishers />
          </PublishersContextProvider>
        </Route>
        <Route path='/publishers/:id'>
          <PublisherDetailContextProvider>
            <PublisherDetail />
          </PublisherDetailContextProvider>
        </Route>

        <BrowserRouter>
    

    <Route exact path='/users'>
    <Users />
    </Route>
    <Route exact path='/addUser'>
    <AddUser />
    </Route>
    <Route path='/edituser/:id'>
    <EditUser />
    </Route>
    <Route path='/Posts'>
    <Posts />
    </Route>
    <Route path='/Comments'>
    <Comments />
    </Route>
    <Route path='/EditComment:id'>
    <EditComment />
    </Route>
    <Route exact path='/adminProfile'>
  <AdminProfile />
    </Route>
    <Route path='/pendingPosts'>
   <PendingPosts />
    </Route>

    


</BrowserRouter>
        
      
    </Container>
</Switch>
    <Footer /> 

  </BrowserRouter>
  </>
)

export default App;
