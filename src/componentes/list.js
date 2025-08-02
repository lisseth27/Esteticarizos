
import Link from "next/link";
export function List() {
  return (
    <div className="list">
      <td>
        <tr>
          <h1> Categorias </h1>
         
        </tr>
        <tr>
          <Link href="/productos">Cortes de pelo</Link>
        </tr>
        <tr>
          <Link href="/productos">Maquillajes</Link>
        </tr>
        <tr>
          <Link href="/productos">Sombras</Link>
        </tr>
        <tr>
          <Link href="/productos">Lapices de ojos</Link>
        </tr>
        <tr>
          <Link href="/productos">Correctores</Link>
        </tr>
      </td>
    </div>
  );
}
