import React from 'react';
import { Menu, Button } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { openModal } from '../../app/common/modals/modalReducer';
export default function SignedOutMenu({setAuthenticated}) {
  const dispatch = useDispatch();
  return (
    <Menu.Item position='right'>
      <Button onClick={() => dispatch(openModal({modalType: 'LoginForm'}))} basic inverted content='Zaloguj' />
      <Button
      onClick={() => dispatch(openModal({modalType: 'RegisterForm'}))}
        basic
        inverted
        content='Zarejestruj'
        style={{ marginLeft: '0.5em' }}
      />
    </Menu.Item>
  );
}