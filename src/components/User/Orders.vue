<template>
    <v-container>
        <v-layout row v-if="!loading">
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-3">Orders</h1>
                <v-list
                        flat
                        subheader
                        three-line
                >
                    <v-list-item-group
                            multiple
                            active-class=""
                    >
                        <v-list-item
                            v-for="item of orders"
                            :key="item.id"
                        >
                            <template>
                                <v-list-item-action>
                                    <v-checkbox
                                            :input-value="item.done"
                                            :id="item.id"
                                            @change="markDone(item)"></v-checkbox>
                                </v-list-item-action>
                                <v-list-item-content>
                                    <v-list-item-title>{{item.name}}</v-list-item-title>
                                    <v-list-item-subtitle>{{item.phone}}</v-list-item-subtitle>
                                </v-list-item-content>
                                <v-list-tile-action>
                                    <v-btn
                                            depressed
                                            color="primary"
                                            :to="'/ad/'+item.adId"
                                    >
                                        Primary
                                    </v-btn>
                                </v-list-tile-action>
                            </template>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
	export default {
		data(){
			return {
            }
		},
        methods: {
			markDone(item){
				this.$store.dispatch('markOrderDone', item.id)
                    .then(()=>{item.done = true})
                    .catch(()=>{})
            }
        },
        computed: {
			loading(){
				return this.$store.getters.loading
            },
            orders(){
				return this.$store.getters.orders
            }
        },
        created(){
			this.$store.dispatch('fetchOrders')
        }
	}
</script>