<template>
    <div v-if="!loading && myAds.length !== 0">
        <v-container>
            <v-layout row>
                <v-flex xs12 sm6 offset-sm3>
                    <h1 class="text--secondary mb-3">My ads</h1>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex xs12 sm6 offset-sm3>
                    <v-card
                            class="elevation-12 mb-5"
                            v-for="item in myAds"
                            :key="item.id">
                        <v-layout row>
                            <v-flex xs4>
                                <v-img
                                        class="white--text align-end"
                                        height="200px"
                                        :src="item.imageSrc"
                                ></v-img>
                            </v-flex>
                            <v-flex xs8>
                                <v-card-text>
                                    <h2 class="text--primary mb-2">{{item.title}}</h2>
                                    <p>{{item.description}}</p>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn class="info mr-3 mb-1"
                                    :to="/ad/+item.id">Open</v-btn>
                                </v-card-actions>
                            </v-flex>
                        </v-layout>
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
	export default {
		computed: {
			myAds() {
				return this.$store.getters.myAds
            },
            loading() {
				return this.$store.getters.loading
            }
        }
	}
</script>
<style>
    .border_red {
        border: 1px solid red;
    }
    .border_green {
        border: 1px solid green;
    }

</style>