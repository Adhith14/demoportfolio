import { Col } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

export const ProjectCard = ({ title, description, imgUrl, active }) => {
  const navigate = useNavigate();

  const handleIconClick = () => {
    if (active) {
      navigate('/project-details');
    }
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <FaArrowRight
            onClick={handleIconClick}
            style={{
              cursor: active ? 'pointer' : 'not-allowed',
              fontSize: '1.5em',
              marginLeft: '10px',
              color: active ? 'black' : 'gray'
            }}
          />
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
