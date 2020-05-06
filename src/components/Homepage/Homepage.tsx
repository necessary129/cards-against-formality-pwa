import React, { useContext } from 'react';
import { Link, Typography, Container, Button } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import Card from '../Card/Card';
import './Homepage.scss';
import { RouterContext } from '../../Contexts/RouteProvider';
import { ThemeContext } from '../../Contexts/ThemeProvider';

const Homepage = React.memo(() => {
  const { history } = useContext(RouterContext);
  const { name } = useContext(ThemeContext);

  function onPlay() {
    if (history) {
      history.push('/rooms');
    }
  }

  function onWindowOpen(target: string) {
    window.open(target);
  }

  function renderCards() {
    const cards = [
      { cardType: 'black', _id: '1', text: `During my first game of D&amp;D, I accidentally summoned _.`, pick: 1 },
      { cardType: 'white', _id: '2', text: `My inner demons.` }
    ];

    if (name === 'dark') {
      return cards.map((card, i) => <Card key={card._id} className={i === 0 ? 'first-card' : 'second-card'} card={card} />);
    }

    return cards.reverse().map((card, i) => <Card key={card._id} className={i === 0 ? 'first-card' : 'second-card'} card={card} />);
  }

  return <div>
    <section className="homepage-section title">
      <Container maxWidth="md">
        <div className="card-group-wrapper">
          <div className="card-group">
            {renderCards()}
          </div>
        </div>
        <div className="title-container">
          <Typography className="title" variant="h2" style={{ width: 200 }}>
            Cards Against Formality
        </Typography>
          <Typography className="subtitle" variant="h6" style={{ width: 200 }}>
            A terrible card game. For terrible people...
        </Typography>
          <div className="play-button-container">
            <Button className="play-button" variant="contained" color="primary" onClick={onPlay}>Play</Button>
          </div>
        </div>
      </Container>

    </section>
    <section className="homepage-section even about">
      <Container maxWidth="md">
        <Typography className="title" variant="h2" style={{ color: "black" }}>
          About
        </Typography>
        <Typography variant="subtitle1" style={{ color: "black" }}>
          Cards Against Formality is a party card game based on <Link rel="noopener" onClick={() => onWindowOpen('https://cardsagainsthumanity.com/')}>Cards Against Humanity</Link>.
        </Typography>
        <br />
        <Typography variant="body1" style={{ color: "black" }}>
          Click the play button above. Play anonymously, or sign in with your favourite social media. Then proceed to play with your friends and family! Works great on mobile, desktop or tablet!
        </Typography>
        <br />
        <Typography variant="h5" style={{ color: "black" }}>
          How to play.
        </Typography>
        <Typography variant="body1" style={{ color: "black" }}>
          <ul>
            <li> Each player starts with a hand of 10 white cards.</li>
            <li> A black card is chosen at random and displayed to all players.</li>
            <li> The black card will present a number i.e. <span className="pick-option">2</span> Each player must play this number of white cards.</li>
            <li> The first player starts as the Card Czar. Their role is to select their favourite white card as the winner. The winning player receives 1 point!</li>
          </ul>
        </Typography>
      </Container>
    </section>
    <section className="homepage-section footer">
      <div className="link-icons">
        <TwitterIcon className="icon" fontSize="large" onClick={() => onWindowOpen('https://twitter.com/CardsFormality')} />
        <GitHubIcon className="icon" fontSize="large" onClick={() => onWindowOpen('https://github.com/jordanpawlett/cards-against-formality')} />
        <LinkedInIcon className="icon" fontSize="large" onClick={() => onWindowOpen('https://www.linkedin.com/in/jordanpawlett/')} />
      </div>
      <Typography variant="caption">
        To view the privacy and terms of use, click <Link color="secondary" onClick={() => onWindowOpen('https://htmlpreview.github.io/?https://github.com/JordanPawlett/cards-against-formality-pwa/blob/master/public/privacy_policy.html')}>here</Link> and <Link color="secondary" onClick={() => onWindowOpen('https://htmlpreview.github.io/?https://github.com/JordanPawlett/cards-against-formality-pwa/blob/master/public/license.html')}>here</Link>
      </Typography>
    </section>
  </div >;
});

export default Homepage;
