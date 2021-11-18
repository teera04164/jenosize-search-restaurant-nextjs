import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';

import RestuarantItem from './RestuarantItem';
import { useGlobalContext } from '../contexts/GlobalContext';
import { baseUrl } from '../API';

const defaultUrlImage = 'img/default-img.gif'

function RestuarantList() {
    const [dataList, setDataList] = useState([])
    const { resultSearch } = useGlobalContext()

    useEffect(() => {
        initial()
    }, [resultSearch])

    const initial = () => {
        const { results = [] } = resultSearch || {}
        let data = results.map(ele => {
            const { name, photos = [{}], rating, user_ratings_total, formatted_address, place_id } = ele
            const photosUrl = photos[0].photo_reference ? `${baseUrl}/api/restaurant/photo?photo_reference=${photos[0].photo_reference}` : defaultUrlImage
            return ({
                place_id,
                name,
                photo: photosUrl,
                rating,
                totalRating: user_ratings_total,
                address: formatted_address
            })
        })
        setDataList([...data.slice(0, 5)])

    }
    return (
        <Grid item>
            {
                dataList.map(ele => <RestuarantItem
                    key={ele.place_id}
                    {...{ ...ele }}
                />)
            }
        </Grid>
    )
}

export default RestuarantList
