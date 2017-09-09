import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h1>This is the homework project for Code42.</h1>
      <h2>Requirements - Web Engineer exercise</h2>
      <p>
        Create a single page application using a modern JavaScript library or framework. Examples include but are not limited to: React, Ember.js, Vue.js. In addition, leverage an HTTP client library, such as jQuery.ajax, github/fetch, or what's included within your framework.
      </p>
      <p>
        For this single page app, create a sidebar and main content areas. This is a typical master-detail view application.
      </p>
      <p>
        In the sidebar, list each member of the Code42 organization using the public Github API.
      </p>
      <p>
        When you click on a member in the sidebar, the main content area should populate with that person's information. For each person, show the following relevant information from their profile.
      </p>
      <ul>
        <li>Their Github image</li>
        <li>A list of their repos</li>
        <li>Their public location</li>
        <li> Their public email</li>
        <li>Their join date</li>
      </ul>

      <h2>Extra credit:</h2>
      <ul>
        <li>Additional details for each Code42 Member</li>
        <li>Their total number of contributions in the last year</li>
        <li>The organizations to which they belong</li>
        <li>A list of repos they have contributed to</li>
        <li>Well-styled: feel free to use a css library including bootstrap, material design, foundation or a similar style framework.</li>
        <li>The back button works</li>
        <li>The sidebar and main content views could have loading states while data is being fetched from the server</li>
        <li>Tests</li>
      </ul>

      <h2>Jeff's Notes</h2>
      <ul>
        <li>
          I chose React as the JavaScript library; it is what I'm currently working with.
        </li>
        <li>
          I chose Cory House's React Slingshot starter kit to get this project started.  I've seen his React course on Pluralsight and liked his style.  It has hot module replacement, the basic redux plumbing, and routing/navigation ready-to-go.
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
