import React from 'react';
import { unstable_createResource as createResource } from 'react-cache';
import { User } from './User';

const usersResource = createResource(async () => {
  const response = await fetch('https://reqres.in/api/users');
  await new Promise(resolve => setTimeout(resolve, 2000)); // Add 2s delay
  const body = await response.json();
  return body.data;
});

export default function Users() {
  const users = usersResource.read();

  return users.map((userProps, i) => <User key={i} {...userProps} />);
}
