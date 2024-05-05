"use client";
import React, { ReactElement, ReactNode, useState } from 'react';
import TabItem from './tab-item';

interface TabBarProps {
    children: ReactNode;
}

const TabBar: React.FC<TabBarProps> = ({ children }) => {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <>
            <div className={`grid grid-cols-${React.Children.map(children, (child, index) => child)?.length}`}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child as React.ReactElement<any>, {
                        isActive: index === activeTab,
                        setActiveTab: () => setActiveTab(index)
                    });
                })}
            </div>

            <div className='transition-all duration-500'>
                {
                    React.Children.map(children, (child: ReactNode, index: number) => {
                        if(index == activeTab){
                            return <div>{ (child as ReactElement).props.children }</div>
                        }else{
                            return null;
                        }
                    })
                }
            </div>

        </>
    )
}

export default TabBar

