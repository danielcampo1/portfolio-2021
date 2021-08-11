import './App.css';
import SideBar from './components/sideBar';
import styled from 'styled-components';


function App() {
  return (
      <div className="main-content">

      <SideBar />

        <MainContentSyled>

        </MainContentSyled>
      </div>
    
  );
}

const MainContentSyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
`;

export default App;
