import React from 'react';

export const FlagPE = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 900 600"
        className={className}
    >
        <rect fill="#D91023" width="900" height="600" />
        <rect fill="#FFF" x="300" width="300" height="600" />
    </svg>
);

export const FlagUS = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 7410 3900"
        className={className}
    >
        <rect width="7410" height="3900" fill="#B22234" />
        <path d="M0,450H7410M0,1350H7410M0,2250H7410M0,3150H7410" stroke="#FFF" strokeWidth="300" />
        <rect width="2964" height="2100" fill="#3C3B6E" />
        <g fill="#FFF">
            <g id="s18">
                <g id="s9">
                    <g id="s5">
                        <g id="s4">
                            <path id="s" d="M247,90 317,305 88,138 369,138 140,305z" />
                            <use href="#s" x="494" />
                            <use href="#s" x="988" />
                            <use href="#s" x="1482" />
                            <use href="#s" x="1976" />
                        </g>
                        <use href="#s" x="247" y="190" />
                        <use href="#s4" y="380" />
                    </g>
                    <use href="#s5" y="760" />
                    <use href="#s9" y="1520" />
                </g>
                <use href="#s18" y="190" />
                <use href="#s9" y="1140" />
                <use href="#s5" y="1520" />
                <use href="#s" x="247" y="1710" />
            </g>
        </g>
    </svg>
);
