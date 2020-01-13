export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e1be34152e9237f93d42312',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-dn18jcqf',
                  apiId: 'bf134fc0-8971-43bb-9495-58f8e8d4f224'
                },
                {
                  buildHookId: '5e1be341490c18efd57d87df',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-muur84of',
                  apiId: '13a2de02-ff01-4486-bc65-83823c811490'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Moussa-Ball/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-muur84of.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
