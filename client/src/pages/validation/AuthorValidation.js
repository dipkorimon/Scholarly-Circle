function validation(values) {
  let error = {};

  if (values.student_id === "") {
    error.student_id = "Student ID should not be empty";
  } else {
    error.student_id = "";
  }

  if (values.full_name === "") {
    error.full_name = "Full name should not be empty";
  } else {
    error.full_name = "";
  }

  if (values.email === "") {
    error.email = "Email should not be empty";
  } else {
    error.email = "";
  }
  return error;
}

export default validation;
