import { useState } from 'react';

const Sidebar = ({ isOpen = true, onToggle }) => {
  const [activeItem, setActiveItem] = useState('prepaid');
  const [expandedSection, setExpandedSection] = useState('recharge');

  const menuSections = [
    {
      id: 'recharge',
      title: 'Recharge Services',
      icon: '📱',
      items: [
        { id: 'prepaid', name: 'Prepaid Recharge', icon: '📲', badge: null },
        { id: 'postpaid', name: 'Postpaid Bill', icon: '📄', badge: null },
        { id: 'dth', name: 'DTH Recharge', icon: '📺', badge: 'Popular' },
        { id: 'broadband', name: 'Broadband', icon: '🌐', badge: null },
        { id: 'landline', name: 'Landline', icon: '☎️', badge: null },
      ],
    },
    {
      id: 'plans',
      title: 'Browse Plans',
      icon: '📋',
      items: [
        { id: 'unlimited', name: 'Unlimited Plans', icon: '♾️', badge: 'Best Value' },
        { id: 'data', name: 'Data Packs', icon: '📊', badge: null },
        { id: 'talktime', name: 'Talktime Plans', icon: '💬', badge: null },
        { id: 'international', name: 'International Roaming', icon: '✈️', badge: null },
        { id: 'validity', name: 'Validity Plans', icon: '📅', badge: null },
      ],
    },
    {
      id: 'offers',
      title: 'Offers & Rewards',
      icon: '🎁',
      items: [
        { id: 'cashback', name: 'Cashback Offers', icon: '💰', badge: 'New' },
        { id: 'coupons', name: 'Promo Codes', icon: '🏷️', badge: '5 Active' },
        { id: 'rewards', name: 'Rewards Points', icon: '⭐', badge: null },
        { id: 'refer', name: 'Refer & Earn', icon: '👥', badge: '₹100' },
      ],
    },
    {
      id: 'account',
      title: 'My Account',
      icon: '👤',
      items: [
        { id: 'profile', name: 'Profile Settings', icon: '⚙️', badge: null },
        { id: 'history', name: 'Transaction History', icon: '📜', badge: null },
        { id: 'saved', name: 'Saved Numbers', icon: '📞', badge: '3' },
        { id: 'autopay', name: 'Auto Pay Setup', icon: '🔄', badge: null },
      ],
    },
  ];

  const quickActions = [
    { id: 'quick-recharge', name: 'Quick Recharge', icon: '⚡', color: '#ED1C24' },
    { id: 'scan-pay', name: 'Scan & Pay', icon: '📷', color: '#2196F3' },
    { id: 'help', name: 'Help Center', icon: '❓', color: '#4CAF50' },
  ];

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
  };

  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'collapsed'}`}>
      {/* Sidebar Header */}
      <div className="sidebar-header">
        <div className="user-profile">
          <div className="user-avatar">
            <span>👤</span>
          </div>
          {isOpen && (
            <div className="user-info">
              <h4>Welcome!</h4>
              <p>Login for best offers</p>
            </div>
          )}
        </div>
        {onToggle && (
          <button className="sidebar-toggle" onClick={onToggle} aria-label="Toggle sidebar">
            {isOpen ? '◀' : '▶'}
          </button>
        )}
      </div>

      {/* Quick Actions */}
      <div className="sidebar-quick-actions">
        {quickActions.map((action) => (
          <button
            key={action.id}
            className="quick-action-btn"
            style={{ '--action-color': action.color }}
            title={action.name}
          >
            <span className="action-icon">{action.icon}</span>
            {isOpen && <span className="action-name">{action.name}</span>}
          </button>
        ))}
      </div>

      {/* Navigation Menu */}
      <nav className="sidebar-nav">
        {menuSections.map((section) => (
          <div key={section.id} className="nav-section">
            <button
              className={`section-header ${expandedSection === section.id ? 'expanded' : ''}`}
              onClick={() => toggleSection(section.id)}
            >
              <span className="section-icon">{section.icon}</span>
              {isOpen && (
                <>
                  <span className="section-title">{section.title}</span>
                  <span className="section-arrow">
                    {expandedSection === section.id ? '▼' : '▶'}
                  </span>
                </>
              )}
            </button>
            
            {isOpen && expandedSection === section.id && (
              <ul className="section-items">
                {section.items.map((item) => (
                  <li key={item.id}>
                    <button
                      className={`nav-item ${activeItem === item.id ? 'active' : ''}`}
                      onClick={() => handleItemClick(item.id)}
                    >
                      <span className="item-icon">{item.icon}</span>
                      <span className="item-name">{item.name}</span>
                      {item.badge && (
                        <span className="item-badge">{item.badge}</span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </nav>

      {/* Sidebar Footer */}
      <div className="sidebar-footer">
        <div className="support-card">
          {isOpen ? (
            <>
              <div className="support-icon">🎧</div>
              <h5>Need Help?</h5>
              <p>24/7 Customer Support</p>
              <a href="tel:121" className="support-link">Call 121</a>
            </>
          ) : (
            <div className="support-icon">🎧</div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
