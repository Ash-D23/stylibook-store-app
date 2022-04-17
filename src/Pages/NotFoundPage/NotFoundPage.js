import React from 'react';
import './NotFoundPage.css';

function NotFoundPage() {
  return (
    <div className="not-found--container">
        <div className='not-found--content'>
            <img className="" src="/Images/lost.svg" alt="not found" />
            <h2 className="text--center margin--medium">Page Not Found</h2>
        </div>
    </div>
  )
}

export { NotFoundPage }