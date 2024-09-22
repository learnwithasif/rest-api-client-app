import React, { useState, useEffect} from 'react';

import {
    getProducts,
    addProduct,
    updateProduct,
    patchProduct,
    deleteProduct
} from './ProductServices';

function Products(){
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({name: '', price: ''});
    const [updateId, setUpdateId] = useState('');
    const [patchId, setPatchId] = useState('');
    const [deleteId, setDeleteId] = useState('');
    const [updatedProduct, setUpdatedProduct] = useState({name: '', price: ''});
    const [patchedProduct, setPatchedProduct] = useState({name: '', price: ''});

    useEffect(()=>{
        loadProducts();
    }, []);

    const loadProducts = async () =>{
        const response = await getProducts();
        setProducts(response.data);
    };

    const handleAddProduct = async () =>{
        await addProduct({id: products.length + 1, name: newProduct.name, price: newProduct.price});
        loadProducts();
        setNewProduct({name: '', price: ''});
    };

    const handleUpdateProduct = async () => {
        await updateProduct(updateId, updatedProduct);
        loadProducts();
        setUpdatedProduct({name: '', price: ''});
        setUpdateId('');
    };

    const handlePatchProduct = async () => {
        await patchProduct(patchId, patchedProduct);
        loadProducts();
        setPatchedProduct({name: '', price: ''});
        setPatchId('');
    };

    const handleDeleteProduct = async () => {
        await deleteProduct(deleteId);
        loadProducts();
        setDeleteId('');
    };

    return(
        <div className="container mt-5">
            <h1 className="text-center mb-4">Products Management System</h1>

            {/*Display all products*/}
            <div className="card mb-4">
                <div className="card-header">
                    <h3>All Products</h3>
                </div>
                <ul className="list-group list-group-flush">
                    {products.map((product) => (
                        <li key={product.id} className='list-group-item'>
                            Product: {product.name} - Price: ${product.price}
                        </li>
                    ))}
                </ul>
            </div>

            {/*Add a new Product*/}
            <div className='card mb-4'>
                <div className='card-header'>
                    <h3>Add Product</h3>
                </div>
                <div className='card-body'>
                    <div className='mb-3'>
                        <input
                            type='text'
                            className='form-control'
                            placeholder='Product Name'
                            value={newProduct.name}
                            onChange={(e)=> setNewProduct({...newProduct, name: e.target.value})}
                        />
                        <input
                            type='number'
                            className='form-control'
                            placeholder='Product Price'
                            value={newProduct.price}
                            onChange={(e)=> setNewProduct({...newProduct, price: e.target.value})}
                        />
                    </div>
                    <button className='btn btn-primary' onClick={handleAddProduct}>
                        Add Product
                    </button>
                </div>
            </div>

            {/*Update a product*/}
            <div className='card mb-4'>
                <div className='card-header'>
                    <h3>Update Product</h3>
                </div>
                <div className='card-body'>
                    <div className='mb-3'>
                        <input
                            type='text'
                            className='form-control'
                            placeholder='Product ID'
                            value={updateId}
                            onChange={(e)=> setUpdateId(e.target.value)}
                        />
                        <input
                            type='text'
                            className='form-control'
                            placeholder='New Product Name'
                            value={updatedProduct.name}
                            onChange={(e)=> setUpdatedProduct({...updatedProduct, name: e.target.value})}
                        />
                        <input
                            type='number'
                            className='form-control'
                            placeholder='New Product Price'
                            value={updatedProduct.price}
                            onChange={(e)=> setUpdatedProduct({...updatedProduct, price: e.target.value})}
                        />
                    </div>
                    <button className='btn btn-warning' onClick={handleUpdateProduct}>
                        Update Product
                    </button>
                </div>
            </div>

            {/*Patch a product*/}
            <div className='card mb-4'>
                <div className='card-header'>
                    <h3>Patch Product</h3>
                </div>
                <div className='card-body'>
                    <div className='mb-3'>
                        <input
                            type='text'
                            className='form-control'
                            placeholder='Product ID'
                            value={patchId}
                            onChange={(e)=> setPatchId(e.target.value)}
                        />
                        <input
                            type='text'
                            className='form-control'
                            placeholder='Patch Product Name'
                            value={patchedProduct.name}
                            onChange={(e)=> setPatchedProduct({...patchedProduct, name: e.target.value})}
                        />
                        <input
                            type='number'
                            className='form-control'
                            placeholder='Patch Product Price'
                            value={patchedProduct.price}
                            onChange={(e)=> setPatchedProduct({...patchedProduct, price: e.target.value})}
                        />
                    </div>
                    <button className='btn btn-info' onClick={handlePatchProduct}>
                        Patch Product
                    </button>
                </div>
            </div>

            {/*Delete a product*/}
            <div className='card mb-4'>
                <div className='card-header'>
                    <h3>Delete Product</h3>
                </div>
                <div className='card-body'>
                    <div className='mb-3'>
                        <input
                            type='text'
                            className='form-control'
                            placeholder='Product ID'
                            value={deleteId}
                            onChange={(e)=> setDeleteId(e.target.value)}
                        />
                    </div>
                    <button className='btn btn-danger' onClick={handleDeleteProduct}>
                        Delete Product
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Products;