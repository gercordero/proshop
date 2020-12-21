import React from "react";
// React Icons
import { FaTimes, FaCheck, FaRegEdit } from "react-icons/fa";
// Material UI
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const AdminOrdersPanel = ({ orders, editOrderHandler }) => {
  return (
    <TableContainer component={Paper} style={{ marginTop: "2rem" }}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>User</StyledTableCell>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell>Total</StyledTableCell>
            <StyledTableCell>Paid</StyledTableCell>
            <StyledTableCell>Delivered</StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <StyledTableRow key={order._id}>
              {/* ORDER ID */}
              <StyledTableCell component="th" scope="row">
                {order._id}
              </StyledTableCell>
              {/* ORDER NAME */}
              <StyledTableCell>{order.user.name}</StyledTableCell>
              {/* ORDER CREATED AT */}
              <StyledTableCell>
                {new Date(order.createdAt).toDateString()}
              </StyledTableCell>
              {/* ORDER TOTAL PRICE */}
              <StyledTableCell>${order.totalPrice}</StyledTableCell>
              {/* ORDER IS PAID? */}
              <StyledTableCell>
                {order.isPaid ? (
                  new Date(order.paidAt).toDateString()
                ) : (
                  <FaTimes style={{ color: "red" }} />
                )}
              </StyledTableCell>
              {/* ORDER IS DELIVERED? */}
              <StyledTableCell>
                {order.isDelivered ? (
                  new Date(order.DeliveredAt).toDateString()
                ) : (
                  <FaTimes style={{ color: "red" }} />
                )}
              </StyledTableCell>
              {/* ORDER EDIT BUTTON */}
              <StyledTableCell>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ fontWeight: "bold" }}
                  onClick={() => editOrderHandler(order._id)}
                >
                  <FaRegEdit />
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AdminOrdersPanel;
