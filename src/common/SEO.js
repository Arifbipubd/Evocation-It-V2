import React from 'react'
import PropTypes from "prop-types";


const SEO = ( {title} ) => {
    return (
      <>
        <meta charSet='utf-8' />
        <title>EvocationIt | {title}</title>
        <meta name='robots' content='noindex, follow' />
        <meta name='description' content='Create your Digital Landscape.' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
      </>
    );
}
SEO.propTypes = {
    title: PropTypes.string
};

export default SEO;