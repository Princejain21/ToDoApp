import React from 'react'
import style from './Nav.module.css'

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-dark ">
    <a class="navbar-brand text-white hello" href="#f">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class={`navbar-nav ${style.ram}`}>
        <a class="nav-item nav-link text-white" href="#f">Home <span class="sr-only">(current)</span></a>
        <a class="nav-item nav-link text-white" href="#f">Features</a>
        <a class="nav-item nav-link text-white" href="#f">Pricing</a>
      </div>
    </div>
  </nav>
  )
}
