import React, { useState, useEffect } from "react";
import ArticlesCard, { TopPostCard, TopPostsCardsHead } from "../Components/ArticlesCard";
import Header from "../Components/Header";


const Technology = () => {
  const [Post, setPost] = useState("");
  const [FirstPost, setFirstPost] = useState("");
  const [TopPost, setTopPost] = useState("");

  useEffect(() => {
    fetch("https://blog-node-backend-7wochun1i-maheshv99.vercel.app/technologyPost")
      .then((res) => res.json()).then((json) => setPost(json));
  }, []);

  useEffect(() => {
    fetch("https://blog-node-backend-7wochun1i-maheshv99.vercel.app/technologyFirstPost")
      .then((res) => res.json()).then((json) => setFirstPost(json));
  }, []);

  useEffect(() => {
    fetch("https://blog-node-backend-7wochun1i-maheshv99.vercel.app/technologyTopPost")
      .then((res) => res.json()).then((json) => setTopPost(json));
  }, []);
  return (
    <>
      <Header />
      <div className="container">
        <div className="d-flex content-box">
          <div className="content-box-main">
            <h2 className=" mt-3">Technology</h2>
            <div className="line"></div>

            {Post && Post.map((val) => {
              return (
                <>
                  <ArticlesCard id={val.id} img={val.img} title={val.title}
                    details={val.details} date={val.date} type={val.type}/>
                  <hr />
                </>
              );
            })}
          </div>
          <div className="content-box-side">
            <h2 className="mt-3">Top Posts</h2>
            <div className="line mb-4"></div>

            {FirstPost && FirstPost.map((val) => {
              return (
                <>
                  <TopPostCard id={val.id} img={val.img} title={val.title}
                    date={val.date} type={val.type} num={val.num}/>
                  <hr />
                </>
              );
            })}

            {TopPost && TopPost.map((val) => {
              return (
                <>
                  <TopPostsCardsHead id={val.id} img={val.img} title={val.title}
                    date={val.date} type={val.type} num={val.num} />
                  <hr />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Technology;
