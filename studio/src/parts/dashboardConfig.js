export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              sites: [
                {
                  buildHookId: "",
                  title: "Sanity Studio",
                  name: "",
                  apiId: ""
                },
                {
                  buildHookId: "",
                  title: "Portfolio",
                  name: "",
                  apiId: ""
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'Github repo',
            value: 'https://github.com/',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: "",
            category: "apps"
          }
        ]
      }
    }
  ]
}