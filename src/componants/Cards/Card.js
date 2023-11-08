import { Grid } from "@mui/material";
import "./card.css";

function Card({ title, image, description, rating, price, i, star , gridView }) {
  const descrip = description.slice(0, 130);

  return (
    <div key={i} className="card">
      <Grid container>

    {/* card image with design */}
    <Grid item md={gridView ? 12 : 4}>
    <div className="productImg" >
        <img src={image} alt={title} width={200} />
      </div>
      {gridView ? <div>
        <hr />
      </div> : ''}
    </Grid>
{/* card data */}
    <Grid container item md={gridView ? 12 : 8}>
      {/* card title */}
      <Grid item md={12}>
      <h3 className="title">{title}</h3>
      </Grid>
      {/* card description */}
      <Grid item md={12}>
      <p className="description">{descrip}...see more</p>
      </Grid>
      {/* card buttons */}
      <Grid item md={12} className="btnMainRating" style={gridView ? {display: 'flex', justifyContent: 'space-between'}:{display: 'flex', justifyContent: 'center', gap: 5}}>
        <button className="btn">Cart | ${price}</button>
        <button className="btn">
          {rating} <img src={star} width={15} alt="star" />
        </button>
      </Grid>
      
      </Grid>
      </Grid>
    </div>

  );
}

export default Card;
