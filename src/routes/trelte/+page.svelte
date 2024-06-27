<script lang="ts">
    import { Canvas } from '@threlte/core'
    import { T } from '@threlte/core'
    import Scroller from '@sveltejs/svelte-scroller'
    import Container from '$lib/components/Container.svelte'

    import { OrbitControls } from '@threlte/extras'
    import Duck from '$lib/yellow_rubber_duck.svelte'

    let progress: number

    let top = 0.0
    let threshold = 0.2
    let bottom = 0.9

    $: duckPosition = [progress * 10, progress * 5, 10]
    $: rotation = progress * Math.PI

    // TODO: build an object that serves as "keyframes"
    // for indicating where the model should go at what point
    // maybe a mapping object -> section and interpolation
    // methods from claude
</script>

<Container>
    <Scroller bind:progress {top} {threshold} {bottom}>
        <div slot="background" class="h-[100vh]">
            <div class="w-full mx-auto h-full">
                <Canvas>
                    <T.PerspectiveCamera
                        makeDefault
                        position={[10, 10, 10]}
                        on:create={({ ref }) => {
                            ref.lookAt(...duckPosition)
                        }}
                    >
                        <OrbitControls />
                    </T.PerspectiveCamera>
                    <T.Group
                        rotation.y={rotation}
                        position={duckPosition}
                        scale={[2, 2, 2]}
                    >
                        <Duck />
                    </T.Group>
                </Canvas>
            </div>
        </div>

        <div slot="foreground" class="w-3/4 mx-auto">
            <section class="pt-32 h-fit">
                <div class="font-bold text-3xl">pato</div>
                <div>
                    asdfklasñldf jaslñkdjf añlsdkjf sldkfj saldfñajsl dfkjs
                    ldfkjsldkf jsldfkj
                </div>
            </section>

            <section class="pt-32">
                <div class="font-bold text-3xl">pato</div>
                <div>
                    asdfklasñldf jaslñkdjf añlsdkjf sldkfj saldfñajsl dfkjs
                    ldfkjsldkf jsldfkj
                </div>
            </section>
            <section class="pt-32">
                <div class="font-bold text-3xl">pato</div>
                <div>
                    asdfklasñldf jaslñkdjf añlsdkjf sldkfj saldfñajsl dfkjs
                    ldfkjsldkf jsldfkj
                </div>
            </section>
            <section class="pt-32">
                <div class="font-bold text-3xl">pato</div>
                <div>
                    asdfklasñldf jaslñkdjf añlsdkjf sldkfj saldfñajsl dfkjs
                    ldfkjsldkf jsldfkj
                </div>
            </section>
        </div>
    </Scroller>

    <div class="mt-32 text-xl flex flex-col gap-4">
        <p>
            Officia sit nulla exercitation tempor dolore proident reprehenderit
            proident. Veniam sint veniam incididunt minim excepteur ut velit
            quis eiusmod culpa consequat quis est elit. Ut est qui elit amet
            eiusmod culpa esse. Dolor commodo culpa do veniam cillum amet in
            anim. Tempor non nostrud excepteur cupidatat nisi. Culpa occaecat
            exercitation eiusmod. Id sunt deserunt fugiat irure dolore fugiat
            elit ullamco Lorem est exercitation dolore ad ex.
        </p>

        <p>
            Officia sit nulla exercitation tempor dolore proident reprehenderit
            proident. Veniam sint veniam incididunt minim excepteur ut velit
            quis eiusmod culpa consequat quis est elit. Ut est qui elit amet
            eiusmod culpa esse. Dolor commodo culpa do veniam cillum amet in
            anim. Tempor non nostrud excepteur cupidatat nisi. Culpa occaecat
            exercitation eiusmod. Id sunt deserunt fugiat irure dolore fugiat
            elit ullamco Lorem est exercitation dolore ad ex.
        </p>

        <p>
            Officia sit nulla exercitation tempor dolore proident reprehenderit
            proident. Veniam sint veniam incididunt minim excepteur ut velit
            quis eiusmod culpa consequat quis est elit. Ut est qui elit amet
            eiusmod culpa esse. Dolor commodo culpa do veniam cillum amet in
            anim. Tempor non nostrud excepteur cupidatat nisi. Culpa occaecat
            exercitation eiusmod. Id sunt deserunt fugiat irure dolore fugiat
            elit ullamco Lorem est exercitation dolore ad ex.
        </p>

        <p>
            Officia sit nulla exercitation tempor dolore proident reprehenderit
            proident. Veniam sint veniam incididunt minim excepteur ut velit
            quis eiusmod culpa consequat quis est elit. Ut est qui elit amet
            eiusmod culpa esse. Dolor commodo culpa do veniam cillum amet in
            anim. Tempor non nostrud excepteur cupidatat nisi. Culpa occaecat
            exercitation eiusmod. Id sunt deserunt fugiat irure dolore fugiat
            elit ullamco Lorem est exercitation dolore ad ex.
        </p>
    </div>
</Container>

<style>
    section {
        height: 100vh;
    }
</style>
