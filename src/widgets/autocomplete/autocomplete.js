import React, { Component } from 'react';
import { Icon, Input, AutoComplete } from 'antd';


class UxifySearch extends Component {
    state = {  }
    render() {
        const Option = AutoComplete.Option;
        const OptGroup = AutoComplete.OptGroup;
        const dataSource = [{
            title: 'Iphone X',
            children: [{
              title: 'Apple Iphones in Mobiles',
              Price:'1025 $',
            }, {
              title: 'Iphone 10',
              Price:'1010 $',
            }],
          }, {
            title: 'Moto GS5',
            children: [{
              title: 'Lenovo in Mobiles',
              Price:'500 $',
            }, {
              title: 'Moto X',
              Price:'750 $',
            }],
          }, {
            title: 'Iphone X',
            children: [{
              title: 'Apple Iphones in Mobiles',
              Price:'1025 $',
            }, {
              title: 'Iphone 10',
              Price:'1010 $',
            }],
          }];

          function renderTitle(title) {
            return (
              <span>
                {title}
                <a
                  style={{ float: 'right' }}
                  href="https://www.google.com/search?q=antd"
                  target="_blank"
                  rel="noopener noreferrer">More
                </a>
              </span>
            );
          }

          const options = dataSource.map(group => (
            <OptGroup
              key={group.title}
              label={renderTitle(group.title)}
            >
              {group.children.map(opt => (
                <Option key={opt.title} value={opt.title}>
                  {opt.title}
                  <span className="certain-search-item-count">{opt.Price}</span>
                </Option>
              ))}
            </OptGroup>
          )).concat([
            <Option disabled key="all" className="show-all">
              <a
                href="https://www.google.com/search?q=antd"
                target="_blank"
                rel="noopener noreferrer"
              >
                See all the results
              </a>
            </Option>,
          ]);
          
        
        return (
            <div className="certain-category-search-wrapper" >
            <AutoComplete
              className="certain-category-search"
              dropdownClassName="certain-category-search-dropdown"
              dropdownMatchSelectWidth={false}
              dropdownStyle={{ width: 300 }}
              size="large"
              style={{ width: '100%' }}
              dataSource={options}
              placeholder="Search Uxify"
              optionLabelProp="value">
              <Input suffix={<Icon type="search" className="certain-category-icon" />} />
            </AutoComplete>
          </div>
            
        );
    }
}

export default UxifySearch;