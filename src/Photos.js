import React from "react";

export default function Photos(props) {
  if (props.photos && props.photos.length > 0) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-6" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <div className="HoverImage">
                    <img
                      src={photo.src.portrait}
                      alt=""
                      className="img-fluid"
                    />
                  </div>{" "}
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
