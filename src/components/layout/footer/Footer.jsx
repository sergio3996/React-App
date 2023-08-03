import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div className="footer">
      <div className="guarantee">
        <div className="guaranteeCard">
          <img
            src="https://res.cloudinary.com/dtaq3xptn/image/upload/v1691043294/Apple-store/i4_mryg7g.png"
            alt=""
          />
          <h6>Asesoramiento personalizado</h6>
        </div>
        <div className="guaranteeCard">
          <img
            src="https://res.cloudinary.com/dtaq3xptn/image/upload/v1691043294/Apple-store/i1_dpcu0z.png"
            alt=""
          />
          <h6>Protección de base de datos personales</h6>
        </div>
        <div className="guaranteeCard">
          <img
            src="https://res.cloudinary.com/dtaq3xptn/image/upload/v1691043294/Apple-store/i3_dukkug.png"
            alt=""
          />
          <h6>10 días posteriores a la compra</h6>
        </div>
        <div className="guaranteeCard">
          <img
            src="https://res.cloudinary.com/dtaq3xptn/image/upload/v1691043294/Apple-store/i2_fpon0c.png"
            alt=""
          />
          <h6>Apple oficial 1 año</h6>
        </div>
      </div>
      <div className="cards">
        <img
          src="https://res.cloudinary.com/dtaq3xptn/image/upload/v1691043294/Apple-store/mp_n1sckh.png"
          alt=""
        />
        <img
          src="https://res.cloudinary.com/dtaq3xptn/image/upload/v1691043294/Apple-store/tarjetas_nyb1ih.png"
          alt=""
        />
      </div>
      <div className="socials">
        <FacebookIcon fontSize="large" />
        <InstagramIcon fontSize="large" />
        <TwitterIcon fontSize="large" />
        <LinkedInIcon fontSize="large" />
      </div>
    </div>
  );
};

export default Footer;
