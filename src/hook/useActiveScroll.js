import  { useRef, useEffect } from 'react';


const useActiveScroll = (props) => {
    const anchorRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null, // Utilisez la fenêtre comme conteneur par défaut
            rootMargin: '0px',
            threshold: 0.355, // Lorsque la moitié de l'élément est visible
        };

        const callback = (entries, observer, event) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    let i = document.querySelectorAll('.link--section')
                     i.forEach((index) => {
                        let path = index.href.split('#')[1]
                        entry.target.id === path && 
                        index.classList.add('active')
                    }) 
                    console.log(entry.target.id)

                }
                else{
                    let i = document.querySelectorAll('.link--section')
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
