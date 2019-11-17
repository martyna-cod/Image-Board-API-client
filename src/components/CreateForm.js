import React from "react";

export default function CreateForm(props) {
  return (
        <form onSubmit={props.onSubmit}>
            <input
                type="text"
                name="url"
                placeholder="url"
                value={props.values.url}
                onChange={props.onChange}
            ></input>
            <input
                type="text"
                name="title"
                placeholder="title"
                value={props.values.title}
                onChange={props.onChange}
            ></input>
            <button type="submit">Add image</button>
        </form>
    );
}