import "./showcase.css";
export default function CardShowCase({ globalDataStore }) {
  const queryParams = new URLSearchParams(window.location.search);
  const index = queryParams.get("id") - 1;
  if (index < 0 || index >= globalDataStore.users.length) {
    return <div>"Invalid ID"</div>;
  }
  return (
    <div className="pageBody">
      <main className="has-dflex-center">
        <section>
          <div className="lx-container-85">
            <div className="lx-row align-stretch">
              <div className="lx-column is-3">
                <div className="lx-row">
                  <div className="lx-card">
                    <div className="lx-row">
                      <div className="has-dflex-center bs-md pic">
                        <img
                          src="https://github.com/luxonauta.png"
                          alt="Armaan"
                        />
                      </div>
                      <div className="infos">
                        <span>
                          <i className="fas fa-user-circle"></i>&nbsp;&nbsp;
                          {globalDataStore.users[index].fullName}
                        </span>
                        <span>
                          <i className="fas fa-briefcase"></i>&nbsp;&nbsp;Full
                          Stack Developer
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="lx-card">
                    <div className="lx-row">
                      <h1 className="title">
                        Connect with {globalDataStore.users[index].fullName}
                      </h1>
                      <div className="mini-cards">
                        <a
                          className="has-dflex-center bs-md"
                          href={globalDataStore.users[index].githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-github-alt"></i>
                        </a>
                        <a
                          className="has-dflex-center bs-md"
                          href={globalDataStore.users[index].twitterUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lx-column">
                <div className="lx-row">
                  <div className="lx-row lx-card">
                    <h1 className="title">
                      <i className="fas fa-info-circle"></i>&nbsp;Welcome
                      to&nbsp;
                      {globalDataStore.users[index].fullName}'s corner of the
                      Internet
                    </h1>
                  </div>
                  <div className="lx-row lx-card">
                    <h1 className="title">
                      <i className="fas fa-hand-point-right"></i>&nbsp;About me
                    </h1>
                    <div className="text">
                      {globalDataStore.users[index].aboutMe}
                    </div>
                  </div>
                  <div className="lx-row lx-card">
                    <h1 className="title">
                      <i className="fas fa-terminal"></i>&nbsp;Technologies
                    </h1>
                    <div className="mini-cards">
                      <span
                        className="has-dflex-center bs-md"
                        title="CSS"
                        style={{
                          visibility: globalDataStore.users[index]
                            .knownTechnologies.CSS
                            ? "visible"
                            : "hidden"
                        }}
                      >
                        <i className="fab fa-css3-alt"></i>
                      </span>
                      <span
                        className="has-dflex-center bs-md"
                        title="HTML"
                        style={{
                          visibility: globalDataStore.users[index]
                            .knownTechnologies.HTML
                            ? "visible"
                            : "hidden"
                        }}
                      >
                        <i className="fab fa-html5"></i>
                      </span>
                      <span
                        className="has-dflex-center bs-md"
                        title="JS"
                        style={{
                          visibility: globalDataStore.users[index]
                            .knownTechnologies.JS
                            ? "visible"
                            : "hidden"
                        }}
                      >
                        <i className="fab fa-js"></i>
                      </span>
                      <span
                        className="has-dflex-center bs-md"
                        title="Git"
                        style={{
                          visibility: globalDataStore.users[index]
                            .knownTechnologies.Git
                            ? "visible"
                            : "hidden"
                        }}
                      >
                        <i className="fab fa-git-alt"></i>
                      </span>
                      <span
                        className="has-dflex-center bs-md"
                        title="Node JS"
                        style={{
                          visibility: globalDataStore.users[index]
                            .knownTechnologies.NodeJS
                            ? "visible"
                            : "hidden"
                        }}
                      >
                        <i className="fab fa-node-js"></i>
                      </span>
                      <span
                        className="has-dflex-center bs-md"
                        title="React"
                        style={{
                          visibility: globalDataStore.users[index]
                            .knownTechnologies.CSS
                            ? "visible"
                            : "hidden"
                        }}
                      >
                        <i className="fab fa-react"></i>
                      </span>
                    </div>
                  </div>
                  <div className="lx-row lx-card">
                    <h1 className="title">
                      <i className="fas fa-book"></i>&nbsp;My favorite books
                    </h1>
                    <div className="text">
                      <ol>
                        {globalDataStore.users[index].favoriteBooks.map(
                          (ele, key) => {
                            return (
                              <li key={key}>
                                <p>
                                  <b>{ele}</b>
                                </p>
                              </li>
                            );
                          }
                        )}
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
