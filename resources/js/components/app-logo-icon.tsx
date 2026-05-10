import type { SVGAttributes } from 'react';

export default function AppLogoIcon(props: SVGAttributes<SVGElement>) {
    return (
        <img
            src="/kanglwlogo.png"
            alt="Bubur Ayam Kang LW Logo"
            {...props}
        />
    );
}
