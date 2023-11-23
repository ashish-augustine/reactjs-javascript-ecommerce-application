import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Hello! Welcome. We’re so glad you’re here.

You can find us — the Target Team — at your favorite store, in your community, across the country and around the world. There are more than 400,000 team members across the globe, all working together for one important reason…
    To help all families discover the joy of everyday life.

That’s our purpose. Our mission. The promise of surprises, fun, ease and inspiration at every turn, no matter when, where or how you shop.

That quest to bring joy is at the center of every business decision we make. It gets our teams excited to come to work each day. And we bring it to life in so many ways.

<br/>
      We’re dedicated to being a good neighbor and working with our communities and partners to make life a little better everywhere we do business. Come on in and take a look around!
      
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
