import React from "react";

const nl2br = (text) => {
  var regex = /(\n)/g
  return text.split(regex).map(function (line) {
      if (line.match(regex)) {
          return React.createElement('br')
      }
      else {
          return line;
      }
  });
}

const Br = () => {
    return (
        <React.Fragment>
            <span dangerouslySetInnerHTML={{__html: '<br>'}} />
        </React.Fragment>
    );
}

export {
  nl2br,
  Br
}
