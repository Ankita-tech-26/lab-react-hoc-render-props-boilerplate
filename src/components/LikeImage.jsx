// import React, { useState } from 'react'

// export default function LikeImage() {

//   const [likeImageCounter, setLikeImageCounter] = useState(0);

//   const handleLikeImageCount = ()=>{
//     setLikeImageCounter(likeImageCounter+1);
//   }

//   return (
//     <div>
//       <button onClick={handleLikeImageCount}>Like Image {likeImageCounter}</button>
//     </div>
//   )
// }
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