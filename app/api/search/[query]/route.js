import { NextResponse } from "next/server";

export async function GET(request, { params: { query } }) {
  let q = request.nextUrl.searchParams;

  const { category, minPrice, maxPrice, size } = Object.fromEntries(q);
  const filters = {};
  if (category) {
    filters.category = {
      in: category.split(","),
    };
  }

  if (minPrice) {
    filters.price = {
      gte: parseFloat(minPrice),
    };
  }

  if (maxPrice) {
    filters.price = {
      ...filters.price,
      lte: parseFloat(maxPrice),
    };
  }

  if (size) {
    filters.size = {
      in: size.split(","),
    };
  }
  
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products`
    );
    const products = await res.json();

    // do search on products name, description, and category
    let searchResults = products.filter((product) => {
      return (
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase()) ||
        product.brand.toLowerCase().includes(query.toLowerCase())
      );
    });

    // now filter the search results based on the filters
    for (const filter in filters) {
      searchResults = searchResults.filter((product) => {
        return filters[filter].in.includes(product[filter]);
      });
    }

    return NextResponse.json(searchResults, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(error, {
      status: 500,
    });
  }
}
