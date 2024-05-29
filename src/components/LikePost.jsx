// import React, { useState } from 'react'

// export default function LikePost() {

//   const [likePostCounter, setPostCounter] = useState(0);

//   const handlePostCount = ()=>{
//     setPostCounter(likePostCounter+1);
//   }

//   return (
//     <div>
//       <button onClick={handlePostCount}>Like Post {likePostCounter}</button>
//     </div>
//   )
// }

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
