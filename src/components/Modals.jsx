import React from 'react';

export default function Modals() {
  return (
    <>
      {/* Modal Portfolio Detail Area */}
      <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"><i className="fa-solid fa-xmark"></i></span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="portfolio-popup-thumbnail">
                    <div className="image">
                      <img className="w-100" src="assets/images/portfolio/portfolio-04.jpg" alt="slide" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="text-content">
                    <h3><span>Featured - Design</span> App Design Development.</h3>
                    <p className="mb--30">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio assumenda explicabo veniam temporibus eligendi.</p>
                    <p>Consectetur adipisicing elit. Cupiditate distinctio assumenda. dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!</p>
                    <div className="button-group button-group-pd mt--20">
                      <a className="tmp-btn hover-icon-reverse btn-border tmp-modern-button radius-round download-icon" href="#">
                        <div className="icon-reverse-wrapper">
                          <span className="btn-text">LIKE THIS</span>
                          <div className="btn-hack"></div>
                          <img src="assets/images/button/btg-bg.svg" alt="" className="btn-bg" />
                          <img src="assets/images/button/btg-bg-2.svg" alt="" className="btn-bg-hover" />
                          <span className="btn-icon"><i className="fa-solid fa-thumbs-up"></i></span>
                          <span className="btn-icon"><i className="fa-solid fa-thumbs-up"></i></span>
                        </div>
                      </a>
                      <a className="tmp-btn hover-icon-reverse btn-border tmp-modern-button radius-round download-icon" href="#">
                        <div className="icon-reverse-wrapper">
                          <span className="btn-text">VIEW PROJECTS</span>
                          <div className="btn-hack"></div>
                          <img src="assets/images/button/btg-bg.svg" alt="" className="btn-bg" />
                          <img src="assets/images/button/btg-bg-2.svg" alt="" className="btn-bg-hover" />
                          <span className="btn-icon"><i className="fa-regular fa-chevron-right"></i></span>
                          <span className="btn-icon"><i className="fa-regular fa-chevron-right"></i></span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
