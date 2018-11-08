import React from 'react';
import { unstable_createResource as createResource } from 'react-cache';

const imageResource = createResource(src => {
  const img = new Image();
  return new Promise(resolve => {
    img.onload = () => resolve(src);
    img.src = src;
  });
});

export function User(props) {
  const loadedImage = imageResource.read(props.avatar);

  return (
    <div className="user">
      <img src={loadedImage} alt="user-image" />
      <p>
        {props.first_name} {props.last_name}
      </p>
    </div>
  );
}
