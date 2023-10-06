function validation(values) {
  let error = {};

  if (values.title === "") {
    error.title = "Title should not be empty";
  } else {
    error.title = "";
  }

  if (values.abstract === "") {
    error.abstract = "Absract should not be empty";
  } else {
    error.abstract = "";
  }

  if (values.supervisor_name === "") {
    error.supervisor_name = "Supervisor name should not be empty";
  } else {
    error.supervisor_name = "";
  }

  if (values.authors_name === "") {
    error.authors_name = "Authors name should not be empty";
  } else {
    error.authors_name = "";
  }

  if (values.document === "") {
    error.document = "Document should not be empty";
  } else {
    error.document = "";
  }
  return error;
}

export default validation;
