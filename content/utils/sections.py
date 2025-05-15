import json
from .widgets_maps import get_icons,get_cards,get_carrousels,get_titles,get_empties
from .templates import get_title_template,get_cards_template,get_carrousel_template,get_empty_template
from content.sections.texts import SectionText

# def load_translations(locale):
#     with open(f'translates/{locale}.json') as f:
#         return json.load(f)
class SectionContent(SectionText):
    def get_section_type(self,section,area):
        print(f"S:: {section} A:: {area}")
        sections_types = {
            "title":{
                "home":["section_a2","section_b1"],
                "services":["section_a1","section_b1"]
            },
            "carrousel":{
                "home":["section_b2"],
                "services": ["section_a2", "section_b2"]
            },
            "empty":{
                "home": ["section_a1"]
            }
        }
        result = None
        for section_type in sections_types.keys():
            section_type_i = sections_types[section_type]
            if section in section_type_i:
                section_type_c = section_type_i[section]
                for item_area in section_type_c:
                    if item_area == area:
                        result = section_type
        return result


    def get_content_section(self,section,section_type,area):
        title_sections = get_titles()
        cards_sections = get_cards()
        carrousel_sections = get_carrousels()
        empties_sections = get_empties()
        section_maps = {
            "title":{"map":title_sections,"template":get_title_template},
            "cards":{"map":cards_sections,"template":get_cards_template},
            "carrousel":{"map":carrousel_sections,"template":get_carrousel_template},
            "empty": {"map": empties_sections, "template": get_empty_template}
        }
        result  ={}
        params = None
        if section_type in section_maps.keys():
            map_s = section_maps[section_type]["map"]
            if section in map_s.keys():
                if area in map_s[section].keys():
                    content_area = map_s[section][area]
                    template_f = section_maps[section_type]["template"]
                    if section_type == "title":
                        section_area = f"{section}_{area}"
                        print(f"222 :: {section_area}")
                        c = self.generate_text(section,area)
                        print(c)
                        params = {
                            "content":content_area,"icon_area":section_area
                        }
                    elif section_type == "cards":
                        params = {
                            "content":content_area,"section":section
                        }
                    elif section_type == "carrousel":
                        params = {
                            "content":content_area,"section":section
                        }
                    elif section_type == "empty":
                        params = {
                            "content":content_area,"section":section
                        }
                    result = template_f(**params)
        return result
    def generate_section(self,section,id):
        sections = ["section_a1","section_a2","section_b1","section_b2"]
        section_result = {"id":id}
        for item_section in sections:
            section_item = {}
            section_type = self.get_section_type(section,item_section)
            section_content = self.get_content_section(section,section_type,item_section)
            section_item = {
                "section":section,
                "section_type":section_type,
                "content":section_content
            }
            section_result[item_section] = section_item
        return section_result



    def get_content(self):
        home = self.generate_section("home","1")
        services = self.generate_section("services","2")
        proyects = self.generate_section("proyects","3")
        contacts = self.generate_section("contacts","4")
        content = [
            home,
            services,
            proyects,
            contacts
        ]
        return content