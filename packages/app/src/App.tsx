import { AuthProvider, useAuthContext } from '@repo/authorization';
import { Button, useCounter } from '@repo/core';
import './App.css';

function AppContent() {
  const { isAuthenticated, user, login, logout } = useAuthContext();
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div className="app">
      <h1>React + TypeScript Monorepo</h1>
      
      <div className="card">
        <h2>Authorization Demo</h2>
        {isAuthenticated ? (
          <div>
            <p>Welcome, {user}!</p>
            <Button onClick={logout} variant="danger">
              Logout
            </Button>
          </div>
        ) : (
          <Button onClick={() => login('John Doe')} variant="primary">
            Login
          </Button>
        )}
      </div>

      <div className="card">
        <h2>Counter Demo</h2>
        <p>Count: {count}</p>
        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
          <Button onClick={increment} variant="primary">
            Increment
          </Button>
          <Button onClick={decrement} variant="secondary">
            Decrement
          </Button>
          <Button onClick={reset} variant="danger">
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
