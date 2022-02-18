import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    const misList = missions.map(({ name, year, country, destination }) => (<MissionCard
      key={ name }
      name={ name }
      year={ year }
      country={ country }
      destination={ destination }
    />));
    return (
      <div className="missions-container" data-testid="missions">
        <Title headline="Missões" />
        <div className="mission-card-container">
          { misList }
        </div>
      </div>
    );
  }
}

export default Missions;
