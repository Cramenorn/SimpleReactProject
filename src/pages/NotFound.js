import React from 'react';

function NotFound(){
    return(
        <div>
            <h2>NOT FOUND!</h2>
            <p>Well it looks like that the page you were looking for has been moved to another location or it doesn't exist.</p>

            <p>You can return to the <a class="bodylink" href="/">home page</a></p>
        </div>
    );
}

export default NotFound;