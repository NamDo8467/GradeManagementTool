import React from 'react'

function Logout() {
    const handleLogout = () => {
    
    window.location.reload();
        localStorage.clear();
        window.location.replace('/')
  };
    return (
        <div>
            <button style={{fontSize:'large', width: '100px'}} onClick={handleLogout}>Log out</button>
        </div>
    )
}

export default Logout




