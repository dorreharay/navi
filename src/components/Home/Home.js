import React, { Component } from 'react';


import styles from './Home.scss';

class Home extends Component {
  state = {
    templateNumber: 0,
  }

  componentDidMount() {
    const { fetchHouseMap } = this.props;
    fetchHouseMap();
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  chooseTemplate = (e) => {
    this.setState({ templateNumber: +e.target.value });
  }

  render() {
    const { templateNumber } = this.state;
    const { templates, properties } = this.props;

    const temp = templates ? templates[templateNumber] : [];

    return (
      <div className={styles.main}>
        <form onSubmit={this.handleSubmit}>
          {templates.map((elem, index) => (
            <label htmlFor={index}>
              <input id={index} type="radio" value={index} onChange={this.chooseTemplate} checked={index === templateNumber} />
              {`Tempate ${index + 1}`}
            </label>
          ))}
        </form>
        <div className={styles.container}>
          {properties ? properties.map(item => (
            <div key={item.id} className={styles.card}>
              {temp.template.map(elem => (
                elem.component === 'IMAGE' ? (
                  <div style={{ position: 'relative' }}>
                    <img src={item[elem.field][0]} alt="house" />
                    {elem.children ? (
                      elem.children.map(child => (
                        <div className={styles.image_text}>{item[child.field]}</div>
                      ))
                    ) : null}
                  </div>
                ) : <div className={styles.card_item}>{item[elem.field]}</div>
              ))}
            </div>
          )) : <div className={styles.loader}>Loading...</div>}
        </div>
      </div>
    );
  }
}

export default Home;
