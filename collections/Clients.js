Clients = new Mongo.Collection('clients');

Clients.allow({
	insert: function(userId, doc){
		return !!userId;
	},
	update: function(userId, doc){
		return !!userId;
	}
});

ContactPerson = new SimpleSchema({
	name: {
		type: String
	},
	position: {
		type: String
	},
	local: {
		type: String
	},
	mobile: {
		type: String
	},
	email: {
		type: String
	}
});

ClientSchema = new SimpleSchema({
	clientID: {
		type: String,
		label: "Client ID",
		autoValue: function(){
			return this.userId
		},
		autoform: {
			type: "hidden"
		}
	},
	name: {
		type: String,
		label: "Client Name"
	},
	address: {
		type: String,
		label: "Address Office"
	},
	tinNum: {
		type: String,
		label: "TIN Number"
	},
	salesIncharge: {
		type: String,
		label: "Sales Incharge"
	},
	phoneNum: {
		type: String,
		label: "Phone Number"
	},
	fax: {
		type: String,
		label: "Fax"
	},
	emailAdd: {
		type: String,
		label: "Email Address"
	},
	contactPerson: {
		type: [ContactPerson]
	},
	termOfPayment: {
		type: String,
		label: "Terms of Payment"
	},
	author: {
		type: String,
		label: "Author",
		autoValue: function(){
			return this.userId
		},
		autoform: {
			type: "hidden"
		}
	},
	createdAt: {
		type: Date,
		label: "Created At",
		autoValue: function(){
			return new Date()
		},
		autoform: {
			type: "hidden"
		}
	}
});

Clients.attachSchema( ClientSchema );