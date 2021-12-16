import React, {useContext, useState} from "react";
import {AlertContext} from "../context/Alert/alertContext";
import "./Search.css";
import {GithubContext} from "../context/github/githubContext";

export const Search = () => {
    const alert = useContext(AlertContext)
    const [value, setValue] = useState('')
    const github = useContext(GithubContext)
    const onSubmit = event => {
        if (event.key !=='Enter') {
            return
        }
            github.clearUsers()
        if (value.trim()) {
            alert.hide()
            github.search(value.trim())
        } else {
            alert.show('Write user information')
        }
    }
    return (
        <div className="form-group">
            <input
                type="text"
                className="form-control"
                placeholder="Write username"
                value={value}
                onChange={event => setValue(event.target.value)}
                onKeyPress={onSubmit}
            />
        </div>
    )
}