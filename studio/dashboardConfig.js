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
                  buildHookId: '62b31d598e6bdb1717364eae',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-hcf6t3jh',
                  apiId: '0ca69d71-6fb4-4017-9d81-7375ba83ff0f'
                },
                {
                  buildHookId: '62b31d5ad9cc45210ae24224',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-qqg1rmkz',
                  apiId: '00dfaad5-4920-4f2a-af26-a9d1039ffc35'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/moenni-ch/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-qqg1rmkz.netlify.app',
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
