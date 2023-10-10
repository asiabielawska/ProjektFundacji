import { Button } from "@mui/material";
import img from "../assets/młynmain.jpeg";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          backgroundImage: `url(\"${img}\")`,
          height: "600px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          opacity: 0.8,
        }}
      >
        <div
          style={{
            color: "white",
            paddingTop: 250,
            paddingLeft: 100,
          }}
        >
          <div style={{ fontSize: 40 }}>Fundacja Młyn Zyzaków</div>
          <div style={{ fontSize: 20, marginTop: 25, marginBottom: 25 }}>
            Fundacja zlokalizowana w starym Młynie w Żywcu z unikatową historią.
          </div>
          <Button
            variant="contained"
            style={{ backgroundColor: "gray", textTransform: "none" }}
            onClick={() => navigate("/o-fundacji")}
          >
            Dowiedz się więcej
          </Button>
        </div>
      </div>
    </>
  );
};
