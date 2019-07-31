import React from 'react';
import headerStructure from '../jsonStructure/header_initial'

class HeaderNested extends React.Component {
  render() {
    const {
      content: {
        id,
        containers
      }
    } = headerStructure

    return (
        <React.Fragment>
          <header id={id}>
            {
              containers.map((container, index) => {
                const mainContainerStyle = {
                  display: 'flex',
                  backgroundColor: container.bgColor,
                  color: container.fontColor
                }

                return (
                  <div id={container.id} style={mainContainerStyle}>
                    {
                      container.sections.map(section => {
                        const sectionStyle = {
                          width: section.width
                        }

                        return (
                          <div id={section.id} style={sectionStyle}>
                            {
                              section.modules.map(module => {
                                return (
                                  <div id={module.id}>
                                    {module.title}
                                    <ul>
                                      {
                                        module.labels.map(label => {
                                          return (
                                            <li>{label.label}</li>
                                          )
                                        })
                                      }
                                    </ul>
                                  </div>
                                )
                              })
                            }
                          </div>
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </header>
        </React.Fragment>
      );
    }
}

export default HeaderNested;