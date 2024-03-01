import { useState, useEffect } from 'preact/hooks';

interface Breakpoint {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
    desktopXl: boolean
}

const useBreakpoint = (): Breakpoint => {
    const [breakpoint, setBreakpoint] = useState<Breakpoint>({
        mobile: false,
        tablet: false,
        desktop: false,
        desktopXl: false
    });

    useEffect(() => {
        const handleResize = () => {
            const mobileMediaQuery = window.matchMedia('(max-width: 767px)');
            const tabletMediaQuery = window.matchMedia('(min-width: 768px) and (max-width: 1023px)');
            const desktopMediaQuery = window.matchMedia('(min-width: 1024px) and (max-width: 1279px)');
            const xlScreenQuery = window.matchMedia('(min-width:1280px')

            setBreakpoint({
                mobile: mobileMediaQuery.matches,
                tablet: tabletMediaQuery.matches,
                desktop: desktopMediaQuery.matches,
                desktopXl: xlScreenQuery.matches
            });

        };

        // Initial setup
        handleResize();

        // Attach event listener
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return breakpoint
};

export default useBreakpoint;
