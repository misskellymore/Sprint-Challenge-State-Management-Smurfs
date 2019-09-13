import React, {useEffect} from 'react';
import Smurf from './Smurf.js';
import { connect } from 'react-redux';
import { smurfDispatch } from '../actions/ActionIndex.js';


const MoreSmurf = props => {
    const { smurfDispatch, smurfs, fetchingSmurfs, error } = props;
  
    useEffect(()=> {
      smurfDispatch()
    },[smurfDispatch])
  
    
    return (
      <div>
        {smurfs.map(item => 
          <Smurf
            key={item.id}
            item={item}
          />  
        )}
      </div>
    )
  }
  
  const mapStateToProps = state => {
    console.log('initial', state)
    return {
      smurfs: state.smurfs,
      fetchingSmurfs: state.fetchingSmurfs,
      error: state.error    
    }
  }
  
  export default connect(mapStateToProps, { smurfDispatch })(MoreSmurf)