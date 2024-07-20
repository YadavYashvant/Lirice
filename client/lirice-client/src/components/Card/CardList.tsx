// components/CardList.tsx
import React from 'react';
import Card from './Card';

interface Item {
    title: string;
    description: string;
    image?: string;
}

interface CardListProps {
    data: Item[];
}

const CardList: React.FC<CardListProps> = ({ data }) => {

    return (
        <div className="w-full h-full lg:mt-32">
            {data.map((item, index) => (
                <Card key={index} title={item.title} description={item.description} image={item.image}/>
            ))}
        </div>
    );
};

export default CardList;
