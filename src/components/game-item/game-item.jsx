import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { GameCover } from '../game-cover';
import { GameBuy } from '../game-buy';
import { GameGenre } from '../game-genre';
import './game-item.css';
import { setCurrentGame } from '../../redux/games/reducer';

export const GameItem = ({ game }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setCurrentGame(game));
    history.push(`/app/${game.title}`);
  };
  return (
    <div className="game-item" onClick={handleClick}>
      <GameCover image={game.image}></GameCover>
      <div className="game-item_details">
        <span className="game-item_title">{game.title}</span>
        <div className="game-item_genre">
          {game.genres.map((genre) => (
            <GameGenre genre={genre} />
          ))}
        </div>
        <div className="game-item_buy">
          <GameBuy game={game} />
        </div>
      </div>
    </div>
  );
};
