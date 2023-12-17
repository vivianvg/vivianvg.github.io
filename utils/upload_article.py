""" 
Require:
- all assets for an article uploaded

Information to generate skeleton of cards + template pages
- term, title, authors, creatives, blurb
- article page path
- cover image path

Information to fully generate an article page 
- term, title, authors, creatives
- article full text
- article in-text graphic paths 
- indicators for where to insert each graphic

Plan:
- take in a txt file of a certain template

can generate as txt, then crawl to rename to .vue
"""


import os


def generate_article_card():
    """
    {
    id: "",
    coverPath: "articles/[term]/covers/[cover_name].png",
    articlePath: "articles/[term]/[title]",
    title: "",
    type: "",
    term: "",
    authors: "",
    creatives: "",
    blurb:
      "",
    },

    """
