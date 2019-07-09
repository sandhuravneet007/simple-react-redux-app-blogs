import React from 'react';
import Rainbow from '../hoc/Rainbow';

const Contact = (props) => {
    return (
        <div>
            <div className="container">
            <h4 className="center">Contact</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quas, consequuntur quos ipsa itaque vero error, laboriosam dolore tempora cum, architecto doloribus blanditiis aut obcaecati asperiores rem aspernatur soluta ipsum!</p>    
            </div>
        </div>
    )
}

export default Rainbow(Contact)