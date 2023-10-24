import { Helmet } from 'react-helmet';
import './App.css'
import { Outlet } from 'react-router-dom';

function App() {


  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>News Portal || Home</title>
      </Helmet>
      <div className='font-Poppins'>
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default App
