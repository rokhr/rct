import React from 'react';

const Comp = (props) => {
  console.log('render_tt');
  return (
    <React.Fragment>
      <p>testttt</p>
    </React.Fragment>
  );
};

// class Comp extends React.PureComponent {
//   componentWillReceiveProps(nextProps) {
//     // console.log('item:componentWillReceiveProps', this.props === nextProps);
//     // console.log('-----------------')
    
//     // const keys = Object.keys(nextProps);
//     // keys.forEach((name) => {
//     //   console.log(name, nextProps[name] === this.props[name]);
//     // });
//     // console.log('///-----------------')
//   }

//   // shouldComponentUpdate (nextProps, nextState) {
//   //   console.log('shouldComponentUpdate', nextProps === this.props);
//   //   console.log('-----------------')
    
//   //   const keys = Object.keys(nextProps);
//   //   keys.forEach((name) => {
//   //     console.log(name, nextProps[name] === this.props[name]);
//   //   });
//   //   console.log('-----------------')

//   //   const diffPropsProperties = [
//   //     'title',
//   //     'description',
//   //     'isEditting'
//   //   ];

//   //   return diffPropsProperties.some((name, index) => {
//   //     return nextProps[name] !== this.props[name]
//   //   }) || nextState !== this.state;
//   //   // const originalShould = super.shouldComponentUpdate.call(this, nextProps, nextState);
//   //   // console.log(originalShould);
//   //   // return originalShould
//   // }

//   render() {
//     console.log('render_tt');
//     return (
//       <React.Fragment>
//         <p>testttt</p>
//       </React.Fragment>
//     );
//   }
// }


export default Comp;
