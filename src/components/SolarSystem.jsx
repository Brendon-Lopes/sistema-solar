import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    const planetsList = planets.map(({ name, image }) => (<PlanetCard
      key={ name }
      planetName={ name }
      planetImage={ image }
    />));

    return (
      <div className="solar-system-container" data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="planet-cards-container">
          { planetsList }
        </div>
      </div>
    );
  }
}

export default SolarSystem;
