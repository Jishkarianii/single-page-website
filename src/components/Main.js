import React from 'react'
import Contents from './Contents'
import Features from './Features'
import Gallery from './Gallery'
import Intro from './Intro'
import MediaCont from './MediaCont'
import Partners from './Partners'
import Testimonials from './Testimonials'

function Main() {
    return (
        <main>
            <Intro />
            <Features />
            <Contents />
            <Gallery/>
            <Partners />
            <Testimonials /> 
            <MediaCont />
        </main>
    )
}

export default Main
