export default function CVRender({ cv }) {
  return (
    <>
      <h2>{cv.info.name}</h2>
      <p>
        {cv.info.phone} | {cv.info.email} | {cv.info.website}
      </p>

      {cv.education.length ? (
        <div className="section">
          <h3>Educational Experience</h3>
          {cv.education.map((education, index) => {
            return (
              <div className="experience" key={index}>
                <h4>{education.school}</h4>
                <p className="position">
                  {education.title}{' '}
                  <span className="date">{education.date}</span>
                </p>
                <p>{education.details}</p>
              </div>
            );
          })}
        </div>
      ) : null}

      {cv.experience.length ? (
        <div className="section">
          <h3>Educational Experience</h3>
          {cv.experience.map((experience, index) => {
            return (
              <div className="experience" key={index}>
                <h4>{experience.company}</h4>
                <p className="position">
                  {experience.position}{' '}
                  <span className="date">
                    {experience.dateFrom} - {experience.dateTo}
                  </span>
                </p>
                <p>{experience.details}</p>
              </div>
            );
          })}
        </div>
      ) : null}

      {cv.skills.length ? (
        <div className="section">
          <h3>Skills</h3>
          <ul>
            {cv.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  );
}
