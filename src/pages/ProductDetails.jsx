import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';

export default function ProductDetails() {
  const { id } = useParams();
  return (
    <>
      <NavBar />
      <section className="container mt-4">
        Product Detail
        {' '}
        {id}
      </section>
    </>
  );
}
