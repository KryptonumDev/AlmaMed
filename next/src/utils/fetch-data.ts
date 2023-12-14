declare var process : {
  env: {
    GRAPHQL_ENDPOINT: string
  }
}

const fetchData = async (query: string, variables: object) => {
  try {
    const response = await fetch(process.env.GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...{ query },
        ...(variables && { variables })
      }),
      next: {
        revalidate: 3600,
      },
    });

    const body = await response.json();

    if (body.errors) {
      throw body.errors[0];
    }

    return { body };

  } catch (error: any) {
    throw {
      status: error.status || 500,
      message: error.message,
      query,
    };
  }
};

export default fetchData;