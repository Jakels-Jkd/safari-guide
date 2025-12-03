   <script setup>
            const t = ref(78);
            const r = ref(42);

           const w = ref(t.value + r.value)

            </script >

            <template>
              <div>
                The total is {{ w }}
              </div>
            </template>