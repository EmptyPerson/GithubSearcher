import React, {useContext, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {GithubContext} from "../context/github/githubContext";
import {Repos} from "../components/Repos";

export const Profile = () => {
    const {getUser, getRepos, loading, user, repos} = useContext(GithubContext)
    const urlName = useParams()['name']
    const {name, company, avatar_url, location, bio, blog, login, html_url, followers, public_repos, public_gists, following} = user

    useEffect(() => {
        getUser(urlName)
        getRepos(urlName)
        // eslint-disable-next-line
    }, [])

    if(loading) {
        return <p className="text-center">Loading...</p>
    }

    return (
        <React.Fragment>
            <Link to="/" className="btn btn-link">Main</Link>
            <div className="card mb-4">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-3 text-center">
                            <img src={avatar_url} alt={name} style={{width: '150px'}}/>
                            <h1>{name}</h1>
                            {location && <p>Location: {location}</p>}
                        </div>
                        <div className="col">
                            {
                                bio && <React.Fragment>
                                    <h3>BIO</h3>
                                    <p>{bio}</p>
                                </React.Fragment>
                            }
                            <a href={html_url} target="_blank" className="btn btn-dark" rel="noreferrer">Open profile by Git</a>
                            <ul>
                                {
                                    login && <li>
                                        <strong>Username: </strong> {login}
                                    </li>
                                }
                                {
                                    company && <li>
                                        <strong>Company: </strong> {company}
                                    </li>
                                }
                                {
                                    blog && <li>
                                        <strong>Website: </strong> {blog}
                                    </li>
                                }
                            </ul>
                            <div className="badge bg-primary">Followers: {followers}</div>
                            <div className="badge bg-success">Sign: {following}</div>
                            <div className="badge bg-info">Repository: {public_repos}</div>
                            <div className="badge bg-dark">Gists: {public_gists}</div>
                        </div>
                    </div>
                </div>
            </div>
            <Repos repos={repos}/>
        </React.Fragment>
    )
}