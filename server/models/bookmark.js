'use strict';

function Bookmark(){
}

Object.defineProperty(Bookmark, 'collection', {
  get: function(){return global.mongodb.collection('bookmarks');}
});

Bookmark.create = function(o, user, cb){
  o.userId = user._id;
  Bookmark.collection.save(o, cb);
};

Bookmark.all = function(user, cb){
  Bookmark.collection.find({userId:user._id}).toArray(cb);
};

module.exports = Bookmark;

