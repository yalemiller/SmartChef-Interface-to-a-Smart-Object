import CookingMode from './Components/CookingMode.jsx';
import SelectionPage from './Components/SelectionPage.jsx';
import Body from './Components/Body.jsx';
import Cookfriend from '../public/CookFriend.jpg';
import Menu from "./Components/Menu/Menu.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MenuProvider } from './Components/MenuContext';

function App() {

  const imageStyle = {
    width: '88%',
    height: '88%',
    objectFit: 'cover',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  return (
    <MenuProvider>
    <div>
      <img src={Cookfriend} alt="CookFriend" style={imageStyle} />
      <Body>
        <BrowserRouter>
          <Routes>
            <Route index element={<Menu />} />
            <Route path="/Menu" element={<Menu />} />
            <Route path="/SelectionPage" element={<SelectionPage />} />
            <Route path="/CookingMode" element={<CookingMode />} />
          </Routes>
        </BrowserRouter>
      </Body>
    </div>
    </MenuProvider>
);
}

export default App;
