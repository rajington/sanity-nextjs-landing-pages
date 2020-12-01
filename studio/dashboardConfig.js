export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5fc68c00404c1a21bfaf3c8f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-n38m6j88',
                  apiId: '4f1145b5-8f0e-4321-9bf9-f70721ddb87e'
                },
                {
                  buildHookId: '5fc68c014b9e2722d8d30d93',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ufhqkqs4',
                  apiId: '8ccb9922-6000-494f-83bd-a1dc4705b8b6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rajington/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ufhqkqs4.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
