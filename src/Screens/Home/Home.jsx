import "./Home.css";
import { useNavigate } from "react-router-dom";
import Card from "../../componants/Cards/Card";
import axios from "axios";
// import star from "./images/star.png"
import { useState, useEffect } from "react";
import ResponsiveAppBar from "../../componants/AppBar/AppBar";
import { Button, Grid } from "@mui/material";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ViewCompactIcon from "@mui/icons-material/ViewCompact";
import Skeleton from "@mui/material/Skeleton";

const Home = () => {
  const [productData, setProductData] = useState([]);
  const [gridView, setGridView] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const changePageHandler = () => {
    navigate("/about");
  };

  // get data

  const getData = async () => {
    const fetchData = await axios.get("https://fakestoreapi.com/products");
    try {
      setProductData(fetchData.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const btnClick = () => {
    setGridView(prev => !prev);
  };
  return isLoading ? (
    <Skeleton variant="rectangular" width={210} height={60} />
  ) : (
    // gridView ? :
    <>
      <ResponsiveAppBar />
      <div>
        <div>
          <h1>Welcome to the home page</h1>
          <button onClick={changePageHandler}>About page</button>
        </div>

        {/* cards */}
        <div>
          <div>
            <Button
              variant="contained"
              onClick={btnClick}
              startIcon={gridView ? <FormatListBulletedIcon /> :<ViewCompactIcon />}
            />
          </div>
          <Grid container>

      {productData.map((e, i) => {
        const { title, image, description, rating, price } = e;
        console.log(gridView)
            return (
              <Grid item xs={12} sm={gridView ? 6 :12} md={gridView ? 4 :12} lg={gridView ? 4 :12} xl={gridView ? 2 :12} sx={{marginTop: 2}} >
              <Card
                title={title}
                image={image}
                description={description}
                price={price}
                rating={rating.rate}
                key={i}
                star={"star"}
                gridView={gridView && true}
              />
            </Grid>
            )
            ;
          })}
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Home;
