

import React from 'react';
import LikeFunctionality from './LikeFunctionality';

function LikePost({ likeCounter, handleLike }) {
  return (
    <div>
      <button onClick={handleLike}>Like Post {likeCounter}</button>
    </div>
  );
}

export default LikeFunctionality(LikePost);
