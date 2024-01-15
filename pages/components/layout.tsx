import React from "react";

interface LayoutProps {
    title?: string;
    canGoBack?: boolean;
    hasTabBar?: boolean;
    children: React.ReactNode;
}

export default function Layout({title,canGoBack,hasTabBar,children}:LayoutProps) {
    return (
        <div>
            <div className={`bg-white w-full text-lg font-medium py-3 fixed text-gray-700 border-b top-0 flex items-center justify-center`}>
                {title ? <span>{title}</span> : null}
            </div>
            <div className={`pt-16`}>
                {children}
            </div>
            {hasTabBar ? <nav></nav> : null}
        </div>
    );
}