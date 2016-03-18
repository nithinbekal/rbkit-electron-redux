import React, {Component, PropTypes} from 'react';
import Button from './common/Button';

class Toolbelt extends Component {
  render() {
    const cpuProfile = this.props.cpuProfile;
    let btnText = 'Stop CPU Profiling';
    let btnClass = 'btn-danger';
    if (cpuProfile.status === 'STOPPED') {
      btnText = 'Start CPU Profiling';
      btnClass = 'btn-success';
    }
    return (
      <div className="col-md-10 col-md-offset-1">
        <Button value="Handshake" onClick={this.props.handshake}/>
        <button className={`btn ${btnClass}`} data-status={cpuProfile.status} onClick={this.props.handleCpuSampling}>
          {btnText}
          {cpuProfile.status === 'RUNNING' ? <i className="fa fa-spinner fa-spin"></i> : null}
        </button>
      </div>
    );
  }
}

Toolbelt.propTypes = {
  cpuProfile: PropTypes.object,
  handshake: PropTypes.func,
  handleCpuSampling: PropTypes.func
};

export default Toolbelt;