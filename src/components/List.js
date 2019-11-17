import React from 'react';
import CreateFormContainer from './CreateFormContainer';
import LoginFormContainer from './LoginFormContainer';


export default function List(props) {
    return (
        <div>
                   {!props.user && (
                <div>
                    <LoginFormContainer />
                </div>
            )}
             {/*// The CreateFormContainer should only be rendered if state.user is truthy. */}
            {props.user && <CreateFormContainer /> }
            {props.images.map(image => (
                <div key={image.id}>
                    <h3>{image.title}</h3>
                    <img alt={image.title} src={image.url} />
                </div>
            ))}
        </div>
    );
}