<script lang="ts">
    import { T } from '@threlte/core'
    import { RoundedBoxGeometry, interactivity } from '@threlte/extras'
    import { SheetObject } from '@threlte/theatre'
    import { DEG2RAD } from 'three/src/math/MathUtils.js'

    import { Canvas } from '@threlte/core'
    import { Theatre } from '@threlte/theatre'
    import state from './state.json'
</script>

<div class="border h-[80vh] w-full">
    <Canvas>
        <Theatre
            config={{
                state
            }}
        >
            <SheetObject key="Directional Light" let:Sync let:Transform>
                <T.DirectionalLight castShadow>
                    <Sync intensity color />
                </T.DirectionalLight>
            </SheetObject>

            <SheetObject key="Ambient Light" let:Sync>
                <T.AmbientLight>
                    <Sync intensity color />
                </T.AmbientLight>
            </SheetObject>

            <T.PerspectiveCamera
                makeDefault
                position={[5, 2, 5]}
                on:create={({ ref }) => {
                    ref.lookAt(0, 0, 0)
                }}
            />

            <SheetObject
                key="Box"
                let:Sync
                let:select
                let:deselect
                let:Transform
            >
                <T.Mesh
                    on:click={select}
                    on:pointermissed={deselect}
                    castShadow
                >
                    <RoundedBoxGeometry radius={0.4} />
                    <T.MeshStandardMaterial color="hotpink" let:ref>
                        <Sync
                            type={ref}
                            color
                            roughness
                            metalness
                            side
                            opacity
                        />
                    </T.MeshStandardMaterial>
                </T.Mesh>
            </SheetObject>

            <SheetObject key="circle" let:Transform>
                <T.Mesh
                    receiveShadow
                    position.y={-1}
                    rotation.x={-90 * DEG2RAD}
                >
                    <T.CircleGeometry args={[1.4, 48]} />
                    <T.MeshStandardMaterial />
                </T.Mesh>
            </SheetObject>
        </Theatre>
    </Canvas>
</div>
