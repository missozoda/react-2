const MainSection = () => {
  return(
  <>
    <section className="info">
        <div className="container">
          <div className="info__inner">
            <ul className="info__list">
              
              <li className="info__item">
                {/* <img className="info__img" src="./img/computer.png" alt="computer" width="84" height="78"/> */}
                <h4 className="info__heading">Access your files, anywhere</h4>
                <p className="info__text">The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.</p>
              </li>

              <li className="info__item">
                {/* <img className="info__img" src="./img/security.png" alt="security" width="66" height="84"/> */}
                <h4 className="info__heading">Security you can trust</h4>
                <p className="info__text">2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.</p>
              </li>

              <li className="info__item">
                {/* <img className="info__img" src="./img/time.png" alt="time" width="84" height="69"/> */}
                <h4 className="info__heading">Real-time collaboration</h4>
                <p className="info__text">Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
              </li>

              <li className="info__item">
                {/* <img className="info__img" src="./img/file.png" alt="file" width="90" height="63"/> */}
                <h4 className="info__heading">Store any type of file</h4>
                <p className="info__text">Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.</p>
              </li>

            </ul>
          </div>
        </div>
      </section>
    </>  
  )
};
export default MainSection;