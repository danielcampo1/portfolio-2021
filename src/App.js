import './App.css';
import SideBar from './components/sideBar';
import styled from 'styled-components';
import HomePage from './pages/homePage';


function App() {
  return (
      <div className="main-content">

      <SideBar />

        <MainContentSyled>
          <div className="lines">
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="line-3"></div>
            <div className="line-4"></div>
          </div>

        <HomePage />

        </MainContentSyled>
      </div>
    
  );
}

const MainContentSyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;

  .lines{
    position: absolute;
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    .line-1, .line-2, .line-3, .line-4{
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`;

export default App;
