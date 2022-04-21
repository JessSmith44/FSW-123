import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Loader from './Loader';

const Giphy = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true)
        try{
            const results = await axios('https://api.giphy.com/v1/gifs/trending', {
                params: {
                    api_key: 'pvR9LY464yFxBnre6jA6fwfzRMBzzV5h',
                    limit: 25
                }
            });
            // console.log(results);
            setData(results.data.data);
        } catch(err){
            setIsError(true)
            console.log(err)
            setTimeout(() => {
                setIsError(false)
            }, 4000);
        }
            // Getting browser error about two children with same key, need to resolve.
            setIsLoading(false);
        };
        fetchData();
    }, []);

    const renderGifs = () => {
        if(isLoading){
            return <Loader />
        }
        return data.map(el => {
            return(
                <div key={el.id} className='gif'>
                    <img alt={el.title} src={el.images.fixed_height.url}/>
                </div>
            )
        })
    }
    const renderError = () => {
        if(isError) {
            return(
                <div className='alert alert-danger alert-dismissible fade show' role={alert}>
                Unable to get Gifs, Please try again later!
                </div>
            );
        }
    };
    
    const handleSearchChange = (event) => {
        setSearch(event.target.value)
    }
    
    const handleSubmit = async event => {
        event.preventDefault()
        setIsError(false);
        setIsLoading(true);
// need to fix for encodeURIcomponent(), forgot SMH!!!!
        try {
            // let searchInput = document.querySelector('.form-control');
            let param = encodeURIComponent(search)
            // const results = await axios('https://api.giphy.com/v1/gifs/search'
            const results = await axios('https://api.giphy.com/v1/gifs/search', {
            params: {
                api_key: 'pvR9LY464yFxBnre6jA6fwfzRMBzzV5h',
                q: param,
                limit: 25
            }
            // encodeURIComponent(results)
        });
        // console.log(param, searchInput)
           setData(results.data.data); 
        } catch(err){
            setIsError(true)
            console.log(err)
            setTimeout(() => {
                setIsError(false)
            }, 4000);
        }
        setIsLoading(false);
    };

    return(
        <div className='m-2'>
            {renderError()}
            <form className='form-inline justify-content-center m-2'>
            <input 
                value={search}
                onChange={handleSearchChange} 
                type='text' 
                className='form-control' 
                placeholder='Search here' 
            />
            <button 
                onClick={handleSubmit}
                className='search-btn mx-2' 
                type='submit' 
            >Search</button>
        </form> 
            <div className='container gifs'> 
                {renderGifs()} 
            </div>
        </div>
    )
}

export default Giphy