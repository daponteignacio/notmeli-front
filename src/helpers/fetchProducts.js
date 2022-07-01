const api_dev = process.env.REACT_APP_API_URL;

const fetchCreateProduct = (endpoint, data) => {
    const url = `${api_dev}/${endpoint}`;
  
    const token = localStorage.getItem("token") || "";
  
    return fetch(url, {
      method: "POST",
  
      headers: {
        "Content-type": "application/json",
        "x-token": token,
      },
  
      body: JSON.stringify(data),
    });
  };

const fetchGetAllProducts = (endpoint, data = "", method = "GET") => {
  const url = `${api_dev}/${endpoint}`;

  return fetch(url, {
    method: "GET",

    headers: {
      "Content-type": "application/json",
      id: "",
      all: true,
      text: "",
    },
  });
};

const fetchGetOneProductById = (endpoint, data = "", method = "GET") => {
  const url = `${api_dev}/${endpoint}`;

  return fetch(url, {
    method: "GET",

    headers: {
      "Content-type": "application/json",
      id: data,
      all: false,
      text: null,
    },
  });
};

const fetchGetOneProductByText = (
  endpoint,
  data = "",
  key,
  method = "GET"
) => {
  const url = `${api_dev}/${endpoint}`;

  return fetch(url, {
    method: "GET",

    headers: {
      "Content-type": "application/json",
      id: "",
      all: false,
      text: data,
      key,
    },
  });
};



const fetchDeleteProduct = (endpoint, data) => {
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

const fetchGetAllCategories = (endpoint) => {
  const url = `${api_dev}/${endpoint}`;


  return fetch(url, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
};

export {
    fetchCreateProduct,
    fetchDeleteProduct,
    fetchGetAllProducts,
    fetchGetOneProductById,
    fetchGetOneProductByText,
    fetchGetAllCategories
}
