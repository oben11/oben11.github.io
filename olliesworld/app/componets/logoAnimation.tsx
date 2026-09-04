import { createScope, utils, animate, splitText, stagger} from "animejs";
import { HmrTarget } from "next/dist/build/swc";
import { useEffect, useRef } from "react";

const LogoAnimation = () => {
    const root = useRef<HTMLDivElement>(null);
    const scope = useRef<ReturnType<typeof createScope> | null>(null);

    useEffect(() => {
        scope.current = createScope({ root }).add(() => {
            
            const $title = utils.$(".title");
            const { chars } = splitText($title, {chars: true});
            animate(chars, {
                y: [
                    { to: '-5px', ease:'inBounce'},
                    { to: '0px' },
                ],
                duration: 300,
                ease: 'out',
                delay: stagger(30),
                loop: true,
                loopDelay: 3000,
            });
        });
    }, []);

    return (
        <div ref={root}>
            <div className="title flex flex-col items-center gap-6 text-center sm:text-left font-modak text-8xl">Ollie</div>
        </div>
    );
};

export default LogoAnimation;