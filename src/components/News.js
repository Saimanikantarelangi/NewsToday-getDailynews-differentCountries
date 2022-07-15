import React, { useEffect, useState } from 'react'

import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import Container from 'react-bootstrap/Container';
import { Dropdown } from 'react-bootstrap';

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    const greycolor = "#f5f5f5";
    const [country, setCountry] = useState('in')


    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json()
        props.setProgress(70);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);
        document.getElementById("dropdown-basic").innerHTML=con[country]+"-NewsToday";
    }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - NewsToday`;
        updateNews();
        // eslint-disable-next-line
    }, [])




    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(page + 1)
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
    };

    const cList = ['au', 'br', 'ca', 'cn', 'de', 'eg', 'fr',
        'hk', 'id', 'in', 'it', 'jp', 'kr', 'mx', 'my', 'ng', 'nl', 'no', 'nz', 'ph', 'pt', 'ru',
        'sa', 'sg', 'th', 'tr', 'tw', 'ua', 'us',]

    const con = {


        au: "austrailia", br: "Brazil", ca: "canada", cn: "china", de: "Germany", eg: "Egypt", hk: "HongKong", fr: "France"
        , id: "Indonesia", in: "India", it: "Italy", jp: "Japan", kr: "South Korea", mx: "Mexico", my: "Malaysia", ng: "Nigeria",
        nl: "Netherlands", no: "Norway", nz: "New Zealand", ph: "Phillipines", pt: "Poland", ru: "Russia", sa: "Soudi arabia",
        sg: "Singapore", th: "Thailand", tr: "Turkey", tw: "Taiwan", ua: "Ukraine", us: "United States", gb: "United Kingdom"
    }
    const fromDb = undefined;




    return (
        <>
            <Container >
                <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>NewsToday - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
                <Container style={{display: 'flex',flexdirection:'row',alignitems: 'flex-end',justifycontent: 'space-between',flexwrap: 'wrap'}}>
                    <Dropdown >
                        <Dropdown.Toggle   variant="success" id="dropdown-basic">
                            select country-Dailynews 
                        </Dropdown.Toggle>

                        <Dropdown.Menu>

                            {
                                cList.map((a) => (
                                    <Dropdown.Item onClick={() => {
                                        setCountry(a)



                                    }}>{con[a]}</Dropdown.Item>
                                ))

                            }


                        </Dropdown.Menu>
                    </Dropdown>




                    <button style={{flexdirection:'row',borderRadius:"5px",margin:"2px"}} onClick={() => {
                        updateNews()
                        
                        console.log(country)
                    }}>search</button>
                </Container>
                <hr></hr>

                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={fromDb || articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner />}
                >

                    <div className="container " style={{ background: greycolor }}>

                        <div className="row">
                            {articles.map((element) => {
                                return <div className="col-md-3" key={element.url}>
                                    <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </Container>
        </>
    )

}


News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News
