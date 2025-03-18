import { Product } from 'src/types/components/product'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'

const ProductPriceBreakdown = ({ title, product }: { title: string; product: Product }) => {
  const itemBasePrice = product.item_Net_Weight * product.material_type.price
  const valueAdditionPrice = (product.value_Addition / 100) * itemBasePrice
  const otherStonePrice = product.stone_information.reduce((total, item) => {
    return total + item.stone_price
  }, 0)
  const gstPrice = (product.gst / 100) * (itemBasePrice + valueAdditionPrice + otherStonePrice)
  return (
    <div className="flex flex-col rounded-lg border border-brandColor bg-brandSecondary p-2">
      <h1 className="text-lg">{title}</h1>
      <span className="mb-2 mt-1 h-0.5 w-full bg-brandColor" />
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Component</TableHead>
              <TableHead>Rate</TableHead>
              <TableHead>Weight</TableHead>
              <TableHead>Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="text-brandColor">Metal</TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{product.material_type.name}</TableCell>
              <TableCell>{Number(product.material_type.price.toFixed(2)).toLocaleString()} / gms</TableCell>
              <TableCell>{product.item_Net_Weight} gms</TableCell>
              <TableCell>{Number(itemBasePrice.toFixed(2)).toLocaleString()}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-brandColor">Stone</TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
            </TableRow>
            {product.stone_information.map((data, index) => (
              <TableRow key={index}>
                <TableCell className="capitalize">{data.stone_name}</TableCell>
                <TableCell>-</TableCell>
                <TableCell>{data.stone_weight} gms</TableCell>
                <TableCell>{Number(data.stone_price.toFixed(2)).toLocaleString()}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell className="text-brandColor">Making Charges</TableCell>
              <TableCell>{product.value_Addition} %</TableCell>
              <TableCell>-</TableCell>
              <TableCell>{Number(valueAdditionPrice.toFixed(2)).toLocaleString()}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-brandColor">Sub Total</TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
              <TableCell>{Number((itemBasePrice + valueAdditionPrice).toFixed(2)).toLocaleString()}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-brandColor">{`Tax (GST ${product.gst} %)`}</TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
              <TableCell>{Number(gstPrice.toFixed(2)).toLocaleString()}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-brandColor">Grand Total</TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
              <TableCell>
                {Number((itemBasePrice + valueAdditionPrice + otherStonePrice + gstPrice).toFixed(2)).toLocaleString()}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default ProductPriceBreakdown
