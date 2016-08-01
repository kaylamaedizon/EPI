Employees = new Mongo.Collection('employees');

Employees.allow({
	insert: function(userId, doc){
		return !!userId;
	},
	update: function(userId, doc){
		return !!userId;
	}
});

EmployeeSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},
	position: {
		type: String,
		label: "Position"
	},
	dateHired: {
		type: Date,
		label: "Date Hired"
	},
	idNum: {
		type: String,
		label: "ID Number"
	},
	sssNum: {
		type: String,
		label: "SSS Number"
	},
	philHealthNum: {
		type: String,
		label: "PhilHealth Number"
	},
	pagIbigNum: {
		type: String,
		label: "Pag-Ibig Number"
	},
	tinNum: {
		type: String,
		label: "TIN Number"
	},
	dept: {
		type: String,
		label: "Department"
	},
	homeAd: {
		type: String,
		label: "Home Address"
	},
	birthday: {
		type: Date,
		label: "Birthday"
	},
	status: {
		type: String,
		label: "Status"
	},
	contactPerson: {
		type: String,
		label: "Contact Person",
		optional: true
	},
	relation: {
		type: String,
		label: "Relation",
		optional: true
	},
	contactNum: {
		type: String,
		label: "Contact Number",
		optional: true
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

Employees.attachSchema( EmployeeSchema );