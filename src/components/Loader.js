import React from 'react'

export default function Loader({ isLoading }) {
  return isLoading ? <div className="loader">
      <div class="spinner-border" role="status" />
    </div> : null
}
