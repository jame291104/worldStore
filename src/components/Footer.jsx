import React from 'react'
import '../styles/footer.css'


export const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="col1">
                <a href="#"><img className='logo2' src="/img/logo2.png" alt="" /></a>
            </div>
            <div className="col2">
                <ul className="menu">
                   <li><a>Link1</a></li>
                   <li><a>Link2</a></li>
                   <li><a>Link3</a></li>
                   <li><a>Link4</a></li>
                </ul>
            </div>
            <div className="col3">
                <ul className="media-icons">
                    <li>
                        <a href="#">
                          <i className="bi bi-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                           <i className="bi bi-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                           <i className="bi bi-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <i className="bi bi-linkedin"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
  )
}
