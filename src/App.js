import React, { useState } from 'react';
import ProductManagement from './ProductManagement';
import CategoryManagement from './CategoryManagement';
import StockManagement from './StockManagement';
import TransactionManagement from './TransactionManagement';
import TransactionReport from './TransactionReport';

const App = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [transactions, setTransactions] = useState([]);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const updateProduct = (updatedProduct) => {
    setProducts((currentProducts) => {
      return currentProducts.map((product) => {
        if (product.id === updatedProduct.id) {
          return updatedProduct;
        }
        return product;
      });
    });
  };

  const deleteProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

  const completeTransaction = (completedTransactions) => {
    const totalTransactionPrice = completedTransactions.reduce((total, transaction) => {
      return total + transaction.quantity * transaction.price;
    }, 0);

    setTransactions([...transactions, ...completedTransactions]);

    

    console.log('Total Transaction Price:', totalTransactionPrice);
  };

  const addCategory = (newCategory) => {
    setCategories([...categories, newCategory]);
  };

  const updateCategory = (index, updatedCategory) => {
    const updatedCategories = [...categories];
    updatedCategories[index] = updatedCategory;
    setCategories(updatedCategories);
  };

  const deleteCategory = (index) => {
    const updatedCategories = [...categories];
    updatedCategories.splice(index, 1);
    setCategories(updatedCategories);
  };

  const updateStock = (productId, newStock) => {
    const updatedProducts = products.map((product) =>
      product.id === productId ? { ...product, stock: newStock } : product
    );
    setProducts(updatedProducts);
  };

  return (
    <div className="App">
      <ProductManagement
        products={products}
        categories={categories}
        addProduct={addProduct}
        updateProduct={updateProduct}
        deleteProduct={deleteProduct}
      />
      <CategoryManagement
        categories={categories}
        addCategory={addCategory}
        updateCategory={updateCategory}
        deleteCategory={deleteCategory}
      />
      <StockManagement products={products} updateStock={updateStock} />
      <TransactionManagement
        products={products}
        updateStock={updateStock}
        completeTransaction={completeTransaction}
      />
      <TransactionReport transactions={transactions} />
    </div>
  );
};

export default App;
