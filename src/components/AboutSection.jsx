import React from 'react';

export default function AboutSection({ activeTab, setActiveTab }) {
  const skills = [
    { name: 'React', val: '95', icon: <i className="fa-brands fa-react" style={{ fontSize: '32px', color: '#61DAFB' }}></i> },
    { name: 'Next.js', val: '92', icon: <svg width="32" height="32" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="90" cy="90" r="90" fill="white"/><path d="M149.508 157.52L69.143 54H54V125.97H66.8136V69.2155L138.564 162.247C142.441 162.247 146.096 159.26 149.508 157.52Z" fill="black"/><rect x="115" y="54" width="13" height="72" fill="black"/></svg> },
    { name: 'Node.js', val: '90', icon: <i className="fa-brands fa-node-js" style={{ fontSize: '32px', color: '#68A063' }}></i> },
    { name: 'TypeScript', val: '88', icon: <svg width="30" height="30" viewBox="0 0 24 24" fill="#3178C6"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-1.194-.48 5.72 5.72 0 0 0-1.272-.143c-.63 0-1.1.128-1.41.383-.31.256-.465.617-.465 1.083 0 .341.096.619.288.835.192.215.467.4.825.555.358.155.795.31 1.311.465.733.22 1.341.465 1.824.735.483.27.864.606 1.143 1.008.279.402.419.912.419 1.53 0 .864-.249 1.57-.747 2.118-.498.548-1.18.932-2.046 1.152-.866.22-1.859.33-2.979.33a10.02 10.02 0 0 1-1.743-.15 7.74 7.74 0 0 1-1.635-.453v-2.58a7.04 7.04 0 0 0 1.545.642 6.06 6.06 0 0 0 1.83.255c.66 0 1.164-.135 1.512-.405.348-.27.522-.64.522-1.11 0-.348-.1-.632-.3-.852-.2-.22-.486-.412-.858-.577a15.82 15.82 0 0 0-1.392-.495c-.71-.233-1.3-.49-1.77-.772a3.84 3.84 0 0 1-1.122-1.028c-.27-.427-.405-.96-.405-1.6 0-.816.246-1.492.738-2.028.492-.536 1.157-.91 1.995-1.122.838-.212 1.782-.318 2.832-.318zM11.31 9.96v2.325H8.76v9.33H5.73v-9.33H3.18V9.96h8.13z"/></svg> },
    { name: 'Python', val: '92', icon: <i className="fa-brands fa-python" style={{ fontSize: '32px', color: '#3776AB' }}></i> },
    { name: 'FastAPI', val: '86', icon: <svg width="30" height="30" viewBox="0 0 24 24" fill="#009688"><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm1 18.5l-2.5-6.5H7.5L13 3.5l-1 6.5h3.5L13 18.5z"/></svg> },
    { name: 'MongoDB', val: '88', icon: <svg width="30" height="30" viewBox="0 0 24 24" fill="#47A248"><path d="M17.193 9.555c-1.264-4.802-4.426-7.854-5.048-8.435a.252.252 0 0 0-.345 0c-.622.58-3.784 3.633-5.048 8.435-1.455 5.529.585 10.25 4.965 13.385a.732.732 0 0 0 .867 0c4.38-3.135 6.42-7.856 4.965-13.385zM12 21.65c-.247-.184-3.568-2.732-4.148-7.65.654 1.258 2.008 2.05 3.548 2.05s2.894-.792 3.548-2.05c-.58 4.918-3.901 7.466-4.148 7.65z"/></svg> },
    { name: 'PostgreSQL', val: '90', icon: <svg width="30" height="30" viewBox="0 0 24 24" fill="#4169E1"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.82 8.78c-.06.72-.34 1.83-1.07 2.85-.92 1.28-2.3 2.1-3.66 2.37.14.49.27 1.05.35 1.63.1.72.07 1.48-.12 2.17-.18.66-.54 1.26-1.07 1.69-.53.43-1.2.69-1.92.74-.72.05-1.45-.1-2.07-.44-.62-.34-1.12-.85-1.45-1.47-.33-.62-.48-1.34-.43-2.06.05-.72.3-1.41.72-1.99.42-.58.99-1.02 1.65-1.27v-1.1c-.69.04-1.38.22-2.01.52-.63.3-1.19.72-1.64 1.24s-.78 1.13-.97 1.8c-.19.67-.23 1.38-.11 2.08.12.7.4 1.36.82 1.92.42.56.97 1 1.61 1.29.64.29 1.35.42 2.06.37.71-.05 1.4-.28 2-.67.6-.39 1.09-.92 1.43-1.55.34-.63.52-1.34.52-2.06 0-.66-.15-1.31-.43-1.91z"/></svg> },
    { name: 'Tailwind CSS', val: '96', icon: <i className="fa-brands fa-css3-alt" style={{ fontSize: '32px', color: '#06B6D4' }}></i> },
    { name: 'Git / GitHub', val: '94', icon: <i className="fa-brands fa-github" style={{ fontSize: '32px', color: '#ffffff' }}></i> },
  ];

  return (
    <div className={`tab-pane fade pl--30 pl_md--10 pl_sm--10 ${activeTab === 'profile' ? 'show active' : ''}`} id="profile" role="tabpanel">
      <div className="personal-portfolio-right-inner-wrapper mt--50 about-tab in-bentogrid">
        
        {/* Banner Introduce */}
        <div className="banner-personal-portfolio tmponhover paralax-image tmp-card-body with-bento-about-banner tmp-profile-card position-relative mb--30 pb--50 pt--30">
          <div className="section-header">
            <h4 className="subtitle theme-gradient">
              <i className="fa-regular fa-house"></i> INTRODUCE
            </h4>
            <h1>Hi, I'm <strong><span className="theme-gradient">Mokarram Shahban</span></strong> — <br /> a <strong><span className="theme-gradient">Software Developer</span></strong>.</h1>
            <p className="mt--15" style={{ fontSize: '15px', lineHeight: '1.7', color: '#a0a8b6' }}>
              Software Developer at Vizva Consultancy Services, working with React, Next.js, Node.js, TypeScript, Python, and FastAPI. Background includes a full-stack internship, freelance agency work, and a web design traineeship, along with UI/UX audits conducted directly for two Government of India departments.
            </p>
          </div>
          <div className="tmp-light light-left"></div>
          <div className="separator-animated-border border-top-footer animated-true" style={{ width: '100%' }}></div>
          <div className="separator-animated-border animated-true" style={{ width: '100%' }}></div>
        </div>

        {/* Counterup / Highlights area */}
        <div className="counterup-area-personal pb--80">
          <div className="row g-5 animation-action-1">
            <div className="col-lg-4 col-md-6 col-sm-6 col-12 paralax-image">
              <div className="count-box counter-style-2 border-style small-radious text-center">
                <div className="counter-main-wrapper-card single-animation tmponhover active">
                  <h3 className="count-number"><span className="odometer" data-count="5">5</span>+</h3>
                  <div className="tmp-light light-center"></div>
                </div>
                <h5 className="title">Web Projects Delivered</h5>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12 paralax-image">
              <div className="count-box counter-style-2 border-style small-radious text-center">
                <div className="counter-main-wrapper-card single-animation tmponhover">
                  <h3 className="count-number"><span className="odometer" data-count="2">2</span></h3>
                  <div className="tmp-light light-center"></div>
                </div>
                <h5 className="title">Govt UI/UX Audits</h5>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12 paralax-image">
              <div className="count-box counter-style-2 border-style small-radious text-center">
                <div className="counter-main-wrapper-card single-animation tmponhover">
                  <h3 className="count-number"><span className="odometer" data-count="2026">2026</span></h3>
                  <div className="tmp-light light-center"></div>
                </div>
                <h5 className="title">B.Tech CSE Graduate</h5>
              </div>
            </div>
          </div>
        </div>

        {/* About Me Section & Progress Bars */}
        <div className="banner-personal-portfolio signle-section pb--80">
          <div className="section-header pb--50">
            <h4 className="subtitle"><i className="fa-regular fa-user"></i> ABOUT ME</h4>
            <h2 className="title">Building Scalable, High-Performance <br /> <span>Web Applications</span></h2>
          </div>

          <div className="single-progress large-size no-radius mb--25">
            <h6 className="title">Frontend Frameworks (React, Next.js, Redux, Tailwind CSS)</h6>
            <div className="progress">
              <div className="progress-bar wow fadeInLeft" role="progressbar" style={{ width: '95%' }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
              <span className="progress-number">95%</span>
            </div>
          </div>

          <div className="single-progress large-size no-radius mb--25">
            <h6 className="title">Backend API Architecture (Node.js, FastAPI, Python, REST)</h6>
            <div className="progress">
              <div className="progress-bar wow fadeInLeft" role="progressbar" style={{ width: '92%' }} aria-valuenow="92" aria-valuemin="0" aria-valuemax="100"></div>
              <span className="progress-number">92%</span>
            </div>
          </div>

          <div className="single-progress large-size no-radius mb--25">
            <h6 className="title">Databases & ORM (MongoDB, PostgreSQL, Mongoose, Prisma)</h6>
            <div className="progress">
              <div className="progress-bar wow fadeInLeft" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              <span className="progress-number">90%</span>
            </div>
          </div>

          <div className="single-progress large-size no-radius">
            <h6 className="title">Languages & Tools (JavaScript ES6+, TypeScript, Python, Git/GitHub, Vite)</h6>
            <div className="progress">
              <div className="progress-bar wow fadeInLeft" role="progressbar" style={{ width: '94%' }} aria-valuenow="94" aria-valuemin="0" aria-valuemax="100"></div>
              <span className="progress-number">94%</span>
            </div>
          </div>
        </div>

        {/* Education & Experience Resume Timeline */}
        <div className="pb--80 banner-personal-portfolio experience-style-list signle-section">
          <div className="section-header pb--20">
            <h4 className="subtitle"><i className="fa-regular fa-briefcase"></i> MY RESUME</h4>
            <h2 className="title">Work Experience & <span>Education</span></h2>
          </div>
          <div className="content">
            <div className="experience-list animation-action-2">
              
              {/* Experience 1 */}
              <div className="resume-single-list bg-card single-animation tmponhover active mt--0">
                <div className="inner">
                  <div className="heading">
                    <div className="title">
                      <h4>Software Developer</h4>
                      <span>Vizva Consultancy Services — Gurugram</span>
                    </div>
                    <div className="date-of-time"><span>July 2026 – Present</span></div>
                  </div>
                  <p className="description">Building scalable full-stack applications using React, Next.js, Node.js, Python, and FastAPI. Incorporating AI-powered features, intelligent data processing, and designing REST APIs and database schemas across MongoDB and PostgreSQL.</p>
                </div>
                <div className="tmp-light light-left"></div>
              </div>

              {/* Experience 2 */}
              <div className="resume-single-list bg-card single-animation tmponhover mt--20">
                <div className="inner">
                  <div className="heading">
                    <div className="title">
                      <h4>Full Stack Web Development Intern</h4>
                      <span>AOSC Technologies India Pvt. Ltd. — Amritsar</span>
                    </div>
                    <div className="date-of-time"><span>Jan 2026 – June 2026</span></div>
                  </div>
                  <p className="description">Built high-performance, responsive interfaces using React, Next.js, and TypeScript. Developed a library of reusable, type-safe UI components and fixed performance bottlenecks, improving page load speed by 15%.</p>
                </div>
                <div className="tmp-light light-left"></div>
              </div>

              {/* Experience 3 */}
              <div className="resume-single-list bg-card single-animation tmponhover mt--20">
                <div className="inner">
                  <div className="heading">
                    <div className="title">
                      <h4>Web Developer & Co-Founder</h4>
                      <span>MxNext.in — Amritsar</span>
                    </div>
                    <div className="date-of-time"><span>May 2023 – May 2024</span></div>
                  </div>
                  <p className="description">Acted as primary client contact for institutional clients, including KCET and Sikh History Research Centre. Co-led a team delivering 5+ full-scale web projects and conducted UI/UX audits that raised organic traffic and engagement.</p>
                </div>
                <div className="tmp-light light-left"></div>
              </div>

              {/* Experience 4 */}
              <div className="resume-single-list bg-card single-animation tmponhover mt--20">
                <div className="inner">
                  <div className="heading">
                    <div className="title">
                      <h4>Trainee – Web Designing & Development</h4>
                      <span>Green Apple Media Solution — Amritsar</span>
                    </div>
                    <div className="date-of-time"><span>Sept 2023 – March 2024</span></div>
                  </div>
                  <p className="description">Completed structured training in web design fundamentals: HTML, CSS, JavaScript, and UI/UX principles. Assisted in building and styling responsive web pages under mentor guidance.</p>
                </div>
                <div className="tmp-light light-left"></div>
              </div>

              {/* Education */}
              <div className="resume-single-list bg-card single-animation tmponhover mt--20">
                <div className="inner">
                  <div className="heading">
                    <div className="title">
                      <h4>B.Tech in Computer Science & Engineering</h4>
                      <span>Khalsa College of Engineering & Technology, Amritsar</span>
                    </div>
                    <div className="date-of-time"><span>2022 – 2026</span></div>
                  </div>
                  <p className="description">Bachelor of Technology degree in CSE with deep specialization in modern full-stack web development, data structures, algorithms, and software engineering principles.</p>
                </div>
                <div className="tmp-light light-left"></div>
              </div>

            </div>
          </div>
        </div>

        {/* Achievements & Awards Section */}
        <div className="banner-personal-portfolio experience-style-list signle-section pb--80">
          <div className="section-header pb--20">
            <h4 className="subtitle"><i className="fa-regular fa-trophy"></i> HONORS & AWARDS</h4>
            <h2 className="title">Key Achievements & <span>Audits</span></h2>
          </div>
          <div className="content">
            <div className="experience-list">
              <div className="resume-single-list bg-card single-animation tmponhover active mt--0">
                <div className="inner">
                  <div className="heading">
                    <div className="title">
                      <h4>Government UI/UX Audits</h4>
                      <span>Jharkhand Transport Department & Department of Legal Affairs</span>
                    </div>
                    <div className="date-of-time"><span>Jan – Mar 2025</span></div>
                  </div>
                  <p className="description">Conducted comprehensive UI/UX audits directly for two Government of India departments, providing key usability recommendations to optimize accessibility and user workflow.</p>
                </div>
                <div className="tmp-light light-left"></div>
              </div>

              <div className="resume-single-list bg-card single-animation tmponhover mt--20">
                <div className="inner">
                  <div className="heading">
                    <div className="title">
                      <h4>Best Poster Presentation Award</h4>
                      <span>KCET National Conferences</span>
                    </div>
                    <div className="date-of-time"><span>2024 & 2025</span></div>
                  </div>
                  <p className="description">Awarded Best Poster Presentation at the National Conferences on Women-Centric Laws (2024) and Women, Technology & Tradition (2025) at KCET.</p>
                </div>
                <div className="tmp-light light-left"></div>
              </div>

              <div className="resume-single-list bg-card single-animation tmponhover mt--20">
                <div className="inner">
                  <div className="heading">
                    <div className="title">
                      <h4>Overall Student Organiser</h4>
                      <span>Tech Urja Technical & Cultural Fest</span>
                    </div>
                    <div className="date-of-time"><span>2023 – 2025</span></div>
                  </div>
                  <p className="description">Led event operations and website integration for 1200+ participant sign-ups across annual technical & cultural college flagship festivals.</p>
                </div>
                <div className="tmp-light light-left"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="tmp-service-area pb--80 banner-personal-portfolio signle-section">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-header pb--20">
                <h4 className="subtitle"><i className="fa-solid fa-layer-group"></i> MY SKILL</h4>
                <h2 className="title">My <span>Specializations</span></h2>
              </div>
            </div>
          </div>
          <div className="row g-5 skills-wrapper text-center animation-action-4">
            {skills.map((skill, index) => (
              <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={index}>
                <div className="skill-style-border-card single-animation tmponhover">
                  <div className="skill-inner d-flex flex-column align-items-center justify-content-center">
                    <div className="mb--15 d-flex align-items-center justify-content-center" style={{ height: '40px' }}>
                      {skill.icon}
                    </div>
                    <h3 className="count-number"><span className="odometer" data-count={skill.val}>{skill.val}</span>%</h3>
                    <p className="name" style={{ color: '#ffffff', fontWeight: '500' }}>{skill.name}</p>
                  </div>
                  <div className="tmp-light light-left"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Direct Contact Info Card Banner */}
        <div className="contact-area-left-portfolio-fixed finance banner-personal-portfolio signle-section">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-header pb--20">
                <h4 className="subtitle"><i className="fa-regular fa-envelope"></i> DIRECT CONTACT</h4>
                <h2 className="title">Let's Work <span>Together!</span></h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="tmp-profile-card tmponhover single-animation active p-4 text-center d-flex flex-column align-items-center justify-content-center" style={{ background: '#141c21', borderRadius: '12px', border: '1px solid rgba(0, 163, 255, 0.3)' }}>
                <h4 className="mb--10" style={{ color: '#ffffff', fontSize: '20px' }}>Mokarram Shahban</h4>
                <p className="mb--20" style={{ color: '#a0a8b6', fontSize: '15px' }}>Gurugram, India | Software Developer</p>
                <a 
                  href="mailto:mokarramshahban.in@gmail.com" 
                  className="tmp-btn hover-icon-reverse btn-border tmp-modern-button download-icon btn-lg"
                >
                  <div className="icon-reverse-wrapper">
                    <span className="btn-text">Email Me: mokarramshahban.in@gmail.com</span>
                    <div className="btn-hack"></div>
                    <img src="assets/images/button/btg-bg.svg" alt="" className="btn-bg" />
                    <img src="assets/images/button/btg-bg-2.svg" alt="" className="btn-bg-hover" />
                    <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                    <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
