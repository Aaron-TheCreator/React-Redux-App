import React, { useState } from "react";
import { connect } from "react-redux";
// import { useForm } from "../hooks/useForm";

// import { }


const LyricPage = (props) => {
    const [lyricPage, setLyricPage] = useState(false);

    let inputInfo = {
        artist: JSON.stringify(window.localStorage.getItem("search-vars").artist),
        title: JSON.stringify(window.localStorage.getItem("search-vars").title)
    }

    return (
        <>
            {
                /*
            ifFetching? showFetching message (not lyricpage)
            ifError? showError message (not lyricpage)
            if not fetching or error? show lyricpage
            */ 

                props.isLoading ? (
                    <div className="loading">LOADING...</div>
                ) : props.error ? (
                <div className="error">Sorry, We Don't Know That Song</div>
                ) : !props.lyrics[0] ? (
                    <div>Sorry We Dont Know That Song</div>
                ) : (
                    props.lyrics.map((lyric) => {
                        return <div className="lyric-page">
                            <section className="lyric-card">
                    {/* <h3>{inputInfo.artist}</h3>
                    <h4>{inputInfo.title}</h4> */}
                    <p className="lyric-display">{lyric}</p>
                            </section>
                        </div>
                    })
                )

            }
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        isLoading: state.is_loading,
        lyrics: state.lyricData,
        error: state.error
    };
};

export default connect(mapStateToProps, {})(LyricPage);