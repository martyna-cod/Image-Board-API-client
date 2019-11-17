import React from "react";

export default function LoginForm(props) {
  return (
        <form onSubmit={props.onSubmit}>
            <input
                type="text"
                name="email"
                placeholder="email"
                value={props.values.email}
                onChange={props.onChange}
            ></input>
            <input
                type="text"
                name="password"
                placeholder="password"
                value={props.values.password}
                onChange={props.onChange}
            ></input>
            <button type="submit">Login</button>
        </form>
    );
}