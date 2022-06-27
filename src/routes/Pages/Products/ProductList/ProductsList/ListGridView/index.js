import React from 'react';
import { useSelector } from 'react-redux';
import CmtGridView from '../../../../../../@coremat/CmtGridView';
import ProductCell from './ProductCell';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';

const ListGridView = ({ onShowProductDetail, onClickEditProduct }) => {
  const { productsList } = useSelector(({ productApp }) => productApp);

  return (
    <Box px={6} py={{ xs: 8, xl: 10 }}>
      <CmtGridView
        border={true}
        itemPadding={18}
        responsive={{
          xs: 1,
          sm: 1,
          md: 2,
          lg: 2,
          xl: 3,
        }}
        data={productsList}
        renderRow={(item, index) => (
          <ProductCell
            key={index}
            product={item}
            onShowProductDetail={onShowProductDetail}
            onClickEditProduct={onClickEditProduct}
          />
        )}
      />
    </Box>
  );
};

export default ListGridView;

ListGridView.prototype = {
  onShowProductDetail: PropTypes.func,
  onClickEditProduct: PropTypes.func,
};