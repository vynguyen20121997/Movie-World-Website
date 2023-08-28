import { useState, React } from 'react';
import { Link } from 'react-router-dom';

export const CardContainer = (props) => {
    const { movieDetail } = props;
    const { title, id, poster_path } = movieDetail;
    const [isHover, setIsHover] = useState(false);

  const imgUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

    const handleMouseEnter = () => {
      setIsHover(true);
    };
  
    const handleMouseLeave = () => {
      setIsHover(false);
    };
    const boxStyle = {
      objectFit:'contain',
      height: "270px",
      width: "200px",
      background: "#2c2c2c",
      borderRadius: "15px",
      margin: " 20px",
      transition: " all ease 0.4s",
      border: " 1px solid #333",
      // boxShadow: " 0px 5px 10px 0px rgba(0,255,255,0.7)",
      boxShadow: isHover ? ("0px 10px 20px 2px rgba(0,200,255,0.7)") : null,
      transform: isHover ? (' translateY(-5px)'):null,
    marginTop:'15%'
      
    }
  
    return (
      <>
      
      <Link to={`/movies/${id}`}>
      <div className="box" style={boxStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <img 
        style={{ objectFit:'cover' ,borderRadius: "15px",height: "100%", width: "100%",}} 
        src={imgUrl} alt={title} />
  
      </div></Link></>
    )
  };
  