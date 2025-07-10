export default function CVRender({ cv }) {
  return (
    <div className="cv-render">
      <h2>{cv.info.name}</h2>
      <p className="general-info">
        {[cv.info.phone, cv.info.email, cv.info.website]
          .filter((value) => value)
          .join(' | ')}
      </p>

      {cv.education.length ? (
        <div className="section">
          <h3>Educational Experience</h3>
          {cv.education.map((education, index) => {
            return (
              <div className="experience" key={index}>
                <h4>{education.title}</h4>
                <p className="position">
                  {education.school}{' '}
                  {education.date && (
                    <span className="date">
                      {education.date.split('-').reverse().join('/')}
                    </span>
                  )}
                </p>
                <p className="details">{education.details}</p>
              </div>
            );
          })}
        </div>
      ) : null}

      {cv.experience.length ? (
        <div className="section">
          <h3>Practical Experience</h3>
          {cv.experience.map((experience, index) => {
            return (
              <div className="experience" key={index}>
                <h4>{experience.position}</h4>
                <p className="position">
                  {experience.company}{' '}
                  <span className="date">
                    {experience.dateFrom &&
                      experience.dateFrom.split('-').reverse().join('/')}
                    {experience.dateFrom && experience.dateTo && ' - '}
                    {experience.dateTo &&
                      experience.dateTo.split('-').reverse().join('/')}
                  </span>
                </p>
                <p className="details">{experience.details}</p>
              </div>
            );
          })}
        </div>
      ) : null}

      {cv.skills.length ? (
        <div className="section">
          <h3>Skills</h3>
          <ul>
            {cv.skills.map(
              (skill) => skill.skill && <li key={skill.id}>{skill.skill}</li>
            )}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
