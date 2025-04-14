const MENU_ITEMS = [
    {
      label: 'main',
      path: '/main'
    },
    {
      label: 'organize',
      path: '/organize'
    },
    {
      label: 'other',
      items: [
        {
          label: 'test1',
          path: '/other/test1'
        },
        {
          label: 'test2',
          path: '/other/test2'
        },
        {
          label: 'test3',
          path: '/other/test3'
        },
        {
          label: 'sub',
          items: [
            {
              label: 'test4',
              path: '/other/sub/test4'
            },
            {
              label: 'test5',
              path: '/other/sub/test5'
            },
            {
              label: 'test6',
              path: '/other/sub/test6'
            },
            
          ]
        }
      ]
    }
  ]

export default MENU_ITEMS