import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Header(props) {

  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>

            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <div id="blue" onClick={() => props.toggleMode("blue")}>

            </div>
            <div id="grey" onClick={() => props.toggleMode('grey')}>

            </div>
            <div id="cyan" onClick={() => props.toggleMode('cyan')}>

            </div>
            <div id="light" onClick={() => props.toggleMode('light')}>

            </div>
            <div id="dark" onClick={() => props.toggleMode('dark')}>

            </div>

            {/* <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.modeText} Mode</label>
            </div> */}
          </div>
        </div>
      </nav>
    </div>
  )
}
Header.defaultProps = {
  title: "Title"
}
Header.propTypes = {
  title: PropTypes.string.isRequired,
}