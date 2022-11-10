import React from "react";
import useTitle from "../Hooks/useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <div>
      <section className="bg-gradient-to-r from-black to-green-900 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: `url("https://i.ibb.co/9btzhBd/barber.jpg")`,
            }}
          >
            <div className="hero-overlay bg-opacity-90"></div>
            <div>
              <div className="py-8">
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-green-900">
                  <div className="mt-3 text-left">
                    <p className="text-2xl font-bold hover:underline">
                      No.1- Difference between SQL and NoSQL?
                    </p>
                    <p className="mt-2">
                      1. SQL databases are relational, NoSQL databases are
                      non-relational. <br />
                      2. SQL databases use structured query language and have a
                      predefined schema. NoSQL databases have dynamic schemas
                      for unstructured data. <br />
                      3. SQL databases are vertically scalable, while NoSQL
                      databases are horizontally scalable. <br />
                      4. SQL databases are table-based, while NoSQL databases
                      are document, key-value, graph, or wide-column stores.{" "}
                      <br />
                      5. SQL databases are better for multi-row transactions,
                      while NoSQL is better for unstructured data like documents
                      or JSON.
                    </p>
                  </div>
                </div>
                <div className="container max-w-4xl px-10 py-6 mx-auto my-5 rounded-lg shadow-sm dark:bg-green-900">
                  <div className="mt-3 text-left">
                    <p className="text-2xl font-bold hover:underline">
                      No.2- What is JWT, and how does it work?
                    </p>
                    <p className="mt-2">
                      JWT, or JSON Web Token, is an open standard used to share
                      security information between two parties — a client and a
                      server. Each JWT contains encoded JSON objects, including
                      a set of claims. JWTs are signed using a cryptographic
                      algorithm to ensure that the claims cannot be altered
                      after the token is issued.
                      <br />
                      A JWT is a string made up of three parts, separated by
                      dots (.), and serialized using base64. In the most common
                      serialization format, compact serialization, the JWT looks
                      something like this: xxxxx.yyyyy.zzzzz.
                      <br />
                      Once decoded, you will get two JSON strings:
                      <br />
                      1. The header and the payload. <br />
                      2. The signature. <br />
                      The JOSE (JSON Object Signing and Encryption) header
                      contains the type of token — JWT in this case — and the
                      signing algorithm. <br />
                      The payload contains the claims. This is displayed as a
                      JSON string, usually containing no more than a dozen
                      fields to keep the JWT compact. This information is
                      typically used by the server to verify that the user has
                      permission to perform the action they are requesting.
                      <br />
                      There are no mandatory claims for a JWT, but overlaying
                      standards may make claims mandatory. For example, when
                      using JWT as bearer access token under OAuth2.0, iss, sub,
                      aud, and exp must be present. some are more common than
                      others. <br />
                      The signature ensures that the token hasn't been altered.
                      The party that creates the JWT signs the header and
                      payload with a secret that is known to both the issuer and
                      receiver, or with a private key known only to the sender.
                      When the token is used, the receiving party verifies that
                      the header and payload match the signature.
                    </p>
                  </div>
                </div>
                <div className="container max-w-4xl px-10 py-6 mx-auto my-5 rounded-lg shadow-sm dark:bg-green-900">
                  <div className="mt-3 text-left">
                    <p className="text-2xl font-bold hover:underline">
                      No.3- What is the difference between javascript and
                      NodeJS?
                    </p>
                    <p className="mt-2">
                      Here, we are going to discuss the main differences between
                      JavaScript and Node.js:
                      <br />
                      1. JavaScript is a lightweight, cross-platform,
                      interpreted scripting programming language that is
                      primarily used for client-side scripting. It's built into
                      both Java and HTML. On the other hand, Node.js is a
                      server-side scripting language based on the Google Chrome
                      V8 engine. As a result, it's used to build network-centric
                      applications. It is a distributed system that is used for
                      data-intensive real-time applications.
                      <br />
                      2. JavaScript is a simple programming language that could
                      be run in any browser that supports the JavaScript Engine.
                      On the other hand, Node.js is a running environment or
                      interpreter for the JavaScript programming language. It
                      needs libraries that may be easily accessed from
                      JavaScript programming to make it more useful.
                      <br />
                      3. JavaScript can run on any engine, including Firefox's
                      Spider Monkey, Safari's JavaScript Core, and V8 (Google
                      Chrome). As a result, JavaScript programming is very
                      simple to create, and any running environment is
                      equivalent to a proper browser. On the other hand, Node.js
                      only supports the V8 engine, which is exclusive to Google
                      Chrome. However, written JavaScript code can run in any
                      environment, regardless of whether it supports the V8
                      engine.
                      <br />
                      4. A particular non-blocking task is needed to access any
                      operating system. There are some basic objects in
                      JavaScript, but they are all os-specific. For example,
                      ActiveX Control is a Windows-only application. However,
                      Node.js is granted the ability to run non-blocking tasks
                      unique to the operating system from any JavaScript
                      programming. There are no os-specific constants in it.
                      Node.js is well-versed in creating a clear binding with
                      the file system, allowing the developer to read and write
                      to disk.
                      <br />
                      5. For a single web application, JavaScript is typically
                      used for any client-side operation. An operation may be
                      dealing with business validation, dynamic page display at
                      a set time interval, or a simple Ajax call. For any web
                      application, these are used for a maximum amount of time.
                      On the other hand, Node.js is generally used for
                      non-blocking accessibility or execution of any operating
                      system. On an operating system, a non-blocking operation
                      involves generating or executing a shell script,
                      retrieving unique hardware-related information in a single
                      call, obtaining installed certificate details in the
                      system, or performing a large number of specified tasks.
                      <br />
                    </p>
                  </div>
                </div>
                <div className="container max-w-4xl px-10 py-6 mx-auto my-5 rounded-lg shadow-sm dark:bg-green-900">
                  <div className="mt-3 text-left">
                    <p className="text-2xl font-bold hover:underline">
                      No.4- How does Node JS handle multiple requests at the
                      same time?
                    </p>
                    <p className="mt-2">
                      Before getting into the Node server architecture, to take
                      a look at typical multithreaded request response model,
                      the web server would have multiple threads and when
                      concurrent requests get to the webserver, the webserver
                      picks threadOne from the threadPool and threadOne
                      processes requestOne and responds to clientOne and when
                      the second request comes in, the web server picks up the
                      second thread from the threadPool and picks up requestTwo
                      and processes it and responds to clientTwo. threadOne is
                      responsible for all kinds of operations that requestOne
                      demanded including doing any blocking IO operations.
                      <br />
                      NodeJS Web Server maintains a limited Thread Pool to
                      provide services to client requests. Multiple clients make
                      multiple requests to the NodeJS server. NodeJS receives
                      these requests and places them into the EventQueue .
                      NodeJS server has an internal component referred to as the
                      EventLoop which is an infinite loop that receives requests
                      and processes them. This EventLoop is single threaded. In
                      other words, EventLoop is the listener for the EventQueue.
                      <br />
                      Node.js accepts the request from the clients and sends the
                      response, while working with the request node.js handles
                      them with a single thread. To operate I/O operations or
                      requests node.js use the concept of threads. Thread is a
                      sequence of instructions that the server needs to perform.
                      It runs parallel on the server to provide the information
                      to multiple clients. Node.js is an event loop
                      single-threaded language. It can handle concurrent
                      requests with a single thread without blocking it for one
                      request.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
