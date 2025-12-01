
 const centralProduct = [
    {
        id: 1,
        productName: ' Smart Fit Band',
        productPrice: '6000',
        imageSource: require('../../assets/watches/fit1.png')

    },
    {
        id: 2,
        productName: ' Smart Fit Band',
        productPrice: '6000',
        imageSource: require('../../assets/watches/fit2.png')

    },
    {
        id: 3,
        productName: ' Smart Watch',
        productPrice: '6000',
        imageSource: require('../../assets/watches/fit3.png')

    },
    {
        id: 4,
        productName: ' Smart Fit Band',
        productPrice: '6000',
        imageSource: require('../../assets/watches/fit4.png')

    }

]

// Optional helper function to find a product by its ID
export function getProductById(id) {
    const numericId = parseInt(id);
    return centralProduct.find((product) => product.id === numericId);
  }

export default centralProduct