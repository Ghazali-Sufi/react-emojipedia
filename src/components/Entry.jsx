import React from "react";

export function Entry(props) {
    return (
      <div>
        <dl className="dictionary">
          <div className="term">
            <dt>
              <span className="emoji" role="img" aria-label={props.name}>
                {props.emoji}
              </span>
              <span>{props.name}</span>
            </dt>
            <dd>
              {props.meaning}
            </dd>
          </div>
        </dl>
      </div>
    );
}