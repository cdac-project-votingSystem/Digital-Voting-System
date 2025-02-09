import axios from "axios";
import { createUrl } from "../utils";

export async function addNewConstituency(data) {
  try {
    const response = await axios.post(createUrl("admin/addConstituency"), data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response;
  } catch (ex) {
    return { status: "error", error: ex };
  }
}

export async function addElectionDate(data) {
  try {
    const response = await axios.post(createUrl("admin/setElection"), data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response;
  } catch (ex) {
    return { status: "error", error: ex };
  }
}

export async function getValidParty() {
  try {
    const response = await axios.get(createUrl("politicalParty/tovalidate"), {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response;
  } catch (ex) {
    return { status: "error", error: ex };
  }
}

export async function partyToValidate(id) {
  try {
    const response = await axios.patch(
      createUrl(`admin/validatePoliticalParty/valid/${id}`),
      {}, // Empty body for PATCH request
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response;
  } catch (ex) {
    return { status: "error", error: ex };
  }
}

export async function partyToInvalidate(id) {
  try {
    const response = await axios.patch(
      createUrl(`admin/validatePoliticalParty/invalid/${id}`),
      {}, // Empty body for PATCH request
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response;
  } catch (ex) {
    return { status: "error", error: ex };
  }
}

export async function candidateToValidate(id) {
  try {
    const response = await axios.patch(
      createUrl(`admin/validateCandidate/valid/${id}`),
      {}, // Empty body for PATCH request
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response;
  } catch (ex) {
    return { status: "error", error: ex };
  }
}

export async function candidateToInValidate(id) {
  try {
    const response = await axios.patch(
      createUrl(`admin/invalidateCandidate/invalid/${id}`),
      {}, // Empty body for PATCH request
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response;
  } catch (ex) {
    return { status: "error", error: ex };
  }
}

export async function getAllCandidateToValidate() {
  try {
    const response = await axios.get(createUrl("candidates/toValidate"), {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response;
  } catch (ex) {
    return { status: "error", error: ex };
  }
}
