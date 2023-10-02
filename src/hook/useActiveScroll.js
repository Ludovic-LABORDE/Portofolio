import  { useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export const useActiveScroll = (props) => {
    const anchorRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const options = {
            root: null, // Utilisez la fenêtre comme conteneur par défaut
            rootMargin: '0px',
            threshold: .4, // Configuration du scroll
        };

        const callback = (entries, observer, event) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    let i = document.querySelectorAll('.link--section')
                    let j = document.querySelector(`#${entry.target.id}`).firstChild
                    options.threshold === 0.51 && navigate(`#${entry.target.id}`)
                    j.classList.add('active')

                    i.forEach((index) => {

                        let path = index.href.split('#')[1]
                        entry.target.id === path && 
                        index.classList.add('active')
                    }) 
                }
                else{
                    let i = document.querySelectorAll('.link--section')

                    i.forEach((index) => {
                       let path = index.href.split('#')[1]
                       entry.target.id === path && 
                       index.classList.remove('active')
                   }) 
                }
            });
        };

        const observer = new IntersectionObserver(callback, options);

        if (anchorRef.current) {
            observer.observe(anchorRef.current);
        }

        return () => {
            if (anchorRef.current) {
                observer.unobserve(anchorRef.current);
            }
        };
    }, []);

    return anchorRef;
};
