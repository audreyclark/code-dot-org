import React, {Component, PropTypes} from 'react';
import i18n from '@cdo/locale';
import color from "../../util/color";
import Radium from 'radium';

export const Galleries = {
  PUBLIC: 'PUBLIC',
  PRIVATE: 'PRIVATE',
};

const styles = {
  container: {
    marginBottom: 20,
    width: '100%',
    backgroundColor: color.lightest_gray,
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: color.lighter_gray,
    padding: 10,
    marginLeft: 25,
    height: 36
  },
  pill: {
    ':hover': {
      color: color.teal
    },
    border: 'none',
    borderRadius: 50,
    fontFamily: '"Gotham 5r", sans-serif',
    fontSize: 20,
    backgroundColor: color.lightest_gray,
    color: color.charcoal,
    margin: '0 0 0 20px',
    boxShadow: 'none',
    outline: 'none',
    padding: '8px 18px',
    float: 'left',
    cursor: 'pointer',
  },
  selectedPill: {
    ':hover': {
      color: color.white
    },
    backgroundColor: color.teal,
    color: color.white,
    border: 'none'
  }
};

class GallerySwitcher extends Component {
  static propTypes = {
    initialGallery: PropTypes.oneOf(Object.keys(Galleries)).isRequired,
    showGallery: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.toggleToGallery = this.toggleToGallery.bind(this);
    this.toggleToMyProjects = this.toggleToMyProjects.bind(this);

    this.state = {
      // The source of truth for which gallery is displayed. This state should
      // live in the parent component, once there is one.
      gallery: props.initialGallery,
    };
  }

  toggleToGallery() {
    this.props.showGallery(Galleries.PUBLIC);
    this.setState({gallery: Galleries.PUBLIC});
  }

  toggleToMyProjects() {
    this.props.showGallery(Galleries.PRIVATE);
    this.setState({gallery: Galleries.PRIVATE});
  }

  render() {
    return (
      <div style={styles.container}>
        <div
          key={'private'}
          style={[
            styles.pill,
            this.state.gallery === Galleries.PRIVATE && styles.selectedPill
          ]}
          onClick={this.toggleToMyProjects}
        >
          {i18n.myProjects()}
        </div>
        <div
          key={'public'}
          style={[
            styles.pill,
            this.state.gallery === Galleries.PUBLIC && styles.selectedPill
          ]}
          onClick={this.toggleToGallery}
        >
          {i18n.publicGallery()}
        </div>
      </div>
    );
  }
}
export default Radium(GallerySwitcher);
