import React, { useState } from "react";
import { connect } from "react-redux";
import { useForm } from "../hooks/useForm";

import { loadDataForLocation } from "../actions";


const SearchForm = (props) => {
    // component level state for intial state and handle changes
    // const [artistName, setArtistName] = useState("Ice Cube");

    // const [songTitle, setSongTitle] = useState("It Was A Good Day");

    // const handleArtistChange = (e) => {
    //     setArtistName(e.target.value);
    // };

    // const handleTitleChange = (e) => {
    //     setSongTitle(e.target.name);
    // };

    // const handleClick = (e) => {
    //     e.preventDefault();
    //     // load data from api
    //     // props.loadDataForLocation()
    // };
    const [values, handleChanges, handleSubmit] = useForm(
        "search-vars",
        {
          artist: "",
          title: ""
        },
        () => {
          props.loadDataForLocation(values);
        }
      );

    return (
        <div>
            <form
                onSubmit={handleSubmit}>
                <label htmlFor="artist">
                    Artist 
                    <input
                        id="artist"
                        name="artist"
                        value={values.artist}
                        onChange={handleChanges}
                    />
                </label>
                <label htmlFor="title">
                    Song Title
                    <input
                        id="title"
                        name="title"
                        value={values.title}
                        onChange={handleChanges}
                    />
                </label>
                <input type="submit" value="search" className="button"/>
            </form>
        </div>
    )
};

export default connect(() => null, { loadDataForLocation })(SearchForm);