
import React from 'react';
import LikeFunctionality from './LikeFunctionality';

function LikeImage({ likeCounter, handleLike }) {
  return (
    <div>
      <button onClick={handleLike}>Like Image {likeCounter}</button>
    </div>
  );
}

export default LikeFunctionality(LikeImage);