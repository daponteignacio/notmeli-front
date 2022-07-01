const api_dev = process.env.REACT_APP_API_URL;

const fetchCreateCartProduct = (endpoint, data) => {
  const url = `${api_dev}/${endpoint}`;

  const token = localStorage.getItem("token") || "";

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "x-token": token,
      productoid: data,
    },
  });
};

const fetchGetAllCartProducts = (endpoint) => {
    const url = `${api_dev}/${endpoint}`;
  
    const token = localStorage.getItem("token") || "";
  
    return fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "x-token": token,
      },
    });
  };
  



const fetchDeleteProductCart = (endpoint, data) => {
  const url = `${api_dev}/${endpoint}`;

  const token = localStorage.getItem("token") || "";

  return fetch(url, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      "x-token": token,
      productoid: data,
    },
  });
};

const fetchEmptyCart = (endpoint, data) => {
    const url = `${api_dev}/${endpoint}`;
  
    const token = localStorage.getItem("token") || "";
  
    return fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        "x-token": token,
      },
    });
  };

export {
    fetchCreateCartProduct,
    fetchDeleteProductCart,
    fetchEmptyCart,
    fetchGetAllCartProducts
}