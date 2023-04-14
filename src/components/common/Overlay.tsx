import React from "react";

interface OverlayProps {
    children: React.ReactNode;
    extraClasses?: string;
}

const Overlay: React.FC<OverlayProps> = ({ children, extraClasses }) => {
    return (
        <div
            className={`bg-black bg-opacity-50 h-screen w-full ${extraClasses}`}
        >
            {children}
        </div>
    );
};

export default Overlay;
