import { useNavigate } from "react-location";
import { useState } from "react";

export default function CreateCard({ globalDataStore, setGlobalData }) {
  const navigate = useNavigate();
  const [form, setFormData] = useState({
    fullName: "",
    aboutMe: "",
    knownTechnologies: {
      HTML: false,
      CSS: false,
      JS: false,
      Git: false,
      React: false,
      NodeJS: false
    },
    githubUrl: "",
    twitterUrl: "",
    favoriteBooks: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...form,
      knownTechnologies: {
        ...form.knownTechnologies,
        [e.target.value]: !form.knownTechnologies[e.target.value]
      }
    });
  };

  const handleClick = (e) => {
    e.preventDefault(); // DON'T REFRESH THE PAGE
    // setGlobalData({
    let id = globalDataStore.users.length + 1;
    globalDataStore.users.push({
      ...form,
      id: id,
      favoriteBooks: form.favoriteBooks.split(",")
    });
    // })
    navigate({ to: `showcase?id=${id}`, replace: true });
  };

  return (
    <div className="split-screen">
      <div className="left">
        <section className="copy">
          <h1>DevCard</h1>
          <p>Your personal digital portfolio</p>
        </section>
      </div>

      <div className="right">
        <form>
          <section className="copy">
            <h2>Create your DevCard</h2>
          </section>
          <div className="input-container name">
            <input
              type="text"
              name="fname"
              value={form.fullName}
              placeholder="Your Full Name"
              onChange={(e) =>
                setFormData({ ...form, fullName: e.target.value })
              }
            />
          </div>
          <div className="input-container name">
            <input
              type="text"
              name="aboutMe"
              value={form.aboutMe}
              placeholder="About Me"
              onChange={(e) =>
                setFormData({ ...form, aboutMe: e.target.value })
              }
            />
          </div>
          <h3>Technologies You Know</h3>
          <div className="checkboxes">
            <label className="myLabel">
              <input
                type="checkbox"
                value="HTML"
                onChange={(e) => handleChange(e)}
                checked={form.knownTechnologies.HTML}
              />
              HTML
            </label>
            <label className="myLabel">
              <input
                type="checkbox"
                value="CSS"
                checked={form.knownTechnologies.CSS}
                onChange={(e) => handleChange(e)}
              />
              CSS
            </label>
            <label className="myLabel">
              <input
                type="checkbox"
                value="JS"
                checked={form.knownTechnologies.JS}
                onChange={(e) => handleChange(e)}
              />
              JS
            </label>
            <label className="myLabel">
              <input
                type="checkbox"
                value="Git"
                checked={form.knownTechnologies.Git}
                onChange={(e) => handleChange(e)}
              />
              Git
            </label>
            <label className="myLabel">
              <input
                type="checkbox"
                value="React"
                checked={form.knownTechnologies.React}
                onChange={(e) => handleChange(e)}
              />
              React
            </label>
            <label className="myLabel">
              <input
                type="checkbox"
                value="NodeJS"
                checked={form.knownTechnologies.NodeJS}
                onChange={(e) => handleChange(e)}
              />
              Node.JS
            </label>
          </div>
          <div className="input-container name">
            <input
              type="text"
              name="githubURL"
              placeholder="Github URL"
              value={form.githubUrl}
              onChange={(e) =>
                setFormData({ ...form, githubUrl: e.target.value })
              }
            />
          </div>
          <div className="input-container name">
            <input
              type="text"
              name="twitterURL"
              value={form.twitterUrl}
              placeholder="Twitter URL"
              onChange={(e) =>
                setFormData({ ...form, twitterUrl: e.target.value })
              }
            />
          </div>
          <div className="input-container name">
            <input
              type="text"
              name="favouriteBooks"
              placeholder="Favourite Books"
              value={form.favoriteBooks}
              onChange={(e) =>
                setFormData({ ...form, favoriteBooks: e.target.value })
              }
            />
          </div>
          <button onClick={handleClick} className="signup-btn" type="submit">
            Create Site
          </button>
        </form>
      </div>
    </div>
  );
}
