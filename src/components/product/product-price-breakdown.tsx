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
    <div className="flex flex-col rounded-lg border border-red-400 bg-red-50 p-2">
      <h1 className="text-lg">{title}</h1>
      <span className="mb-2 mt-1 h-0.5 w-full bg-red-400" />
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
              <TableCell className="text-red-400">Metal</TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{product.material_type.name}</TableCell>
              <TableCell>{product.material_type.price} / gms</TableCell>
              <TableCell>{product.item_Net_Weight} / gms</TableCell>
              <TableCell>{itemBasePrice.toLocaleString()}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-red-400">Stone</TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
            </TableRow>
            {product.stone_information.map((data, index) => (
              <TableRow key={index}>
                <TableCell className="capitalize">{data.stone_name}</TableCell>
                <TableCell>-</TableCell>
                <TableCell>{data.stone_weight} / gms</TableCell>
                <TableCell>{data.stone_price.toLocaleString()}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell className="text-red-400">Making Charges</TableCell>
              <TableCell>{product.value_Addition} %</TableCell>
              <TableCell>-</TableCell>
              <TableCell>{valueAdditionPrice.toLocaleString()}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-red-400">Sub Total</TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
              <TableCell>{(itemBasePrice + valueAdditionPrice).toLocaleString()}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-red-400">{`Tax (GST ${product.gst} %)`}</TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
              <TableCell>{gstPrice.toLocaleString()}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-red-400">Grand Total</TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
              <TableCell>
                {(itemBasePrice + valueAdditionPrice + otherStonePrice + gstPrice).toLocaleString()}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default ProductPriceBreakdown
