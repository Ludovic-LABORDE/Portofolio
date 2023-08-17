import  { useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const useActiveScroll = (props) => {
    const anchorRef = useRef(null);
    const naviguate = useNavigate();

    useEffect(() => {
        const options = {
            root: null, // Utilisez la fenêtre comme conteneur par défaut
            rootMargin: '0px',
            threshold: .4, // Lorsque la moitié de l'élément est visible
        };

        const callback = (entries, observer, event) => {
            console.log(observer)
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    let i = document.querySelectorAll('.link--section')
                    let j = document.querySelector(`#${entry.target.id}`)
                    options.threshold === 0.51 && naviguate(`#${entry.target.id}`)
                    j.classList.add('active')
                     i.forEach((index) => {
                        let path = index.href.split('#')[1]
                        entry.target.id === path && 
                        index.classList.add('active')
                    }) 
                    // console.log(entry.target.id)

                }
                else{
                    let i = document.querySelectorAll('.link--section')
                    let j = document.querySelector(`#${entry.target.id}`)
                    j.classList.remove('active')
                    i.forEach((index) => {
                       let path = index.href.split('#')[1]
                       entry.target.id === path && 
                       index.classList.remove('active')
                   }) 
                   console.log(entry.target.id)
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

export default useActiveScroll;
