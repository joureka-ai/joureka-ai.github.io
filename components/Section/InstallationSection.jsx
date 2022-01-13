import React from "react";
import styles from "./Section.module.scss";

const InstallationSection = () => {

  return (
    <div className="d-flex flex-column justify-content-center h-100">
        <div className="row">
            <div className="col-12 pl-lg pr-md">
                <h1 className={styles.sectionTitle}>joureka lokal installieren</h1>
                <p className={styles.sectionDescription}>Vivamus ut quam quis augue egestas vulputate a 
                    vitae ligula. Suspendisse pulvinar nulla vel tellus 
                    dapibus rhoncus. Vivamus pharetra quam vitae 
                    vestibulum cursus. Nulla dictum vitae ipsum sagittis 
                    luctus. Morbi id congue dolor. Morbi nec purus eu justo
                    tincidunt volutpat sed eu purus. Aliquam egestas 
                    maximus ipsum, vel imperdiet lacus varius nec.
                </p>
          </div>
        </div>
        <div className="row">
            <div className={`col-12 col-lg-11 ${styles.blueContainer} ${styles.left}`}>
                <div className="row d-flex flex-row justify-content-center align-items-center py-5 px-2">
                <div className="pt-4 col-6 col-md-4 installation-step d-flex flex-row justify-content-start">
                    <div>
                      <div className="circle">3</div>
                    </div>
                    <div>
                      <p>Vivamus ut quam quis augue egestas vulputate a 
                      vitae ligula. Suspendisse pulvinar nulla vel tellus 
                      dapibus rhoncus. Vivamus pharetra quam vitae 
                      vestibulum cursus. Nulla dictum vitae ipsum sagittis 
                      luctus. 
                      </p>
                      <div className="code">git clone https://github.com/joureka-ai/joureka-web.git</div>
                    </div>
                  </div>
                  <div className="pt-4 col-6 col-md-4 installation-step d-flex flex-row justify-content-start align-items-end">
                    <div>
                      <div className="circle">2</div>
                    </div>
                    <p>Vivamus ut quam quis augue egestas vulputate a 
                    vitae ligula. Suspendisse pulvinar nulla vel tellus 
                    dapibus rhoncus. Vivamus pharetra quam vitae 
                    vestibulum cursus. 
                    </p>
                  </div>
                  <div className="pt-4 col-6 col-md-4 installation-step d-flex flex-row justify-content-start">
                    <div>
                      <div className="circle">3</div>
                    </div>
                    <div>
                      <p>Vivamus ut quam quis augue egestas vulputate a 
                      vitae ligula. Suspendisse pulvinar nulla vel tellus 
                      dapibus rhoncus. Vivamus pharetra quam vitae 
                      vestibulum cursus. Nulla dictum vitae ipsum sagittis 
                      luctus. 
                      </p>
                      <div className="code">npm install</div>
                    </div>
                  </div>   
                  <div className="pt-4 col-6 col-md-4 installation-step d-flex flex-row justify-content-start align-items-end">
                    <div>
                      <div className="circle">4</div>
                    </div>
                    <p> Aliquam egestas 
                    maximus ipsum, vel imperdiet lacus varius nec. In hac
                    habitasse platea dictumst. Donec gravida eleifend mi 
                    quis commodo. Duis sed leo justo. Fusce eget justo non 
                    risus tempor laoreet. Suspendisse ullamcorper magna 
                    quis velit ullamcorper suscipit.
                    </p>
                  </div>
                  <div className="pt-4 col-6 col-md-4 installation-step d-flex flex-row justify-content-start align-items-start">
                    <div>
                      <div className="circle">5</div>
                    </div>
                    <p> Aliquam egestas 
                    maximus ipsum, vel imperdiet lacus varius nec. In hac
                    habitasse platea dictumst. Donec gravida eleifend mi 
                    quis commodo. Duis sed leo justo. Fusce eget justo non 
                    risus tempor laoreet. Suspendisse ullamcorper magna 
                    quis velit ullamcorper suscipit.
                    </p>
                  </div>                  
                </div> 
                <div className="col-1">
                </div>
                <div className="p-2 text-italic text-end"><small>*Für eine detaillierte Installationsanleitung klicken Sie <b><a className="text-primary">hier</a></b>.</small></div> 
            </div>
        </div>
    </div>
  );
};

export default InstallationSection;