import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import RestuarantItem from './RestuarantItem';
import { useGlobalContext } from '../contexts/GlobalContext';
import { baseUrl } from '../API';

const defaultUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'

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
            let photosUrl = photos[0].photo_reference ? `${baseUrl}/api/restaurant/photo?photo_reference=${photos[0].photo_reference}` : defaultUrl
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
        <Grid container>
            {
                dataList.map(ele => {

                    return <RestuarantItem key={ele.place_id}  {...{ ...ele }} />

                })
            }
        </Grid>
    )
}

export default RestuarantList
