import React from "react";

const Blogs = () => {
  return (
    <div className="container">
      <h3 className="text-center my-4">My Blogs</h3>
      <h2>1.Difference between javascript and nodejs?</h2>
      <h4>Javascript</h4>
      <ul>
        <li>
          Javascript is a programming language that is used for writing scripts
          on the website.
        </li>
        <li>Javascript can only be run in the browsers.</li>
        <li>It is basically used on the client-side.</li>
        <li>Javascript is capable enough to add HTML and play with the DOM.</li>
        <li>
          Javascript can run in any browser engine as like JS core in safari and
          Spidermonkey in Firefox.
        </li>
        <li>Javascript is used in frontend development.</li>
        <li>Some of the javascript frameworks are RamdaJS, TypedJS, etc.</li>
      </ul>
      <h4>NodeJS</h4>
      <ul>
        <li>NodeJS is a Javascript runtime environment.</li>
        <li>
          We can run Javascript outside the browser with the help of NodeJS.
        </li>
        <li>It is mostly used on the server-side.</li>
        <li>Nodejs does not have capability to add HTML tags.</li>
        <li>
          V8 is the Javascript engine inside of node.js that parses and runs
          Javascript.
        </li>
        <li>Nodejs is used in server-side development.</li>
        <li>
          Some of the Nodejs modules are Lodash, express etc. These modules are
          to be imported from npm.
        </li>
      </ul>
      <h2>2.When should you use nodejs and when should you use mongodb?</h2>
      <p>
        Any project needs a programming environment and a runtime library that
        offers you basic programming tools/support and can compile and/or
        interpret your code. Nodejs is such as tool for the Javascript
        programming language. There are other similar tools for other languages
        such as Python, Java, PHP, C#, C++, Go, etc. So, if you want to write
        some kind of stand-alone program or server in Javascript, then you can
        use nodejs for it. If your application needs the ability to persistently
        store data in a way that you can efficiently query or update it later,
        then you would typically use some form of database. There are dozens of
        popular databases. MongoDB is one such database. MariaDB, MySql,
        CouchDB, DynamoDB (on AWS), Postgres are examples of other databases.
        Different databases have different strengths (things they are best at)
        and different ways of using them so it's a whole different question to
        choose the right/best database for what you're doing.
      </p>
      <h2>3.Differences between sql and nosql databases?</h2>
      <h4>SQL</h4>
      <ul>
        <li>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</li>
        <li>These databases have fixed or static or predefined schema</li>
        <li>These databases are not suited for hierarchical data storage.</li>
        <li>These databases are best suited for complex queries</li>
        <li>Vertically Scalable</li>
        <li>Follows ACID property</li>
      </ul>
      <h4>NoSQL</h4>
      <ul>
        <li>Non-relational or distributed database system.</li>
        <li>They have dynamic schema</li>
        <li>These databases are best suited for hierarchical data storage.</li>
        <li>These databases are not so good for complex queries</li>
        <li>Horizontally scalable</li>
        <li>Follows CAP(consistency, availability, partition tolerance)</li>
      </ul>
      <h2>4.What is the purpose of jwt and how does it work?</h2>
      <p>
        JWT, or JSON Web Token, is an open standard used to share security
        information between two parties — a client and a server. Each JWT
        contains encoded JSON objects, including a set of claims. JWTs are
        signed using a cryptographic algorithm to ensure that the claims cannot
        be altered after the token is issued.
        <br />
        JWTs differ from other web tokens in that they contain a set of claims.
        Claims are used to transmit information between two parties. What these
        claims are depends on the use case at hand. For example, a claim may
        assert who issued the token, how long it is valid for, or what
        permissions the client has been granted. A JWT is a string made up of
        three parts, separated by dots (.), and serialized using base64. In the
        most common serialization format, compact serialization, the JWT looks
        something like this: xxxxx.yyyyy.zzzzz. Once decoded, you will get two
        JSON strings: The header and the payload. The signature. The JOSE (JSON
        Object Signing and Encryption) header contains the type of token — JWT
        in this case — and the signing algorithm. The payload contains the
        claims. This is displayed as a JSON string, usually containing no more
        than a dozen fields to keep the JWT compact. This information is
        typically used by the server to verify that the user has permission to
        perform the action they are requesting. There are no mandatory claims
        for a JWT, but overlaying standards may make claims mandatory. For
        example, when using JWT as bearer access token under OAuth2.0, iss, sub,
        aud, and exp must be present. some are more common than others. The
        signature ensures that the token hasn’t been altered. The party that
        creates the JWT signs the header and payload with a secret that is known
        to both the issuer and receiver, or with a private key known only to the
        sender. When the token is used, the receiving party verifies that the
        header and payload match the signature.
      </p>
    </div>
  );
};

export default Blogs;
