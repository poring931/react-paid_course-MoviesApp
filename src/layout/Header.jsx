import React from 'react'

export const Header = () => {
    return (
    <nav className="amber darken-1">
        <div className="nav-wrapper">
        <a href="#" className="brand-logo center"><span> <img src="/movie_svg.svg" alt="" /> React-Movies</span></a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li><a target="_blank" href="https://github.com/poring931/react-paid_course-MoviesApp">Ссылка на репозиторий</a></li>
           
        </ul>
        </div>
    </nav>
    )
}
