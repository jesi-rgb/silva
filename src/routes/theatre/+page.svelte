<script lang="ts">
    import { onMount } from 'svelte'
    import { Canvas } from '@threlte/core'
    import { Theatre, SheetObject, Project, Sheet } from '@threlte/theatre'
    import type { IProject, ISheet } from '@theatre/core'

    let scrollY
    let innerHeight
    let outerHeight

    let project: IProject, sheet: ISheet

    $: scrollProgress = Math.min(scrollY / (outerHeight - innerHeight), 1)

    const config = {
        position: {
            x: 0,
            y: 0,
            z: 0
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0
        }
    }

    let animatedObject

    onMount(() => {
        const sequence = sheet.sequence

        sequence.attachRafDriver({
            name: 'scroll',
            rate: 1,
            range: [0, 1],
            update: (newTick) => {
                sequence.position = newTick
            }
        })
    })

    $: if (animatedObject && typeof scrollProgress !== 'undefined') {
        sheet.sequence.position = scrollProgress
    }
</script>

<svelte:window bind:scrollY bind:innerHeight bind:outerHeight />

<div style="height: 300vh;">
    <Canvas>
        <Project bind:project>
            <Sheet bind:sheet>
                <SheetObject
                    bind:self={animatedObject}
                    {sheet}
                    {config}
                    let:position
                    let:rotation
                >
                    <mesh {position} {rotation}>
                        <boxGeometry args={[1, 1, 1]} />
                        <meshStandardMaterial color="#ff3e00" />
                    </mesh>
                </SheetObject>

                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 10]} />
            </Sheet>
        </Project>
    </Canvas>
</div>

<div style="position: fixed; top: 10px; left: 10px; color: white;">
    Scroll Progress: {scrollProgress.toFixed(2)}
</div>
