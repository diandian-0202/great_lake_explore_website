import "./Team.css";

function Team({ scrollPositionHeader }) {
  const teamMembers = [
    {
      name: "John Oyer",
      role: "Developer",
      image: "/images/JohnOyter.jpg",
      style: { objectPosition: "50% 15%" },
    },
    {
      name: "Emerson Hodder",
      role: "Developer",
      image: "/images/emerson-hodder.jpg",
    },
    {
      name: "DongHua Zhang",
      role: "Developer",
      image: "/images/donghua-zhang.jpg",
      style: { objectPosition: "50% 30%" },
    },
    {
      name: "YiHao Geng",
      role: "Developer",
      image: "/images/yihao-geng.jpg",
      style: { objectPosition: "50% 20%" },
    },
  ];

  return (
    <div className="team-container">
      <h1 className="centered-title">Our Development Team</h1>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <div className="image-wrapper">
              <img
                src={member.image}
                alt={member.name}
                className="team-image"
                style={member.style || {}}
              />
            </div>
            <div className="team-info">
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
