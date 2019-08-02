const headerTransformed = {
  component: 'header',
  props:{  
    id:'H1'
  },
  children: [
    {
      component: 'div',
      props:{
        id: 'main',
        style: {
          backgroundColor: '#A9C95B',
          color: '#FFFFFF'
        }
      },
      children: [
        {
          component: 'div',
          props:{  
            id:'sectionId1',
            className:'section',
            style: {
              width: '250px',
            }
          },
          children: [
            {
              component: 'div',
              props: {
                id: 'H1MENU1'
              },
              children: [
                {
                  component: 'HeaderMenuDropdown',
                  props: {
                    text: 'Monitoring'
                  },
                  children: [
                    {
                      component: 'Semantic.Dropdown.Item',
                      children: [
                        {
                          component: 'Link',
                          props: {
                            to: '/check-processing-servers'
                          },
                          children: 'Check Processing Servers'
                        }
                      ]
                    },
                    {
                      component: 'Semantic.Dropdown.Item',
                      children: [
                        {
                          component: 'Link',
                          props: {
                            to: '/check-designer-formats'
                          },
                          children: 'Check Designer Formats'
                        }
                      ]
                    },
                    {
                      component: 'Semantic.Dropdown.Item',
                      children: [
                        {
                          component: 'Link',
                          props: {
                            to: '/check-connect-formats'
                          },
                          children: 'Check Connect Formats'
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          component: 'div',
          props:{  
            id:'sectionId2',
            className:'section',
            style: {
              width: '250px'
            }
          },
          children: [
            {
              component: 'div',
              props: {
                id: 'H1MENU2'
              },
              children: [
                {
                  component: 'HeaderMenuDropdown',
                  props: {
                    text: 'Administration'
                  },
                  children: [
                    {
                      component: 'Semantic.Dropdown.Item',
                      children: [
                        {
                          component: 'Link',
                          props: {
                            to: '/manage-license-keys'
                          },
                          children: 'Manage License Keys'
                        }
                      ]
                    },
                    {
                      component: 'Semantic.Dropdown.Item',
                      children: [
                        {
                          component: 'Link',
                          props: {
                            to: '/manage-processing-servers'
                          },
                          children: 'Manage Processing Servers'
                        }
                      ]
                    },
                    {
                      component: 'Semantic.Dropdown.Item',
                      children: [
                        {
                          component: 'Link',
                          props: {
                            to: '/manage-accounts'
                          },
                          children: 'Manage accounts'
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

export default headerTransformed