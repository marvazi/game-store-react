import React from 'react';
import { useSelector } from 'react-redux';
import { GameBuy } from '../../components/game-buy';
import { GameCover } from '../../components/game-cover';
import './game-page.css';
import { GameGenre } from '../../components/game-genre';
export const GamePage = () => {
  const game = useSelector((state) => state.game.currentGame);
  if (!game) return null;
  return (
    <div className="game-page">
      <h1 className="game-page_title">{game.title}</h1>
      <div className="game-page_content">
        <div className="game-page_left">
          <iframe
            src={game.video}
            frameborder="0"
            width="90%"
            height="400px"
            title="Yotube Video Player"
          ></iframe>
        </div>
        <div className="game-page_right">
          <GameCover image={game.image} />
          <p>{game.description}</p>
          <p className="secondary-text">Популярные метки этого продукта:</p>
          {game.genres.map((genre) => (
            <GameGenre genre={genre} />
          ))}
          <div className="game-page_buy-game">
            <GameBuy game={game} />
          </div>
        </div>
      </div>
    </div>
  );
};
