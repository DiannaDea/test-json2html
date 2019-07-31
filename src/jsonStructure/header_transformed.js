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
          display: 'flex',
          'background-color': '#A9C95B',
          color: '#FFFFFF'
        }
      },
      children: [
        {
          component: 'div',
          props:{  
            id:'sectionId1',
            style: {
              width: '250px'
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
                  component: 'div',
                  children: 'Monitoring'
                },
                {
                  component: 'ul',
                  children: [
                    {
                      component: 'li',
                      children: 'Check Processing Servers'
                    },
                    {
                      component: 'li',
                      children: 'Check Designer Formats'
                    },
                    {
                      component: 'li',
                      children: 'Check Connect Formats'
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
                  component: 'div',
                  children: 'Administration'
                },
                {
                  component: 'ul',
                  children: [
                    {
                      component: 'li',
                      children: 'Manage License Keys'
                    },
                    {
                      component: 'li',
                      children: 'Manage Processing Servers'
                    },
                    {
                      component: 'li',
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
};

export default headerTransformed