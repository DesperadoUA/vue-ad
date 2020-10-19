<template>
    <div>
        <v-row
                justify="center"
                class="mr-3"
        >

            <v-btn
                    color="orange"
                    class="color_white primary"
                    @click="buyModal = true"
            >
                Buy
            </v-btn>
            <v-dialog
                    v-model="buyModal"
                    max-width="500px"
            >
                <v-card>
                    <v-card-title>
                        <h1 class="text--primary">
                            Do you want to buy it?
                        </h1>
                    </v-card-title>
                    <v-divider class="mt-1"></v-divider>
                    <v-card-text>
                        <v-text-field
                                name="name"
                                label="Your name"
                                type="text"
                                v-model="name"
                        ></v-text-field>
                        <v-text-field
                                name="phone"
                                label="Phone"
                                type="text"
                                v-model="phone"
                                multi-line
                        ></v-text-field>
                    </v-card-text>
                    <v-divider class="mt-1"></v-divider>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                                color="success"
                                text
                                @click="onSave"
                                :disabled="localLoading"
                                :loading="localLoading"
                        >
                            Buy It!
                        </v-btn>
                        <v-btn
                                color="primary"
                                text
                                @click="onCancel"
                                :disabled="localLoading"
                        >
                            Close
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
    </div>
</template>

<script>
	export default {
		props: ['ad'],
		data(){
			return {
				buyModal: false,
                name: '',
                phone: '',
                localLoading: false
			}
		},
		methods: {
			onSave(){
				if(this.name !=='' && this.phone !== '') {
					this.localLoading = true
					this.$store.dispatch('createOrder', {
						name: this.name,
                        phone: this.phone,
                        adId: this.ad.id,
                        ownerId: this.ad.ownerId
                    })
                        .finally(()=>{
							this.name = '',
                                this.phone = '',
                                this.localLoading = false,
							this.buyModal = false
                        })
                }
			},
			onCancel(){this.name = '',
                this.phone = '',
                this.buyModal = false
			}
		}
	}
</script>

<style>

</style>