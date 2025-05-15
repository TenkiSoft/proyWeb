def get_icons(icon_area):
    icon_areas = {
        "fa-address-card":["home_section_a2"]
    }
    result = None
    for icon_item,v in icon_areas.items():
        if icon_area in v:
            result = icon_item
    return result

def get_titles():
    return {
        "home":{
            "section_a2":[
                "Home2",
                "Este es el Home 2"
            ],
            "section_b1":[
                "DEsarrollo de Software","333"
            ]
        },
        "services":{
            "section_a1":[
                "services 1",
                "Este es Services 1"
            ],
            "section_b1":[
                "services 2",
                "Este es Services 2"
            ]
        },
        "proyects":{
            "section_a1":[
                "proyects 1",
                "Este es proyects 1"
            ],
            "section_a2":[
                "proyects 2",
                "Este es proyects 2"
            ]
        },
        "contacts":{
            "section_a1":[
                "contacts 1",
                "Este es contacts 1"
            ],
            "section_a2":[
                "contacts 2",
                "Este es contacts 2"
            ]
        }
    }
def get_cards():
    return {
    }
def get_carrousels():
    return {
        "home":{
            "section_b2":{
                "name":"dashboard",
                "cantidad":6,
                "division":3,
                "cards":[
                    "Element Csarr 1","Element 22","Element Csarr 33","Element Csarr 4","Element Csarr 55","Element Csarr 6"
                ]
            }
        },
        "services": {
            "section_a2": {
                "name": "services1",
                "cantidad": 6,
                "division": 2,
                "cards": [
                    "Services 1", "Services 22", "Services 33", "Services 4", "Services 5",
                    "Services 6"
                ]
            },
            "section_b2": {
                "name": "services1",
                "cantidad": 6,
                "division": 2,
                "cards": [
                    "Services 1", "Services 22", "Services 33", "Services 4", "Services 5",
                    "Services 6"
                ]
            }
        }
    }

def get_empties():
    return {
        "home":{
            "section_a1":{
                "name":"ss",
                "content":"Tenki-Soft"
            }
        }
    }