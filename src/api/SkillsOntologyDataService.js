import { ONTOLOGY_API_SKILLS_SEARCH_URL } from "../constants.js";
import Axios from "axios";

class SkillsOntologyDataService {
  searchSkills(text) {
    console.log(
      "Calling the ontology API to search Skills with string: " +text
    );
    
    let url = `${ONTOLOGY_API_SKILLS_SEARCH_URL}?q=${text}`;
    console.log("GET request URL: "+url);
    return Axios.get(url);
  }
}

export default new SkillsOntologyDataService();
