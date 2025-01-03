import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Slider from 'react-slick';
import image1 from '../../../../assets/Education-selection-questions.jpg'
import image2 from '../../../../assets/e.png'
import image3 from '../../../../assets/a.png'

import "./News.module.css"

const ProjectSection = () => {
    const slides = [
        {
            src: image1,
            title: "متن اینجا",
            description: "whatever",
            link: "/dashboard"
        },
        {
            src: image2,
            title: "متن اینجا",
            description: "متن اینجا",
            link: "#"
        },
        {
            src: image3,
            title: "متن اینجا",
            description: "متن اینجا",
            link: "#"
        },

    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="container-fluid">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className="post-slide">
                        <div className="post-img">
                            <a href={slide.link}>
                                <img src={slide.src} alt={slide.title} style={{width:"100%" , height:"300px"}} />
                            </a>
                            <div className="post-content">
                                <h3 className="post-title">
                                    <a href={slide.link}>{slide.title}</a>
                                </h3>
                                <p className="post-description">{slide.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ProjectSection;
