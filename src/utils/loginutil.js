export async function login(formData) {
  try {
    let response = await fetch(`${process.env.REACT_APP_API}/login`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await response.json();
    console.log(data);
    return data;
  } catch (error) {}
}
