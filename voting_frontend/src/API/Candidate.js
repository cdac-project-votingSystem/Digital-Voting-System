import axiosInstance from "./AxiosInstance";

export async function registerCandidate(form) {
  const formData = new FormData();
  formData.append("adhaarNumber", form.adhaarNumber);
  formData.append("politicalPartyId", form.politicalPartyId);
  formData.append("constituencyId", form.constituencyId);
  formData.append("image", form.image);

  try {
    const response = await axiosInstance.post("candidates/add", formData, {
      headers: {
        "Content-Type": "multipart/form-data", 
      },
    });

    if (response) console.log("Candidate Registered:", response);
    
    return response;
  } catch (ex) {
    console.error("Error in registerCandidate:", ex);
    return {
      status: "error",
      error: ex,
    };
  }
}
