function validation(values) {
  let error = {};
  const email_pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  const password_pattern = /^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/g;

  if (values.email === "") {
    error.email = "Email should not be empty";
  } else if (!email_pattern.test(values.email)) {
    error.email = "Email didn't match";
  } else {
    error.email = "";
  }

  if (values.password === "") {
    error.password = "Password should not be empty";
  } else if (!password_pattern.test(values.password)) {
    error.password = "Password didn't match";
  } else {
    error.password = "";
  }
  return error;
}

export default validation;
