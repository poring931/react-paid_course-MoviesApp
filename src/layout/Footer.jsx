import React from 'react'

export const Footer = () => {
    return (
         <footer className="page-footer  brown lighten-1">
    
          <div className="footer-copyright">
            <div className="container">
            © {new Date().getFullYear()} Copyright Text
            <a className="grey-text text-lighten-4 right" target="_blank" href="https://github.com/poring931/react-paid_course-MoviesApp">Ссылка на репозиторий</a>
            </div>
          </div>
        </footer>
    )
}
