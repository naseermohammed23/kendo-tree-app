export const masterData = [
  {
    'text': 'All',
    'items': [
      {
        'text': 'Roles',
        'items': [
          { 'text': 'Admin_Role' },
          { 'text': 'Planner_Role' },
          { 'text': 'Guest_Role' },
          { 'text': 'SCPT_Role' },
          { 'text': 'DECS_Role' },
        ]
      },
      {
        'text': 'CWLV',
        'items': [
          {
            'text': 'Tabs',
            'items': [
              {
                'text': 'CWLV-Tab',
                'items': [
                  {
                    'text': 'Filter-Panel',
                    'items': [
                      { 'text': 'Station dropdown' },
                      { 'text': 'Aircraft' },
                      { 'text': 'Fleet' },
                      { 'text': 'Ron-Rod dropdown' },
                      { 'text': 'MntncId' },
                      { 'text': 'MntncType' },
                      { 'text': 'Check only' },
                      { 'text': 'Search Button' },
                    ]
                  },
                  {
                    'text': 'CWLV-Grid',
                    'items': [
                      { 'text': 'Export Button' },
                      { 'text': 'Print Button' },
                    ]
                  }
                ]
              },
              {
                'text': 'ManHour-Tab',
                'items': [
                  { 'text': 'Refresh Button' },
                  { 'text': 'Manhour Grid' }
                ]
              },
              {
                'text': 'XUtil-Tab', expanded: true,
                'items': [
                  { 'text': 'XUtil Grid' },
                  { 'text': 'XUtil Grid Add' },
                  { 'text': 'XUtil Grid Edit' },
                  { 'text': 'XUtil Grid Delete' },
                ]
              }
            ]
          }
        ]
      },
      {
        'text': 'CWLV Base',
        'items': [
          { 'text': 'Tab1' },
          { 'text': 'Tab2' }
        ]
      }
    ]
  }
];
