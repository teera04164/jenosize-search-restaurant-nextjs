import React from 'react'
import TextAddress from './TextAddress';
import CardContentRating from './CardContentRating';
import CardTitile from './CardTitile';
import CardLayout from './CardLayout';
import Photo from './Photo';
import CardLayoutContent from './CardLayoutContent';
import CardBoxContainer from './CardBoxContainer';


function RestuarantItem({ name, address, rating, totalRating, photo, place_id }) {
    const onClickName = () => {
        window.open(`https://www.google.com/maps/search/?api=1&query=Google&query_place_id=${place_id}`);
    }
    return (
        <CardLayout>
            <Photo
                url={photo}
                name={name}
            />
            <CardLayoutContent>
                <CardTitile
                    name={name}
                    onClickName={onClickName}
                />
                <CardBoxContainer>
                    <CardContentRating
                        rating={rating}
                        totalRating={totalRating}
                    />
                    <TextAddress
                        address={address}
                    />
                </CardBoxContainer>
            </CardLayoutContent>
        </CardLayout >
    );
}
export default RestuarantItem
