import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento website</td>
            <td className="deposit">R$ 12.000</td>
            <td>Desenvolvimento</td>
            <td>14/02/2021</td>
          </tr>

          <tr>
            <td>Internet</td>
            <td className="withdraw">-R$ 200</td>
            <td>Casa</td>
            <td>14/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
