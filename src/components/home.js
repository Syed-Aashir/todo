import React from 'react';
import {useState} from 'react'
import { BrowserRouter, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';

function Home(){
    const [search, setSearch] = useState("");
    function getData(e){
        setSearch(e.target.value);
    }
    const[order, setOrder] = useState("");
    function getOrderData(e){
        setOrder(e.target.value);
    }
    const[filter, setFilter] = useState("");
    function getFilterData(e){
        setFilter(e.target.value);
    }
    const navigate = useNavigate();
    function logValues(){
        console.log(search);
        console.log(order);
        console.log(filter);
        navigate('/newContact');
    }
    return(
        <div>
            <div class="container flex">
        <div class="box-wrapper">
            <div class="filters-wrapper">
                <h2>Contacts</h2>
                <label><strong>Search Contact:</strong></label>
                <input
                type="text"
                name="searchContact"
                id="search-contact"
                placeholder="Search by name"
                onChange={getData}
                />
                <div class="filter-container">
                    <div class="order-wrapper">
                    <label><strong>Order by:</strong></label>
                    <select id="order-select" onClick={getOrderData} defaultValue = {""}>
                        <option value="" disabled hidden>All Enteries</option>
                        <option value="1">Alphabetical order</option>
                        <option value="-1">Reverse Order</option>
                    </select>
                    </div>
                    <div class="filter-wrapper">
                    <label><strong>Filter by:</strong></label>
                    <select id="filter-select" onClick={getFilterData}>
                        <option value="">All Contacts</option>
                        <option value="phoneNumber">Contacts with phone Numbers</option>
                        <option value="emailAddress">Contacts having Email Id</option>
                    </select>
                    </div>
                </div>
            </div>

            <div id="contacts-list">
            </div>

            <div id="pagination-wrapper">
            </div>
            <a id="new-contact-button" onClick={logValues}>Add Contact</a>
        </div>
    </div>
        </div>
    );
}

export default Home;