import React, { Component } from 'react'
import BlockImage from '../assets/img-placeholder.png'

 class RecentWork extends Component {
    render() {
        return (<div>
                <div className="section-border">
                <span>RECENT WORK</span>
            </div>
            <div className="recent-work">
                <div className="blog_box">
                    <img src={BlockImage} alt='imagepl' />
                    <h1>Blog Title</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia magni eum iure similique assumenda.ipsam illo iste placeat modi, aperiam voluptatum tempora omnis sit id vel vero.</p>
                </div>
                <div className="blog_box">
                    <img src={BlockImage} alt='imagepl' />
                    <h1>Blog Title</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia magni eum iure similique assumenda.ipsam illo iste placeat modi, aperiam voluptatum tempora omnis sit id vel vero.</p>
                </div>
                <div className="blog_box">
                    <img src={BlockImage} alt='imagepl' />
                    <h1>Blog Title</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia magni eum iure similique assumenda.ipsam illo iste placeat modi, aperiam voluptatum tempora omnis sit id vel vero.</p>
                
            </div>
            </div>
            </div>
        )
    }
}

export default RecentWork
