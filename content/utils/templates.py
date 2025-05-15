
from .widgets_maps import get_icons

def get_title_template(content,icon_area):
    icon = get_icons(icon_area)
    return {
        "title": content[0],
        "icon":icon,
        "description":content[1]
    }

def get_cards_template(content,section):
    cards = []
    if "cards" in content.keys():
        for item_card in content["cards"]:
            cards.append({"text":item_card})
    return {
        "name": f"{section}_{content['name']}",
        "cantidad":content["cantidad"],
        "cards":cards
    }
def get_carrousel_template(content,section):
    cards = []
    if "cards" in content.keys():
        for item_card in content["cards"]:
            cards.append({"text":item_card})
    return {
        "name": f"{section}_{content['name']}",
        "cantidad":content["cantidad"],
        "division": content["division"],
        "cards":cards
    }
def get_empty_template(content,section):
    return {
        "name": f"{section}_{content['name']}",
        "content":content['content']
    }