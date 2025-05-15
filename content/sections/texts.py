import json
import os

class SectionText:
    def __init__(self):
        self.translations = None
        self.sections_texts = None
        self.load_translations()
        self.get_section_text_map()

    def load_translations(self):
        base_filepath = os.getcwd()
        filepath = os.path.join(base_filepath,'content','translates','es','base.json')
        print(filepath)
        with open(filepath) as f:
            self.translations =json.load(f)
            
    def generate_text(self,section,area):
        response = []
        section_area = f"{section}_{area}"
        print(f"generate_text {section_area}")
        if section_area in self.sections_texts.keys():
            section_text = self.translations[str(section)]
            l_text_name = self.sections_texts[str(section_area)][1]
            for i_text_name in l_text_name:
                if i_text_name in section_text.keys():
                    response.append(section_text[i_text_name])
            return response
        else:
            return ["",""]

    def get_section_text_map(self):
        self.sections_texts = {
            "home_section_a1":[None,["title","title_description"]],
            "home_section_a2":[None,["description_title","description_text"]],
            "services_section_a1":[None,["general_title","general_text"]],
            "services_section_a2":[None,["general_title","general_text"]],
            "proyects_section_a1":[None,["description_title","description_text"]],
            "proyects_section_a2":[None,["description_title","description_text"]],
            "contacts_section_a1":[None,["description_title","description_text"]],
            "contacts_section_a2":[None,["description_title","description_text"]]
        }
    