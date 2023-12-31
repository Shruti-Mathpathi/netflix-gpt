import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  const user = useSelector(store => store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    })

    return () => unsubscribe();
  }, []);

  const handleGptSearchClick= () => {
      dispatch(toggleGptSearchView());
  }

  return (
    <div className='absolute flex justify-between w-screen px-8 py-2 bg-gradient-to-b from-black z-10'>
      <img className='w-44' src={LOGO}
        alt='logo' />
      {user &&
        <div className='flex p-2'>
          <button className='bg-purple-500 text-white py-2 px-4 mx-4 rounded-lg my-2'
          onClick={handleGptSearchClick}>{showGptSearch ? 'Homepage' : 'GPT Search'}</button>
          <img alt='userIcon' className='w-12 h-12' src={user?.photoURL} />
          <button className='font-bold text-white' onClick={handleSignOut}>Sign out</button>
        </div>}
    </div>
  )
}

export default Header