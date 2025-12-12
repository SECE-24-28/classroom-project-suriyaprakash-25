import React, { createContext, useContext, useState } from 'react';

// Create the context
const AppContext = createContext();

// Custom hook to use the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

// Context Provider Component
export const AppProvider = ({ children }) => {
  // Theme state (light/dark mode)
  const [theme, setTheme] = useState('light');
  
  // User state
  const [user, setUser] = useState({
    name: '',
    phoneNumber: '',
    isLoggedIn: false,
  });
  
  // Recharge state
  const [rechargeHistory, setRechargeHistory] = useState([]);
  
  // Cart state
  const [cart, setCart] = useState([]);
  
  // Notification state
  const [notifications, setNotifications] = useState([]);

  // Toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Login user
  const login = (name, phoneNumber) => {
    setUser({ name, phoneNumber, isLoggedIn: true });
    addNotification('Successfully logged in!', 'success');
  };

  // Logout user
  const logout = () => {
    setUser({ name: '', phoneNumber: '', isLoggedIn: false });
    setRechargeHistory([]);
    setCart([]);
    addNotification('Logged out successfully', 'info');
  };

  // Add to recharge history
  const addRecharge = (recharge) => {
    const newRecharge = {
      ...recharge,
      id: Date.now(),
      date: new Date().toISOString(),
    };
    setRechargeHistory((prev) => [newRecharge, ...prev]);
    addNotification('Recharge successful!', 'success');
  };

  // Add to cart
  const addToCart = (item) => {
    setCart((prev) => [...prev, { ...item, id: Date.now() }]);
    addNotification('Added to cart', 'success');
  };

  // Remove from cart
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
    addNotification('Removed from cart', 'info');
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
  };

  // Add notification
  const addNotification = (message, type = 'info') => {
    const notification = {
      id: Date.now(),
      message,
      type,
      timestamp: new Date().toISOString(),
    };
    setNotifications((prev) => [...prev, notification]);
    
    // Auto remove notification after 5 seconds
    setTimeout(() => {
      removeNotification(notification.id);
    }, 5000);
  };

  // Remove notification
  const removeNotification = (id) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id));
  };

  const value = {
    theme,
    toggleTheme,
    user,
    login,
    logout,
    rechargeHistory,
    addRecharge,
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    notifications,
    addNotification,
    removeNotification,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
