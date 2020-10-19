<template>
    <div>
        <v-row
                justify="center"
                class="mr-3"
        >

            <v-btn
                    color="orange"
                    class="color_white"
                    @click="dialog2 = true"
            >
                Edit
            </v-btn>
            <v-dialog
                    v-model="dialog2"
                    max-width="500px"
            >
                <v-card>
                    <v-card-title>
                        <h1 class="text--primary">
                            Edit ad
                        </h1>
                    </v-card-title>
                    <v-divider class="mt-1"></v-divider>
                    <v-card-text>
                        <v-text-field
                                name="title"
                                label="Title"
                                type="text"
                                v-model="editedTitle"
                        ></v-text-field>
                        <v-text-field
                                name="description"
                                label="Description"
                                type="text"
                                multi-line
                                v-model="editedDescription"
                        ></v-text-field>
                    </v-card-text>
                    <v-divider class="mt-1"></v-divider>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                                color="success"
                                text
                                @click="onSave"
                        >
                            Save
                        </v-btn>
                        <v-btn
                                color="primary"
                                text
                                @click="onCancel"
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
		props:['ad'],
		name: "edit-ad-modal",
        data(){
			return {
				dialog2: false,
                editedTitle: this.ad.title,
				editedDescription: this.ad.description
            }
        },
        methods: {
			onSave(){
				if(this.editedDescription !== '' && this.editedTitle !== '') {

					this.$store.dispatch('updateAd', {
						title: this.editedTitle,
                        description: this.editedDescription,
                        id: this.ad.id
                    })
					this.dialog2 = false
                }
            },
            onCancel(){
				this.dialog2 = false
                this.editedTitle = this.ad.title
                this.editedDescription = this.ad.description
            }
        }
	}
</script>

<style>

</style>