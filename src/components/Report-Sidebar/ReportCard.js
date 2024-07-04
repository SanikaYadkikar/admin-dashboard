import React from 'react';
import "../../dist/css/ReportCard.css"; // Importing CSS for styling the ReportCard component

const ReportCard = () => {
  return (
    <div className="report-card"> {/* Main container for the report card */}
      <div className="report-card-container"> {/* First section of the report card */}
        <div className="report-card-profile"> {/* Profile section */}
          <div className="report-card-profile-text-wrap"> {/* Wrapper for profile icon and text */}
            <img className="profile-icon" src='https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1720122407~exp=1720123007~hmac=bc84e6d1d5463e9b7fdce5e407c0d18069f56992d7eab0b295988df546ad6c14' alt='profile'> 
            </img> {/* Placeholder for profile icon */}
            <div className="report-text"> {/* Wrapper for profile name and username */}
              <h5 className='report-text-name'>Name</h5> {/* Profile name */}
              <h6 className='report-text-username'>@username</h6> {/* Profile username */}
            </div>
          </div>
        </div>
        
        <div className="report-card-alert"> {/* Alert section */}
          <div className="report-card-alert-wrap"> {/* Wrapper for alert text */}
            <h5 className='report-card-alert-text'>Report</h5> {/* Alert text */}
          </div>
        </div>
        
      </div>
      <div className="report-card-desc"> {/* Second section of the report card */}
        <p className='report-card-message'>Report Msg, only first 30 characters.</p> {/* Report message */}
      </div>
    </div>
  );
}

export default ReportCard; // Exporting the ReportCard component as default
