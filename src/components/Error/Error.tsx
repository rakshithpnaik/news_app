import React from 'react'

function Error({error}: any) {
	return (
		<div>Error : {error.message || 'Something went wrong...' }</div>
	)
}

export default Error