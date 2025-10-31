import React, { useEffect, useState } from 'react'

function reFetch(url) {
  const [finalData, setFinalData] = useState({});
  const [loading, setLoading] = useState(false);
  
  async function getDetails(){

    setLoading(true)

    const response = await fetch(url);
    const json = await response.json();
    setFinalData(json)
  
    setLoading(false);
  }

  useEffect(() => {
    getDetails();
  }, [url])

  useEffect(() => {
    setInterval(getDetails, 10 * 1000);
  }, [])
  
  return {
    finalData,
    loading
  }
}

export default reFetch