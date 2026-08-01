import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import HomePage from './pages/HomePage';
import SetupPage from './pages/SetupPage';

const AppContainer = styled.div`
  min-height: 100vh;
  background: #f8f9fa;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  padding: 1rem 2rem;

  background: #1f2937;
`;

const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #374151;
  }

  &.active {
    background-color: #2563eb;
  }
`;

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Navigation>
          <StyledLink to="/" end>
            Home
          </StyledLink>

          <StyledLink to="/setup">Developer Setup</StyledLink>
        </Navigation>

        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/setup" element={<SetupPage />} />
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
