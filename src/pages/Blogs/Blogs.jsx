import SectionTitle from "../../components/SectionTitle";
import { usePDF } from 'react-to-pdf';

const Blogs = () => {
    const { toPDF, targetRef } = usePDF({ filename: 'page.pdf' });
    return (
        <div>
            <div className="flex justify-end pt-4">
                <button className="btn-login-logout" onClick={() => toPDF()}>Download PDF</button>
            </div>
            <SectionTitle heading="My Blog" subheading="Read Now"></SectionTitle>
            <div ref={targetRef}>
                <div className="bg-slate-100 p-4 mb-4 rounded-md">
                    <h3 className="text-xl underline">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
                    <div>
                        <h2>Access Tokens and Refresh Tokens</h2>

                        <h3>Access Token:</h3>
                        <p>
                            An access token is a credential used by a client to access protected resources, such as a user's data on a server or API. These resources can include things like a user's profile, photos, or any other data the user has authorized the client to access.
                        </p>
                        <p>
                            Access tokens are time-limited and are specific to the user and the permissions they've granted to the client. They prove the client's authorization to access the user's data.
                        </p>

                        <h3>Refresh Token:</h3>
                        <p>
                            A refresh token is a longer-lived credential used to obtain a new access token when the current access token expires. Refresh tokens are not meant to be shared with the client and are used only by the authorization server.
                        </p>
                        <p>
                            Refresh tokens are more secure, are kept confidential, and have a longer validity period. They are used to request a new access token without requiring the user to re-authenticate when the access token expires.
                        </p>

                        <h3>How They Work:</h3>
                        <ol>
                            <li><strong>Initial Authorization:</strong>
                                <p>
                                    The client initiates the authentication and authorization process by redirecting the user to an authorization server, typically via a web page.
                                </p>
                            </li>

                            <li><strong>Accessing Protected Resources:</strong>
                                <p>
                                    The client uses the access token to make requests to the resource server (e.g., an API). The resource server validates the access token and grants access to the requested resource if the token is valid and has the necessary permissions.
                                </p>
                            </li>
                        </ol>

                        <h3>Where to Store Tokens on the Client-Side:</h3>
                        <ul>
                            <li>Access tokens should be stored securely on the client-side but should never be exposed to the user or publicly shared.</li>
                            <li>Use secure storage mechanisms such as browser Web Storage (localStorage or sessionStorage) or mobile device secure storage (e.g., Keychain on iOS or SharedPreferences on Android).</li>
                            <li>Refresh tokens should be stored even more securely, possibly in a secure server-side component, as they are used to obtain new access tokens.</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-slate-100 p-4 mb-4 rounded-md">
                    <h2 className="text-xl underline">What is express js?</h2>
                    <p>Express.js is the most popular web framework for Node.js. It is designed for building web applications and APIs and has been called the de facto standard server framework for Node.js.</p>

                    <p>Building a backend from-scratch for an application in Node.js can be tedious and time consuming. From setting up ports to route handlers, writing all of the boilerplate code takes away from what really matters, which is writing the business logic for an application. By using web frameworks like Express.js, developers can save time and focus on other important tasks.</p>
                </div>

                <div className="bg-slate-100 p-4 mb-4 rounded-md">
                    <h2 className="text-xl underline">What is Nest JS?</h2>
                    <p>NestJS is a popular open-source, back-end framework for Node.js and TypeScript-based, server-side applications. It is intended to provide a solid foundation for developing server-side applications by leveraging well-known patterns and the best practices from other frameworks such as Angular, Express.js, and others.</p>

                    <p>NestJS is a modular and adaptable framework that allows developers to easily organize their code into smaller and reusable modules. It also includes a robust dependency injection framework that simplifies managing application components and dependencies. NestJS also supports several server-side rendering techniques and interfaces with other Node.js modules and tools.</p>
                </div>

                <div className="bg-slate-100 p-4 mb-4 rounded-md">
                    <h2 className="text-xl underline"> My Server side code Explanation</h2>

                    <h3>Import Dependencies:</h3>
                    <p>
                        It imports the necessary Node.js modules and libraries such as express, cors, dotenv, and MongoDB-related modules.
                    </p>

                    <h3>Configure Express and MongoDB Connection:</h3>
                    <p>
                        It sets up the Express application, enabling CORS (Cross-Origin Resource Sharing) and JSON request parsing.
                        It configures the MongoDB connection string and initializes a MongoClient instance with specified Server API Version options.
                    </p>

                    <h3>Database Collections:</h3>
                    <p>
                        It defines three MongoDB collections: "categories," "jobs," and "appliedJobs."
                    </p>

                    <h3>GET API Endpoints:</h3>
                    <p>
                        It defines several GET endpoints for retrieving data from the database. For example:
                        <ul>
                            <li>/categories: Retrieves all categories.</li>
                            <li>/jobs: Retrieves jobs, optionally filtered by category or user email.</li>
                            <li>/jobs/:id: Retrieves a single job by its unique identifier (ID).</li>
                            <li>/appliedJobs: Retrieves applied jobs for a specific user.</li>
                        </ul>
                        These endpoints use async/await to interact with the MongoDB collections and return data as JSON responses.
                    </p>

                    <h3>POST API Endpoints:</h3>
                    <p>
                        It defines two POST endpoints for adding new data to the database. For example:
                        <ul>
                            <li>/jobs: Adds a new job to the "jobs" collection.</li>
                            <li>/appliedJobs: Adds a new applied job to the "appliedJobs" collection.</li>
                        </ul>
                        These endpoints use async/await to insert data into the respective collections and return the result as a JSON response.
                    </p>

                    <h3>PATCH API Endpoint:</h3>
                    <p>
                        It defines a PATCH endpoint to update a job's "jobApplicants" count. This is typically used when someone applies for a job.
                        The endpoint uses async/await to update the "jobs" collection and responds with a success message or an error message based on the update's success.
                    </p>

                    <h3>Ping MongoDB:</h3>
                    <p>
                        A commented-out section that can be used to ping the MongoDB deployment to confirm a successful connection.
                    </p>

                    <h3>Default Route:</h3>
                    <p>
                        The root path ("/") is configured to return a simple "dream jobs server is running" message.
                    </p>

                    <h3>Start the Server:</h3>
                    <p>
                        It starts the Express server, listening on the specified port (or 3000 if not specified), and logs a message indicating the server is running.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;