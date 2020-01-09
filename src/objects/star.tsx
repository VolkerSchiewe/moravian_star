import React, { useEffect, useRef } from 'react'
import { Face3, Vector3 } from 'three';

interface StarProps {
  position: number[],
  color?: string
}

function Star25({ position, color }: StarProps) {
  const ref = useRef();
  const length = 1;
  const vertices = [
    new Vector3(length / 2, length / 2 + Math.sqrt(length / 2), length / 2), // 0
    new Vector3(length / 2 + Math.sqrt(length / 2), length / 2, length / 2), // 1
    new Vector3(length / 2 + Math.sqrt(length / 2), -length / 2, length / 2), // 2
    new Vector3(length / 2, -length / 2 - Math.sqrt(length / 2), length / 2), // 3
    new Vector3(-length / 2, -length / 2 - Math.sqrt(length / 2), length / 2), // 4
    new Vector3(-length / 2 - Math.sqrt(length / 2), -length / 2, length / 2), // 5
    new Vector3(-length / 2 - Math.sqrt(length / 2), length / 2, length / 2), // 6
    new Vector3(-length / 2, length / 2 + Math.sqrt(length / 2), length / 2), // 7

    new Vector3(length / 2, length / 2 + Math.sqrt(length / 2), -length / 2), // 8
    new Vector3(length / 2 + Math.sqrt(length / 2), length / 2, -length / 2), // 9
    new Vector3(length / 2 + Math.sqrt(length / 2), -length / 2, -length / 2), // 10
    new Vector3(length / 2, -length / 2 - Math.sqrt(length / 2), -length / 2), // 11
    new Vector3(-length / 2, -length / 2 - Math.sqrt(length / 2), -length / 2), // 12
    new Vector3(-length / 2 - Math.sqrt(length / 2), -length / 2, -length / 2), // 13
    new Vector3(-length / 2 - Math.sqrt(length / 2), length / 2, -length / 2), // 14
    new Vector3(-length / 2, length / 2 + Math.sqrt(length / 2), -length / 2), // 15

    new Vector3(length / 2, length / 2, length / 2 + Math.sqrt(length / 2)), // 16
    new Vector3(length / 2, -length / 2, length / 2 + Math.sqrt(length / 2)), // 17
    new Vector3(-length / 2, -length / 2, length / 2 + Math.sqrt(length / 2)), // 18
    new Vector3(-length / 2, length / 2, length / 2 + Math.sqrt(length / 2)), // 19

    new Vector3(length / 2, length / 2, -length / 2 - Math.sqrt(length / 2)), // 20
    new Vector3(length / 2, -length / 2, -length / 2 - Math.sqrt(length / 2)), // 21
    new Vector3(-length / 2, -length / 2, -length / 2 - Math.sqrt(length / 2)), // 22
    new Vector3(-length / 2, length / 2, -length / 2 - Math.sqrt(length / 2)), // 23
  ];
  const faces = [
    new Face3(0, 1, 9),
    new Face3(9, 8, 0),

    new Face3(1, 2, 10),
    new Face3(10, 9, 1),

    new Face3(2, 3, 11),
    new Face3(11, 10, 2),

    new Face3(3, 4, 12),
    new Face3(12, 11, 3),

    new Face3(4, 5, 13),
    new Face3(13, 12, 4),

    new Face3(5, 6, 14),
    new Face3(14, 13, 5),

    new Face3(6, 7, 15),
    new Face3(15, 14, 6),

    new Face3(0, 8, 15),
    new Face3(0, 15, 7),


    // Side 1
    new Face3(0, 7, 16),
    new Face3(7, 19, 16),

    new Face3(18, 17, 16),
    new Face3(16, 19, 18),

    new Face3(17, 4, 3),
    new Face3(17, 18, 4),

    new Face3(5, 18, 19),
    new Face3(19, 6, 5),

    new Face3(16, 17, 2),
    new Face3(2, 1, 16),

    // Side 2
    new Face3(20, 15, 8),
    new Face3(20, 23, 15),

    new Face3(20, 21, 22),
    new Face3(22, 23, 20),

    new Face3(21, 11, 12),
    new Face3(12, 22, 21),

    new Face3(23, 22, 13),
    new Face3(13, 14, 23),

    new Face3(20, 9, 10),
    new Face3(10, 21, 20),

    // triangles
    new Face3(7, 6, 19),
    new Face3(18, 5, 4),
    new Face3(17, 3, 2),
    new Face3(0, 16, 1),

    new Face3(15, 23, 14),
    new Face3(8, 9, 20),
    new Face3(21, 10, 11),
    new Face3(13, 22, 12),
  ];
  useEffect(() => {
    const geometry = ref.current;
    geometry.computeFaceNormals();
    geometry.faces.forEach((f, idx) => {
      const jagVertex = f.normal.clone();
      jagVertex.multiplyScalar(4);
      geometry.vertices.push(jagVertex);
      geometry.faces.push(new Face3(f.a, f.b, 24 + idx));
      geometry.faces.push(new Face3(f.b, f.c, 24 + idx));
      geometry.faces.push(new Face3(f.c, f.a, 24 + idx))
    });
    geometry.computeFaceNormals()
  });


  return (
    <mesh castShadow position={ position }>
      <geometry attach='geometry' vertices={ vertices } faces={ faces } ref={ ref }/>
      <meshPhysicalMaterial attach='material' color={ color }/>
    </mesh>
  )
}

function Star() {
  return (
    <Star25 position={ [0, 4, 0] } color={ "#ffc500" }/>
  )

}

export default Star