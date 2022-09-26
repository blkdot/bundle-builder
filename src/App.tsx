import React from 'react';
import { useQuery } from "react-query";
import './App.css';
import { Container, Grid, LinearProgress } from '@mui/material';
import CartItem from "./components/CartItem";
import Recipe from "./components/Recipe";
import { CartItemType } from "./utils/types";

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch("https://fakestoreapi.com/products")).json();

function App() {

  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );
  
  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong</div>;

  return (
    <Container sx={{ my: "4rem" }}>
      <Grid container>
        <Grid container item spacing={3} xs={12} sm={9}>
          {data?.map((item) => (
            <Grid item key={item.id} xs={12} sm={4} md={3}>
              <CartItem item={item} />
            </Grid>
          ))}
        </Grid>
        <Grid item xs={12} sm={3}>
          <Recipe />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
