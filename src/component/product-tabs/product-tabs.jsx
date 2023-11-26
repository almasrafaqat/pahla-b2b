// All Products
const { allProducts } = otherProps;

// Create a dictionary to group products by category
const productsByCategory = allProducts.reduce((acc, product) => {
  acc[product.category] = [...(acc[product.category] || []), product];
  return acc;
}, {});

// Get an array of unique categories
const categories = Object.keys(productsByCategory);


// Select unique categories for each section
const topRankingCategories = categories.slice(0, 3);
const newArrivalCategories = categories.slice(3, 6);

// Select unique products for each category
const topRankingProducts = topRankingCategories.flatMap(category =>
  productsByCategory[category].slice(0, 2) // Selecting the first 2 products for each category in section 1
);

const newArrivalProducts = newArrivalCategories.flatMap(category =>
  productsByCategory[category].slice(0, 2) // Selecting the first 2 products for each category in section 2
);

// Output
<ProductColumn>
  {topRankingCategories.map(category => (
    <ProductContainer key={category}>
      <ProductHeading>{category}</ProductHeading>
      <p>Product Count: {productsByCategory[category].length}</p>

      {topRankingProducts.filter(product => product.category === category).map(product => (
        <ProductCard key={product.id}>
          <Link to="/">
            <ProductImage src={product.imageUrl} alt="Product--1" />
          </Link>
          <ProductInfo>
            <Link to="/">
              <h4>{product.title}</h4>
            </Link>
            <FlexContainer>
              <span>Min.Order:</span><SpanTag>5 Pieces</SpanTag>
            </FlexContainer>
            <FlexContainer color="true">
              <QuotationIcon /> <SpanTag>Request Quotation</SpanTag>
            </FlexContainer>
            <FlexContainer color="true">
              <SampleIcon /> <SpanTag>Request Sample</SpanTag>
            </FlexContainer>
          </ProductInfo>
        </ProductCard>
      ))}

    </ProductContainer>
  ))}
</ProductColumn>

// =======================================


 // Select a specific category for section 3
 const specificCategoryForSection3 = 'Books';
 const section3Categories = [specificCategoryForSection3, ...shuffledCategories.slice(6, 9)];

 // Select unique products for each category in section 3
 const section3Products = section3Categories.flatMap(category =>
   productsByCategory[category].slice(0, 2)

  // output

  {/* Display products grouped by category with count for the third section */}
  {section3Categories.map(category => (
    <div key={category}>
      <h2>{category}</h2>
      <p>Product Count: {section3Products.filter(product => product.category === category).length}</p>
      <ul>
        {section3Products
          .filter(product => product.category === category)
          .map(product => (
            <li key={product.id}>{product.name}</li>
          ))}
      </ul>
    </div>
  ))}


// minmalCode 
const getProductsByCategory = (category) =>
allProducts.filter((product) => product.category === category).slice(0, 3);

  <ProductColumn>

              {[['beauty', 'smartphone', 'shoes'], ['accessories', 'headphone', 'smartwatch'], ['led', 'computer', 'shoes']].map((sectionCategories, index) => (
                <ProductContainer key={index}>
                  {sectionCategories.map(category => (
                    <div key={category}>
                      <ProductHeading>{category}</ProductHeading>
                      <p>Product Count: {getProductsByCategory(category).length}</p>
                      <ProductCard>
                        {getProductsByCategory(category).map(product => (
                          <>
                            <Link to="/">
                              <ProductImage src={product.imageUrl} alt={`Product--${product.id}`} />
                            </Link>
                            <ProductInfo>
                              <Link to="/">
                                <h4>{product.title}</h4>
                              </Link>
                              <FlexContainer>
                                <span>Min.Order:</span><SpanTag>5 Pieces</SpanTag>
                              </FlexContainer>
                              <FlexContainer color="true">
                                <QuotationIcon /> <SpanTag>Request Quotation</SpanTag>
                              </FlexContainer>
                              <FlexContainer color="true">
                                <SampleIcon /> <SpanTag>Request Sample</SpanTag>
                              </FlexContainer>
                            </ProductInfo>
                          </>
                        ))}
                      </ProductCard>
                    </div>
                  ))}
                </ProductContainer>
              ))}

            </ProductColumn>

// Custom all Products 

const { allProducts } = otherProps;
  const TotalProCol = Math.ceil(allProducts.length / prductNumber);
<ProductColumn>
              {
                allProducts.slice(0, TotalProCol).map((_, ind) => {
                  var startIndex = ind * prductNumber;
                  var endIndex = startIndex + prductNumber;
                  return (
                    <ProductContainer key={ind}>
                      <ProductHeading>100% Polyster Soccer Jersey</ProductHeading>
                      {
                        allProducts.slice(startIndex, endIndex).map((product) => {
                          return (
                            <ProductCard key={product.id}>
                              <Link to="/">
                                <ProductImage src={product.imageUrl} alt={`Product--${product.id}`} />
                              </Link>
                              <ProductInfo>
                                <Link to="/">
                                  <h4>{product.title}</h4>
                                </Link>
                                <FlexContainer>
                                  <span>Min.Order:</span><SpanTag>5 Pieces</SpanTag>
                                </FlexContainer>
                                <FlexContainer color="true">
                                  <QuotationIcon /> <SpanTag>Request Quotation</SpanTag>
                                </FlexContainer>
                                <FlexContainer color="true">
                                  <SampleIcon /> <SpanTag>Request Sample</SpanTag>
                                </FlexContainer>
                              </ProductInfo>
                            </ProductCard>
                          )
                        })
                      }

                    </ProductContainer>

                  )
                })
              }
            </ProductColumn>