import { CustomBanner } from './components/banners/CustomBanner';
import { NavBar } from './components/navbar/NavBar';
import { Task } from './components/tasks/Task';
import './styles/index.css';



const App = () => {
 
  
  return (
    <>
        <NavBar />
        <CustomBanner />
        <Task />
    </>
  );
}

export default App
