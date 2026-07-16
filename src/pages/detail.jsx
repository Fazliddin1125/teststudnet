import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'


const Detail = () => {
    const params = useParams()
    const slug = params.slug
    const [product, setProduct] = useState({})
    async function getData() {
        const res = await fetch(`https://uzum-api.onrender.com/api/products/${slug}`)
        const data = await res.json()
        console.log(data);
        if (data.success) {
            setProduct(data.data)
        } else {
            toast.warning(
                data.message,
                {
                    position: "top-center",
                    autoClose: 2000,

                })
        }


    }
    useEffect(() => {
        try {
            getData()
        } catch (error) {
            console.log(error);

        }
    }, [])


    return (
        <div className='detail'>
            Detail
            <h1>Slug:  {slug} bo'lgan maxsulot</h1>
            <h1>Nomi: {product?.name}</h1>
            <h1>Narxi: {product?.price}</h1>
        </div>
    )
}

export default Detail