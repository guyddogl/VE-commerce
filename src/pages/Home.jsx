import React from 'react';
import NavBar from '../components/NavBar';
import ListOfProducts from '../components/ListOfProducts';

export default function Home() {
  return (
    <>
      <NavBar />
      <section className="container mt-4">
        <ListOfProducts limit={10} />
      </section>
    </>
  );
}
