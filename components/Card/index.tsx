import { Pane } from '@moai/core';
import React from 'react';

interface HeaderProps {
    title: string;
    description: string;
}

const Card = ({ title, description }: HeaderProps) => {
    return (
        <div className="mb-2">
            <Pane>
                <div>
                    {title}
                </div>
                <div>
                    {description}
                </div>
            </Pane>
        </div>
    )
}

Card.defaultProps = {
    title: "TECH development",
    description: "This can setup a seminar for you and your team",
};

export default Card;
