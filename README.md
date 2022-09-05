# final-project-template-main111111
 polimi
 
 ## Group Members

* ALI DEYLMAY (10704480)
* Hou Xiaodi (10777895)

Contribution for each members refer to Issues in github menu.

## Setup

### `DEV Server`
```bash
# localhost:3000
$ npm run dev
```

### `PROD Server - heroku link`

https://ali-ali.herokuapp.com/

## Framework Implementation

We implemented our project with CSR (client-side rendering), because we know that we have to prevent requesting the entire page when only a section of it has changed to improve responsive user experience.
It should be noted that you may see tags such as cat, poi, and service among the codes, and the reason is that we took the hypermedia exam last semester and even designed the website, but due to a mistake, one of the Our teammates in editing the reports, we could not upload the reports before the deadline and failed the exam. Then we wrote the code on the same project that you gave us in the first semester and we had changed it for the July exam, but in general, everything is clear and if you need a question, I can answer you. 
We start doing the project on the project that we have done before because we wrote all the codes once in the last semester and considering that our group was two people in the summer and our time was short, we tried to give you the best result.


### `Pages`

In order to have to deal with configuring applications’ routing. NuxtJs will automatically generate the routing based on the folder structure that we have implemented. Here the structure of the route:

    .
    ├── index.vue
    ├── pages                    
    │   ├── all-Artist           # folder directed to be routed in general page
    │   ├── index.vue            # pages that will be retrieved (/all-Artist)
    |       ├── sevice           # folder directed to be routed in specific page
    |           ├── index.vue    # pages that will be retrieved (/all-Artist/service)
    ├    all-Festival            # folder directed to be routed in general page
    │   ├── index.vue            # pages that will be retrieved (/all-Festival)
    |       ├── poi              # folder directed to be routed in specific page
    |           ├── index.vue    # pages that will be retrieved (/all-Festival/poi)
    ├   all-Place                # folder directed to be routed in general page
    │   ├── index.vue            # pages that will be retrieved (/all-Place)
    |       ├── itinerary           # folder directed to be routed in specific page
    |           ├── index.vue    # pages that will be retrieved (/all-Place/itinerary)
    │   └── ...              
    └── ...




### `SEO Optimization`

In order to have a good result in SEO we implemented <meta> tags in our website through nuxt.config.js. In the meta tags, we put some keywords that will help our website retrieved by festival goers that search on Google. For example, the festival goers who does not know dance festivals, we list all dance festivals that they can do.

