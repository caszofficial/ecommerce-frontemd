import { Paper } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useGetProducts } from "../Hooks/useGetProducts";
import { useNavigate } from "react-router-dom";

const AdminPanelHome = () => {
  const { products } = useGetProducts();

  const navigate = useNavigate();

  const rows = products.map((p) => ({
    id: p.id,
    name: p.name,
    price: p.price,
    quantity: p.quantity,
    img: p.image,
  }));

  const columns: GridColDef[] = [
    { field: "id", headerName: "Id", flex: 1, minWidth: 50 },
    { field: "name", headerName: "Name", flex: 1, minWidth: 120 },
    { field: "price", headerName: "Price", flex: 1, minWidth: 120 },
    { field: "quantity", headerName: "Quantity", flex: 1, minWidth: 120 },
    { field: "img", headerName: "Image", flex: 1, minWidth: 120 },
  ];

  return (
    <Paper sx={{ m: 4, p: 4 }}>
      <DataGrid
        initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
        columns={columns}
        rows={rows}
        autoHeight
        density="compact"
        onRowClick={(params) => {
          navigate(`/admin/products/${params.id}`);
        }}
      />
    </Paper>
  );
};

export default AdminPanelHome;
