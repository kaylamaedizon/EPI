Projects = new Mongo.Collection('projects');

Projects.allow({
	insert: function(userId, doc){
		return !!userId;
	},
	update: function(userId, doc){
		return !!userId;
	}
});

Worker = new SimpleSchema({
	name: {
		type: String
	},
	skill: {
		type: String
	}
});

ProjectSchema = new SimpleSchema({
	CompanyName: {
		type: String,
		label: "Company Name"
	},
	Address: {
		type: String,
		label: "Address"
	},
	ContactPerson: {
		type: String,
		label: "Contact Person"
	},
	Position: {
		type: String,
		label: "Position"
	},
	WorkOrder: {
		type: String,
		label: "Work Order"
	},
	Date: {
		type: String,
		label: "Date"
	},
	ContactNum: {
		type: String,
		label: "Contact Number"
	},
	DueDate: {
		type: String,
		label: "Due Date"
	},
	System: {
		type: String,
		label: "System"
	},
	Capacity: {
		type: String,
		label: "Capacity"
	},
	WaterSource: {
		type: String,
		label: "Water Source"
	},
	Minutes: {
		type: String,
		label: "Minutes of the Meeting"
	},
	workers: {
		type: [Worker]
	},
	awarded: {
		type: Boolean,
		defaultValue: false,
		optional: true,
		autoform: {
			type: "hidden"
		}
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

Meteor.methods({
	toggleAwardedItem: function(id, currentState){
		Projects.update(id, {
			$set: {
				awarded: !currentState
			}
		});
	},
	deleteProject: function(id){
		Projects.remove(id);
	}
});

Projects.attachSchema( ProjectSchema );