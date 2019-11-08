import React from "react";
import { connect } from "react-redux";
import StructureList from "../StructureList";

const ListContainer = ({ structure, equipment }) => (
  <div className="container">
    <StructureList unitList={structure} />
    <StructureList unitList={equipment} />
  </div>
);

const mapStateToProps = state => state;

export default connect(mapStateToProps)(ListContainer);
