import React, { useState } from 'react';

const LikeFunctionality = (Component) => {
  return function LikeFunctionality(props) {
    const [likeCounter, setLikeCounter] = useState(0);

    const handleLike = () => {
      setLikeCounter(likeCounter + 1);
    };

    return <Component likeCounter={likeCounter} handleLike={handleLike} {...props} />;
  };
};

export default LikeFunctionality;