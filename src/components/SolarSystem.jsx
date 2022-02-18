import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    const planets = Planets.map(({ name, image }) => (<PlanetCard
      key={ name }
      planetName={ name }
      planetImage={ image }
    />));

    return (
      <div className="solar-system-container" data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="planet-cards-container">
          {planets}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
