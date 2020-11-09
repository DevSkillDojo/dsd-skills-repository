//https://17toah7an3.execute-api.us-west-2.amazonaws.com/test?q=import
//https://17toah7an3.execute-api.us-west-2.amazonaws.com:80/test?q=test 

export const ONTOLOGY_API_PROTOCOL = "https";
export const ONTOLOGY_API_HOST = "17toah7an3.execute-api.us-west-2.amazonaws.com";
export const ONTOLOGY_API_PATH = "";
export const ONTOLOGY_API_BASE_URL = ONTOLOGY_API_PROTOCOL + "://" + ONTOLOGY_API_HOST + ONTOLOGY_API_PATH;
export const ONTOLOGY_API_SKILLS_SEARCH_URL = ONTOLOGY_API_BASE_URL + "/test";
export const ONTOLOGY_SEARCH_LIMIT = "50";

//export const ONTOLOGY_API_PROTOCOL = "http";
//export const ONTOLOGY_API_HOST = "localhost";
//export const ONTOLOGY_API_PORT = "8081";
//export const ONTOLOGY_API_PATH = "/skills-api";
//export const ONTOLOGY_API_BASE_URL = ONTOLOGY_API_PROTOCOL + "://" + ONTOLOGY_API_HOST + ":" + ONTOLOGY_API_PORT + ONTOLOGY_API_PATH;
//export const ONTOLOGY_API_SKILLS_SEARCH_URL = ONTOLOGY_API_BASE_URL + "/search/skills";
//export const ONTOLOGY_SEARCH_LIMIT = "50";
