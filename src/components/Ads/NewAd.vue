<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-3">Create new ad</h1>
                <v-form v-model="valid" ref="form" validation>
                    <v-text-field
                            name="title"
                            label="Ad title"
                            type="text"
                            v-model="title"
                            :rules="titleRules"
                    ></v-text-field>
                    <v-textarea
                            name="description"
                            label="Ad description"
                            multi-line
                            v-model="description"
                            :rules="descriptionRules"
                    ></v-textarea>
                </v-form>
                <v-layout row>
                    <v-flex xs12>
                        <v-btn
                                color="blue-grey"
                                class="ma-2 white--text warning"
                                @click="triggerUpload"
                        >
                            Upload
                            <v-icon
                                    right
                                    dark
                            >
                                mdi-cloud-upload
                            </v-icon>
                        </v-btn>
                        <input
                                type="file"
                                style="display: none"
                                accept="image/*"
                                ref="fileInput"
                                @change="onFileChange"
                        />
                        <hr>
                        <img
                                :src="imageSrc"
                                class="thumbnail mt-3"
                                v-if="imageSrc"
                        />
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-container
                            class="px-0"
                            fluid
                    >
                        <v-switch
                                v-model="promo"
                                label="Ad publish"
                        ></v-switch>
                    </v-container>
                </v-layout>
                <v-layout row>
                    <v-spacer></v-spacer>
                    <v-btn class="success"
                           :disabled="!valid || !image|| loading"
                           :loading="loading"
                        @click="createAd"
                    >Create Ad</v-btn>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
	export default {
		data(){
			return {
				title: '',
                description: '',
				promo: false,
                valid: false,
				titleRules: [v => !!v || 'Title is required',],
				descriptionRules: [v => !!v || 'Description is required',],
                image: null,
                imageSrc: ''
            }
		},
        methods: {
			createAd(){
                if(this.$refs.form.validate() && this.image){const ad = { title: this.title,
                    description: this.description,
                    promo: this.promo,
                    image: this.image
                }
                   this.$store.dispatch('createAd', ad)
                       .then(() => {this.$router.push('/list')})
                       .catch(() => {})
                }
            },
			triggerUpload(){
				this.$refs.fileInput.click()
            },
			onFileChange(event){
				const file = event.target.files[0]
                const reader = new FileReader()
                reader.onload = e => {
					this.imageSrc = reader.result
                    console.log(e)
                }
                reader.readAsDataURL(file)
                this.image = file
            }
        },
        computed: {
			loading(){
				return this.$store.getters.loading
            }
        }
	}
</script>
<style>
    .thumbnail {
        max-width: 300px;
    }
</style>