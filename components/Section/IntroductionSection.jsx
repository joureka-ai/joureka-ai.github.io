import React from "react";
import styles from "./Section.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const IntroductionSection = () => {

  return (
    <React.Fragment>
        <div className="d-flex flex-row row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-6 pl-lg pr-sm">
                <h1 className={styles.sectionTitle}>Mit mehr Muße<br/>vom Interview<br/>zum Artikel!</h1>
                <p className={styles.sectionDescription}>Vivamus ut quam quis augue egestas vulputate a 
                    vitae ligula. Suspendisse pulvinar nulla vel tellus 
                    dapibus rhoncus. Vivamus pharetra quam vitae 
                    vestibulum cursus. Nulla dictum vitae ipsum sagittis 
                    luctus. Morbi id congue dolor. Morbi nec purus eu justo
                    tincidunt volutpat sed eu purus. Aliquam egestas 
                    maximus ipsum, vel imperdiet lacus varius nec. In hac
                    habitasse platea dictumst. Donec gravida eleifend mi 
                    quis commodo. Duis sed leo justo. Fusce eget justo non 
                    risus tempor laoreet. Suspendisse ullamcorper magna 
                    quis velit ullamcorper suscipit.
                </p>
            </div>
            <div className={`col-12 col-lg-6 ${styles.blueContainer} ${styles.right}`}>
                <div className="p-5">
                    <Carousel showStatus={false} infiniteLoop={true} autoPlay={true} showThumbs={false}>
                            <div>
                                <img className="carousel-img" src="projectView.png" alt="image1" />
                            </div>
                            <div>
                                <img className="carousel-img" src="charts.png" alt="image2" />
                            </div>
                            <div>
                                <img className="carousel-img" src="transcription.png" alt="image3"/>
                            </div>
                    </Carousel> 
                </div> 
            </div>
        </div>
    </React.Fragment>
  );
};

export default IntroductionSection;