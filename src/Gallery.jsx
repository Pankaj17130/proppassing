// src/App.js
import React from 'react';
import Profile from './Profile';
import { getImageUrl } from './Utils.jsx';

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        name="Maria Skłodowska-Curie"
        imageUrl="https://www.asiaresearchnews.com/sites/default/files/styles/large/public/images/saruhashi_nukada_1.jpg?itok=UnJBSk4D"
        profession="physicist and chemist"
        awards={[
          'Nobel Prize in Physics',
          'Nobel Prize in Chemistry',
          'Davy Medal',
          'Matteucci Medal'
        ]}
        discovery="polonium (chemical element)"
      />
      <Profile
        name="Katsuko Saruhashi"
        imageUrl="https://plus.unsplash.com/premium_photo-1676637000058-96549206fe71?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        profession="geochemist"
        awards={['Miyake Prize for geochemistry', 'Tanaka Prize']}
        discovery="a method for measuring carbon dioxide in seawater"
      />
    </div>
  );
}
