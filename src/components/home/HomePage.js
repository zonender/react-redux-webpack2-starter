import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Pluralsight Admin</h1>
        <p>Lorum lkjsdf sdfasdf sdfsadf asdfasdf asdfasdf asdfasdf asdfasdf.</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn More Here</Link>
      </div>
    );
  }
}

export default HomePage;
