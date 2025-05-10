import RowActions from "./RowActions";

const MaterialRequestRow = ({
  index,
  row,
  onChange,
  onDelete,
  onEdit,
  onViewDetails,
  onDuplicate,
}) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange(index, { ...row, [name]: value });
  };

  return (
    <tr>
      <td>{index + 1}</td>

      <td>
        <input
          type="text"
          name="request_no"
          placeholder="Otomatik oluşturulacak"
          readOnly
        />
      </td>

      <td>
        <input
          type="date"
          name="date"
          value={row.date || ""}
          onChange={handleInputChange}
        />
      </td>

      <td>
        <select
          name="location"
          value={row.location || ""}
          onChange={handleInputChange}
        >
          <option value="">Seçiniz</option>
          <option value="Ankara">Ankara</option>
          <option value="İstanbul">İstanbul</option>
          <option value="İzmir">İzmir</option>
          <option value="Adana">Adana</option>
          <option value="Bursa">Bursa</option>
          <option value="Çanakkale">Çanakkale</option>
        </select>
      </td>

      <td>
        <input
          type="text"
          name="product_name"
          placeholder="Ürün Adı"
          value={row.product_name || ""}
          onChange={handleInputChange}
        />
      </td>

      <td>
        <input
          type="number"
          name="quantity"
          placeholder="Miktar"
          value={row.quantity || ""}
          onChange={handleInputChange}
        />
      </td>

      <td>
        <select name="unit" value={row.unit || ""} onChange={handleInputChange}>
          <option value="">Birim</option>
          <option value="ADET">ADET</option>
          <option value="KG">KG</option>
          <option value="TON">TON</option>
        </select>
      </td>

      <td>
        <textarea
          name="product_specs"
          placeholder="Ürün özellikleri"
          value={row.product_specs || ""}
          onChange={handleInputChange}
        />
      </td>

      <td>
        <textarea
          name="usage_area"
          placeholder="Kullanım Yeri"
          value={row.usage_area || ""}
          onChange={handleInputChange}
        />
      </td>

      <td>
        <select
          name="payment_type"
          value={row.payment_type || ""}
          onChange={handleInputChange}
        >
          <option value="">Seçiniz</option>
          <option value="Nakit/Havale">Nakit/Havale</option>
          <option value="Kredi Kartı">Kredi Kartı</option>
        </select>
      </td>

      <RowActions
        onEdit={() => onEdit(index)}
        onDelete={() => onDelete(index)}
        onDuplicate={() => onDuplicate(index)}
        onViewDetails={() => onViewDetails(index)}
      />
    </tr>
  );
};

export default MaterialRequestRow;
