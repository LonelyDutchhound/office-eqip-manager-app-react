import React from "react";
import { connect } from "react-redux";
import StructureList from "../../StructureList";
import EquipmentListContainer from "../EquipmentListContainer";

const ListContainer = ({ structure }) => (
  <div className="container">
    <StructureList unitList={structure} />
    <EquipmentListContainer />
  </div>
);

const mapStateToProps = state => ({
  structure: state.structure
});

export default connect(mapStateToProps)(ListContainer);
