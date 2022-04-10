
import { useEffect, useState } from 'react'

import {BsGithub} from 'react-icons/bs'
import {TiWiFi} from 'react-icons/ti'

import { DataContent, PortfolioData } from '../../services/PortifolioData';
import { Pagination } from '../Pagination';

import './styles.scss'


export function Portfolio() {
  const [ page, setPage] = useState(1);
  const [ showPages, setShowPages ] = useState(6)


  const paginate = ( items: DataContent[], currentPage = page, perPage = showPages) => {
    const offset = perPage * ( currentPage - 1);
    const totalPages = Math.ceil(items.length / perPage)
    const paginateItems = items.slice(offset, perPage * currentPage)

    return {
      total: items.length,
      totalPages: totalPages,
      items: paginateItems,
      currentPage: page
    }
  }

  const { items, totalPages, currentPage } = paginate(PortfolioData)

  const MyScreen = window.screen.availWidth


 useEffect(() => {
  if( MyScreen <= 600){
    setShowPages(3)
  }
 },[MyScreen])

  return (
    <section id='portfolio'>
      <h5>My Recent Projects</h5>
      <h2>PortFolio</h2>
     

      <div className="container portfolio__container">
        {items.map( (item) => (
          <article className='portfolio__item' key={item.id}>
          <div className="portfolio__item-image">
            <img src={item.images.first} alt="" />
          </div>
            <h3>{item.name}</h3>
            <h5>{item.language}</h5>
            <div className="portfolio__item-cta">
              <a href={item.html_url} className='btn btn-icon' target='_blank'><BsGithub /></a>
              
              { item.live_url ?  
                <a href={item.live_url} className="btn btn-icon" target='_blank' style={{ marginLeft: '10px'}}>
                  <TiWiFi />
                  </a> 
                : 
                '' }
              
            </div>
        </article>
        ))}
      </div>

      <Pagination currentPage={currentPage} lastPage={totalPages} onPageChange={setPage}/>

    </section>
  )
}

