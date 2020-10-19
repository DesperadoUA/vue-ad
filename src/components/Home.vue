<template>
    <div v-if="!loading">
        <v-container>
            <v-layout row>
                <v-flex xs12>
                    <v-carousel>
                        <v-carousel-item
                                v-for="(item,i) in promoAds"
                                :key="i"
                                :src="item.imageSrc"
                                reverse-transition="fade-transition"
                                transition="fade-transition"
                        ></v-carousel-item>
                    </v-carousel>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container fluide>
            <v-layout row>
                <v-flex xs12 class="card_wrapper">
                    <v-card
                            class="mx-auto card_item"
                            max-width="400"
                            v-for="item of ads"
                            :key="item.id"
                    >
                        <v-img
                                class="white--text align-end"
                                height="200px"
                                :src="item.imageSrc"
                        >
                            <v-card-title>{{item.title}}</v-card-title>
                        </v-img>
                        <v-card-text class="text--primary">
                            <div>{{item.description}}</div>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                    color="orange"
                                    text
                            >
                                <v-btn :to="'/ad/'+item.id">Open</v-btn>
                            </v-btn>
                            <app-buy-modal :ad="item"></app-buy-modal>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
    <div v-else>
        <v-container>
            <v-layout row>
                <v-flex xs12 class="text-center pt-5">
                    <v-progress-circular
                            :size="70"
                            :width="7"
                            color="purple"
                            indeterminate
                    ></v-progress-circular>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>
<script>
    export default{ computed: { promoAds(){return this.$store.getters.promoAds
            },
			ads(){
				return this.$store.getters.ads
			},
            loading(){return this.$store.getters.loading
            }
        }
    }
</script>
<style>
    .card_wrapper {
        display: flex;
        flex-wrap: wrap;
    }
    .card_item {
        margin-bottom: 20px;
    }
</style>