if (self.CavalryLogger) { CavalryLogger.start_js(["871o\/"]); }

__d("ProfileTabConst",[],(function(a,b,c,d,e,f){e.exports={ALBUM:"album",ALBUMS:"albums",ALL_ACTIVITY:"allactivity",APPROVAL:"approve",APPS:"apps",BOXES:"box_3",COMMERCE:"shop",DEALS:"deals",DRAFT_NOTES:"notes_drafts",EVENTS:"events",FAVORITES:"favorites",FUNDRAISERS:"fundraisers",FOLLOWERS:"followers",FOLLOWING:"following",FRIENDS:"friends",FRIENDS_MUTUAL:"friends_mutual",FUN_FACTS:"did_you_know",GROUPS:"groups",GROUPS_MUTUAL:"groups_mutual",INFO:"info",LIKES:"likes",LOCATIONS:"locations",MAP:"map",MEMORIAL_CONTACT:"legacy_contact",MY_NOTES:"notes_my_notes",NEARBY:"nearby",NOTES:"notes",OVERVIEW:"about",PAST_EVENTS:"pe",PERSONALITY_QUESTIONS:"personality_questions",PHOTOS:"photos",PHOTOS_ALBUM:"media_set",PHOTOS_ALBUMS:"photos_albums",PHOTOS_ALL:"photos_all",PHOTOS_BY_OTHERS:"photos_by_others",PHOTOS_STREAM:"photos_stream",PHOTOS_SYNCED:"photos_synced",POSTS:"posts",POSTS_OTHERS:"posts_to_page",RESUME:"resume",REVIEWS:"reviews",SAVE_LISTS:"lists",SAVED_FOR_LATER:"saved",SPACES:"post_sets",STORIES_ARCHIVE:"archive",SPORTS:"sports",TAGGED_NOTES:"notes_tagged",TASKS:"tasks",TIMELINE:"timeline",TRIBUTES:"tributes",TIMELINE_OVERVIEW:"grid",VIDEOS:"videos",WALL:"wall",WALL_ADMIN:"wall_admin",WIKIPEDIA:"wiki",PAGE_GETTING_STARTED:"page_getting_started",PAGE_MAP:"page_map",PAGE_MENU:"menu",PAGE_FOOD_DRINK_MENU:"food_drink_menu",PAGE_FOOD_DRINK_PAST_ORDERS:"food_drink_past_orders",PAGE_BOOK_PREVIEW:"book_preview",PAGE_PRODUCTS:"products",PAGE_SERVICES:"services",PAGES_CONTENT_TAB:"content_tab",PAGE_FAN_QUESTIONS:"questions",PAGES_REACTION_SANDBOX:"reaction_sandbox",PAGE_OFFERS:"offers",PAGE_JOB_PERMALINK:"page_job_permalink",HOME:"home",ENDORSEMENTS:"endorsements",ISSUES:"issues",PAGE_JOBS:"jobs",PAGE_LIVE_VIDEOS:"live_videos",PAGE_EPISODES:"episodes",PAGE_SHOP_NT:"shop_nt",PAGE_SHOW:"show",PAGE_PLAYLISTS:"playlists",PAGE_SHOW_VIDEOS:"show_videos",CAST_AND_CREW:"cast_and_crew",COMMUNITY:"community",FEATURING:"featuring",FREQUENTLY_ASKED_QUESTIONS:"frequently_asked_questions",INSTAGRAM:"instagram",LOYALTY:"loyalty",MOVIE_PROVIDER:"movie_provider",PODCASTS:"podcasts",PROFILE_OVERLAYS:"profile_overlays",STORY:"story",CUSTOM:"custom",OG_APP_URL_PREFIX:"app_",OG_APPID_PREFIX:"og_app_",OG_NAMESPACE_PREFIX:"og_ns_",OG_BOOKS:"books",OG_FITNESS:"fitness",OG_GAMES:"games",OG_MOVIES:"movies",OG_MUSIC:"music",OG_NEWS:"news",OG_TV_SHOWS:"tv",OG_VIDEO:"video"}}),null);
__d("UFICommentFilterFallbackWarning.react",["cx","fbt","React","UFIPagerGenerator","UFIPaging","WebCommentViewOption","distinctArrayBy"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;function j(a,c,d){var e=c.availableComments;c=c.repliesMap;d?d=c[a]||[]:d=e||[];d=b("distinctArrayBy")(d,function(a){return a.id});return d.length}i=babelHelpers.inherits(a,b("React").Component);i&&i.prototype;a.shouldRender=function(a,c,d,e){__p&&__p();if(!a)return!1;var f=a.availableComments,g=a.commentCounts,h=a.deletedCounts,i=a.hasPagedToplevel,k=a.orderingMode,l=a.ranges,m=a.repliesExpandedMap,n=a.repliesMap;if(!f||!g||!h||!k||!l||!m||!n)return!1;f=Math.max((g[c]||0)-(h[c]||0),0);n=l[c];if(!n||!f||k!==b("WebCommentViewOption").RANKED_THREADED||e&&!m[c]||!e&&!i)return!1;g=j(c,a,e);h=n.isLoadingPrev();l=n.isLoadingNext();m=n.getOffset();i=n.getLength();a=b("UFIPagerGenerator").isBottomPager(e,k,c);n=Math.min(i,f);if(d===b("UFIPaging").ALL)return!h&&!l&&m===0&&i>=f&&g<n;else if(!a&&d===b("UFIPaging").TOP||a&&d===b("UFIPaging").BOTTOM)return!h&&m===0&&g<n;else if(!a&&d===b("UFIPaging").BOTTOM||a&&d===b("UFIPaging").TOP)return!l&&m+i>=f&&g<n;return!1};a.prototype.$1=function(){__p&&__p();var a=this.props,b=a.asReplyWarning;a=a.ufiProps;a=a||{};var c=a.feedback,d=a.orderingMode;a=c&&c.orderingmodes||[];c=a.find(function(a){return a&&a.value===d});a=c&&c.name;if(b)if(a)return h._("{ordering mode name} is selected, so some replies may have been filtered out.",[h._param("ordering mode name",a)]);else return h._("Some replies may have been filtered out by the selected ordering mode.");else if(a)return h._("{ordering mode name} is selected, so some comments may have been filtered out.",[h._param("ordering mode name",a)]);else return h._("Some comments may have been filtered out by the selected ordering mode.")};a.prototype.render=function(){var a=this.props,c=a.ufiProps,d=a.targetID,e=a.pagingDirection;a=a.asReplyWarning;return!this.constructor.shouldRender(c,d,e,a)?null:b("React").createElement("div",{className:"_2ah8 _4oep UFIRow"},b("React").createElement("div",{className:"_2ah9"},this.$1()))};function a(){i.apply(this,arguments)}e.exports=a}),null);
__d("UFIShareNowMenuBootloader.react",["BootloadedComponent.react","JSResource","React","UFIShareLink.react"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h="ufi_share_link_placeholder",i="ufi_share_link_loaded";c=babelHelpers.inherits(a,b("React").Component);g=c&&c.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=g.constructor).call.apply(a,[this].concat(d)),this.state={openOnInit:!1,focusOnInit:!1,interacted:!1},b}a.prototype.render=function(){var a=this.state,c=a.openOnInit,d=a.focusOnInit;a=a.interacted;var e=this.props,f=e.endpoint,g=e.endpointData,j=e.onShow,k=e.onHide,l=e.openOnInitOverride;e=e.onMouseUp;var m=b("React").createElement(b("UFIShareLink.react"),{href:"#","data-testid":h,onMouseUp:e,onClick:function(){return this.setState({interacted:!0,openOnInit:!0})}.bind(this),onFocus:function(){return this.setState({interacted:!0,focusOnInit:!0})}.bind(this),onMouseOver:function(){return this.setState({openOnInit:!1,focusOnInit:!1,interacted:!0})}.bind(this)});return a||l?b("React").createElement(b("BootloadedComponent.react"),{bootloadLoader:b("JSResource")("UFIShareNowMenu.react").__setRef("UFIShareNowMenuBootloader.react"),bootloadPlaceholder:m,endpoint:f,endpointData:g,onShow:j,onHide:k,openOnInit:c||l,focusOnInit:d},b("React").createElement(b("UFIShareLink.react"),{onMouseUp:e,href:"#","data-testid":i})):m};e.exports=a}),null);
__d("XUIDialogButton.react",["cx","React","XUIButton.react","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();var h;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){"use strict";var a=this.props.action,c=(a==="confirm"?"layerConfirm":"")+(a==="cancel"?" layerCancel":"")+(a==="button"?" layerButton":""),d=this.props.href;a==="cancel"?d="#":a==="button"&&((d==null||d==="")&&(d="#"));return b("React").createElement(b("XUIButton.react"),babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,c),href:d,role:"button"}))};function a(){"use strict";h.apply(this,arguments)}e.exports=a}),null);
__d("XUIDialogOkayButton.react",["cx","fbt","React","XUIDialogButton.react","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i;c=b("React").PropTypes;i=babelHelpers.inherits(a,b("React").Component);i&&i.prototype;a.prototype.render=function(){"use strict";return b("React").createElement(b("XUIDialogButton.react"),babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,"_2z1w"),action:this.props.action,label:h._("OK")}))};function a(){"use strict";i.apply(this,arguments)}a.propTypes={action:c.oneOf(["confirm","cancel","button"]).isRequired};e.exports=a}),null);
__d("XUIDialogBody.react",["cx","React","XUIText.react","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();var h;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){"use strict";var a="_4-i2"+(this.props.useCustomPadding?"":" _pig");return b("React").createElement(b("XUIText.react"),babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,a),display:"block",size:this.props.fontSize}),this.props.children)};function a(){"use strict";h.apply(this,arguments)}a.defaultProps={fontSize:"medium"};e.exports=a}),null);
__d("XUIOverlayFooter.react",["cx","React","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();var h;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){"use strict";return b("React").createElement("div",babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,"_5lnf uiOverlayFooter")}),this.props.children)};function a(){"use strict";h.apply(this,arguments)}e.exports=a}),null);
__d("XUIDialogFooter.react",["cx","LeftRight.react","React","XUIOverlayFooter.react","XUIText.react","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();var h;c=b("React").PropTypes;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){"use strict";var a="_5a8u"+(this.props.fullBleedBorder?" _27qq":""),c=this.props,d=c.children,e=c.leftContent;c=babelHelpers.objectWithoutProperties(c,["children","leftContent"]);return b("React").createElement(b("XUIOverlayFooter.react"),babelHelpers["extends"]({},c,{className:b("joinClasses")(this.props.className,a)}),b("React").createElement(b("XUIText.react"),{display:"block",fontSize:this.props.fontSize},b("React").createElement(b("LeftRight.react"),null,b("React").createElement("div",null,e),b("React").createElement("div",null,d))))};function a(){"use strict";h.apply(this,arguments)}a.propTypes={fontSize:c.oneOf(["medium","inherit"]),fullBleedBorder:c.bool,leftContent:c.object};a.defaultProps={fontSize:"medium"};e.exports=a}),null);
__d("XUIDialogTitle.react",["cx","fbt","LeftRight.react","React","XUICloseButton.react","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i;i=babelHelpers.inherits(a,b("React").Component);i&&i.prototype;a.prototype.render=function(){"use strict";var a=null,c=this.props,d=c.closeButtonText,e=c.showCloseButton;c=babelHelpers.objectWithoutProperties(c,["closeButtonText","showCloseButton"]);e&&(a=b("React").createElement(b("XUICloseButton.react"),{"data-testid":"dialog_title_close_button",label:d,className:"layerCancel _51-t"}));d=b("React").Children.toArray(this.props.children);return b("React").createElement("div",babelHelpers["extends"]({},c,{className:b("joinClasses")(this.props.className,"_4-i0"+(e?" _2gb3":""))}),b("React").createElement(b("LeftRight.react"),null,b("React").createElement("h3",{className:"_52c9","data-hover":"tooltip","data-tooltip-display":"overflow"},d[0]),b("React").createElement("div",{className:"_51-u"},d.slice(1),a)))};function a(){"use strict";i.apply(this,arguments)}a.defaultProps={closeButtonText:h._("Close"),showCloseButton:!0};e.exports=a}),null);
__d("XWebGraphQLQueryController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/webgraphql/query/",{query_id:{type:"FBID"},variables:{type:"String"},doc_id:{type:"FBID"}})}),null);
__d("WebGraphQLQueryBase",["invariant","WebGraphQLLegacyHelper","XWebGraphQLQueryController"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function a(a){this.$1=a}a.prototype.__getVariables=function(){return this.$1};a.prototype.__getDocID=function(){return this.constructor.__getDocID()};a.__getController=function(){return b("XWebGraphQLQueryController")};a.__getDocID=function(){g(0,1804)};a.getURI=function(a){return b("WebGraphQLLegacyHelper").getURI({controller:this.__getController(),docID:this.__getDocID(),variables:a})};a.getLegacyURI=function(a){return b("WebGraphQLLegacyHelper").getURI({controller:this.__getController(),queryID:this.getQueryID(),variables:a})};a.getQueryID=function(){g(0,5095)};e.exports=a}),null);
__d("FBStoriesArchivedCardQueryWebGraphQLQuery",["WebGraphQLQueryBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports=function(){__p&&__p();var a;a=babelHelpers.inherits(c,b("WebGraphQLQueryBase"));a&&a.prototype;c.__getDocID=function(){"use strict";return"1610707235700293"};c.getQueryID=function(){"use strict";return"287468522090833"};function c(){"use strict";a.apply(this,arguments)}return c}()}),null);
__d("FBStoriesAudienceModeMutationCallMutationWebGraphQLMutation",["WebGraphQLMutationBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports=function(){__p&&__p();var a;a=babelHelpers.inherits(c,b("WebGraphQLMutationBase"));a&&a.prototype;c.__getDocID=function(){"use strict";return"1883080631763254"};c.getQueryID=function(){"use strict";return"196508534442477"};function c(){"use strict";a.apply(this,arguments)}return c}()}),null);
__d("FBStoriesBucketsQueryWebGraphQLQuery",["WebGraphQLQueryBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports=function(){__p&&__p();var a;a=babelHelpers.inherits(c,b("WebGraphQLQueryBase"));a&&a.prototype;c.__getDocID=function(){"use strict";return"1949917431755318"};c.getQueryID=function(){"use strict";return"1189939277823864"};function c(){"use strict";a.apply(this,arguments)}return c}()}),null);
__d("FBStoriesDeleteMutationWebGraphQLMutation",["WebGraphQLMutationBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports=function(){__p&&__p();var a;a=babelHelpers.inherits(c,b("WebGraphQLMutationBase"));a&&a.prototype;c.__getDocID=function(){"use strict";return"1340045906066120"};c.getQueryID=function(){"use strict";return"967072946766012"};function c(){"use strict";a.apply(this,arguments)}return c}()}),null);
__d("FBStoriesMuteMutationWebGraphQLMutation",["WebGraphQLMutationBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports=function(){__p&&__p();var a;a=babelHelpers.inherits(c,b("WebGraphQLMutationBase"));a&&a.prototype;c.__getDocID=function(){"use strict";return"1524574307634402"};c.getQueryID=function(){"use strict";return"1944151819168048"};function c(){"use strict";a.apply(this,arguments)}return c}()}),null);
__d("FBStoriesMutedBucketOwnersQueryWebGraphQLQuery",["WebGraphQLQueryBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports=function(){__p&&__p();var a;a=babelHelpers.inherits(c,b("WebGraphQLQueryBase"));a&&a.prototype;c.__getDocID=function(){"use strict";return"1891920954170361"};c.getQueryID=function(){"use strict";return"294951511028390"};function c(){"use strict";a.apply(this,arguments)}return c}()}),null);
__d("FBStoriesPageBucketQueryWebGraphQLQuery",["WebGraphQLQueryBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports=function(){__p&&__p();var a;a=babelHelpers.inherits(c,b("WebGraphQLQueryBase"));a&&a.prototype;c.__getDocID=function(){"use strict";return"1699359636835414"};c.getQueryID=function(){"use strict";return"1127860764039670"};function c(){"use strict";a.apply(this,arguments)}return c}()}),null);
__d("FBStoriesPrivacyChangeSubscriptionWebGraphQLSubscription",["WebGraphQLSubscriptionHelper"],(function(a,b,c,d,e,f){"use strict";e.exports=b("WebGraphQLSubscriptionHelper").getExports({docID:"1698650280180657",queryID:"358127274690781"})}),null);
__d("FBStoriesPrivacyChangeSubscription",["BaseGraphQLSubscription","FBStoriesPrivacyChangeSubscriptionWebGraphQLSubscription","uuid"],(function(a,b,c,d,e,f){__p&&__p();var g;g=babelHelpers.inherits(a,b("BaseGraphQLSubscription"));g&&g.prototype;a.prototype.getTopic=function(a){"use strict";return"gqls/"+this.getSubscriptionCallName()+"/owner_id_"+a};a.prototype.getQueryID=function(){"use strict";return b("FBStoriesPrivacyChangeSubscriptionWebGraphQLSubscription").getDocID()};a.prototype.getQueryParameters=function(a){"use strict";return{input:JSON.stringify({client_subscription_id:b("uuid")(),owner_id:a})}};a.prototype.getSubscriptionCallName=function(){"use strict";return"unified_stories_privacy_change_subscribe"};function a(){"use strict";g.apply(this,arguments)}e.exports=a}),null);
__d("FBStoriesPrivacySettingsQueryWebGraphQLQuery",["WebGraphQLQueryBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports=function(){__p&&__p();var a;a=babelHelpers.inherits(c,b("WebGraphQLQueryBase"));a&&a.prototype;c.__getDocID=function(){"use strict";return"1636640369763506"};c.getQueryID=function(){"use strict";return"153291488685319"};function c(){"use strict";a.apply(this,arguments)}return c}()}),null);
__d("FBStoriesSeenRecieptsLastSeenTimeUpdateMutationWebGraphQLMutation",["WebGraphQLMutationBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports=function(){__p&&__p();var a;a=babelHelpers.inherits(c,b("WebGraphQLMutationBase"));a&&a.prototype;c.__getDocID=function(){"use strict";return"1386522808128715"};c.getQueryID=function(){"use strict";return"1384057201673076"};function c(){"use strict";a.apply(this,arguments)}return c}()}),null);
__d("FBStoriesTakeNegativeFeedbackActionMutationWebGraphQLMutation",["WebGraphQLMutationBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports=function(){__p&&__p();var a;a=babelHelpers.inherits(c,b("WebGraphQLMutationBase"));a&&a.prototype;c.__getDocID=function(){"use strict";return"1997102860360908"};c.getQueryID=function(){"use strict";return"345862519273111"};function c(){"use strict";a.apply(this,arguments)}return c}()}),null);
__d("FBStoriesTraySubscriptionWebGraphQLSubscription",["WebGraphQLSubscriptionHelper"],(function(a,b,c,d,e,f){"use strict";e.exports=b("WebGraphQLSubscriptionHelper").getExports({docID:"1912975208750470",queryID:"569163650163649"})}),null);
__d("FBStoriesTraySubscription",["BaseGraphQLSubscription","FBStoriesTraySubscriptionWebGraphQLSubscription","uuid"],(function(a,b,c,d,e,f){__p&&__p();var g;g=babelHelpers.inherits(a,b("BaseGraphQLSubscription"));g&&g.prototype;a.prototype.getTopic=function(a){"use strict";return"gqls/"+this.getSubscriptionCallName()+"/user_id_"+a};a.prototype.getQueryID=function(){"use strict";return b("FBStoriesTraySubscriptionWebGraphQLSubscription").getDocID()};a.prototype.getQueryParameters=function(a){"use strict";return{input:JSON.stringify({client_subscription_id:b("uuid")(),user_id:a})}};a.prototype.getSubscriptionCallName=function(){"use strict";return"stories_tray_subscribe"};function a(){"use strict";g.apply(this,arguments)}e.exports=a}),null);
__d("FBStoriesUnifiedSeenReceiptLastSeenTimeMutationWebGraphQLMutation",["WebGraphQLMutationBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports=function(){__p&&__p();var a;a=babelHelpers.inherits(c,b("WebGraphQLMutationBase"));a&&a.prototype;c.__getDocID=function(){"use strict";return"1530421027083413"};c.getQueryID=function(){"use strict";return"213614895981437"};function c(){"use strict";a.apply(this,arguments)}return c}()}),null);
__d("FBStoriesViewerBucketQueryWebGraphQLQuery",["WebGraphQLQueryBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports=function(){__p&&__p();var a;a=babelHelpers.inherits(c,b("WebGraphQLQueryBase"));a&&a.prototype;c.__getDocID=function(){"use strict";return"2370239469716253"};c.getQueryID=function(){"use strict";return"194873828062038"};function c(){"use strict";a.apply(this,arguments)}return c}()}),null);
__d("FBStoriesViewerBucketViewersQueryWebGraphQLQuery",["WebGraphQLQueryBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports=function(){__p&&__p();var a;a=babelHelpers.inherits(c,b("WebGraphQLQueryBase"));a&&a.prototype;c.__getDocID=function(){"use strict";return"2224434790905865"};c.getQueryID=function(){"use strict";return"2219192941644387"};function c(){"use strict";a.apply(this,arguments)}return c}()}),null);
__d("FBStoriesVotePollMutationWebGraphQLMutation",["WebGraphQLMutationBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports=function(){__p&&__p();var a;a=babelHelpers.inherits(c,b("WebGraphQLMutationBase"));a&&a.prototype;c.__getDocID=function(){"use strict";return"1942364135805651"};c.getQueryID=function(){"use strict";return"1772533953042568"};function c(){"use strict";a.apply(this,arguments)}return c}()}),null);
__d("GroupUnmuteMemberMutationWebGraphQLMutation",["WebGraphQLMutationBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports=function(){__p&&__p();var a;a=babelHelpers.inherits(c,b("WebGraphQLMutationBase"));a&&a.prototype;c.__getDocID=function(){"use strict";return"1224583300980768"};c.getQueryID=function(){"use strict";return"454589191691586"};function c(){"use strict";a.apply(this,arguments)}return c}()}),null);
__d("ReactionStickerStoryCardReactMutationWebGraphQLMutation",["WebGraphQLMutationBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports=function(){__p&&__p();var a;a=babelHelpers.inherits(c,b("WebGraphQLMutationBase"));a&&a.prototype;c.__getDocID=function(){"use strict";return"1651380361616532"};c.getQueryID=function(){"use strict";return"603085890111081"};function c(){"use strict";a.apply(this,arguments)}return c}()}),null);
__d("ReportStoryCardToAdminWebGraphQLMutation",["WebGraphQLMutationBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports=function(){__p&&__p();var a;a=babelHelpers.inherits(c,b("WebGraphQLMutationBase"));a&&a.prototype;c.__getDocID=function(){"use strict";return"1435403036581993"};c.getQueryID=function(){"use strict";return"909342722558820"};function c(){"use strict";a.apply(this,arguments)}return c}()}),null);
__d("StoriesArchiveCardViewerQueryWebGraphQLQuery",["WebGraphQLQueryBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports=function(){__p&&__p();var a;a=babelHelpers.inherits(c,b("WebGraphQLQueryBase"));a&&a.prototype;c.__getDocID=function(){"use strict";return"2182334565141887"};c.getQueryID=function(){"use strict";return"262291777646571"};function c(){"use strict";a.apply(this,arguments)}return c}()}),null);
__d("StoriesArchiveDeletionMutationWebGraphQLMutation",["WebGraphQLMutationBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports=function(){__p&&__p();var a;a=babelHelpers.inherits(c,b("WebGraphQLMutationBase"));a&&a.prototype;c.__getDocID=function(){"use strict";return"997271687064551"};c.getQueryID=function(){"use strict";return"2146552195626815"};function c(){"use strict";a.apply(this,arguments)}return c}()}),null);
__d("UnifiedStoriesArchiveSavingModeMutationWebGraphQLMutation",["WebGraphQLMutationBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports=function(){__p&&__p();var a;a=babelHelpers.inherits(c,b("WebGraphQLMutationBase"));a&&a.prototype;c.__getDocID=function(){"use strict";return"2879905198698528"};c.getQueryID=function(){"use strict";return"240974536483368"};function c(){"use strict";a.apply(this,arguments)}return c}()}),null);
__d("UnifiedStoriesSettingGraphQLWebGraphQLQuery",["WebGraphQLQueryBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports=function(){__p&&__p();var a;a=babelHelpers.inherits(c,b("WebGraphQLQueryBase"));a&&a.prototype;c.__getDocID=function(){"use strict";return"1619282521526216"};c.getQueryID=function(){"use strict";return"2045499392436729"};function c(){"use strict";a.apply(this,arguments)}return c}()}),null);
__d("XGraphQLBatchAPIController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/api/graphqlbatch/",{queries:{type:"String"},batch_name:{type:"String"},scheduler:{type:"Enum",enumType:1},shared_params:{type:"String"},fb_api_req_friendly_name:{type:"String"},uft_request_id:{type:"String"}})}),null);
__d("WebGraphQL",["ActorURI","AsyncRequest","Deferred","FBLogger","WebGraphQLConfig","XGraphQLBatchAPIController","getAsyncParams"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a){__p&&__p();var c=a.getURIBuilder().getURI(),d={exec:function(a,b){return d.execAll([a],b)[0]},execAll:function(a,d){__p&&__p();var e={},f={};a=a.map(function(a,c){c="o"+c;e[c]={doc_id:a.__getDocID(),query_params:a.__getVariables()};a=new(b("Deferred"))();f[c]=a;return a.getPromise()});var g=babelHelpers["extends"]({},b("getAsyncParams")("POST"));d&&d.actorID!=null&&(g[b("ActorURI").PARAMETER_ACTOR]=d.actorID);var h=d&&d.batchName?{batch_name:d.batchName}:{};h=new(b("AsyncRequest"))().setURI(c).setOption("suppressEvaluation",!0).setMethod("POST").setRequestHeader("Content-Type","application/x-www-form-urlencoded").setData(babelHelpers["extends"]({},h,g,{queries:JSON.stringify(e)})).setHandler(function(a){__p&&__p();a=a.getPayload();try{var c=a.response.split("\r\n");c.pop();c=c.map(function(a){return JSON.parse(a)});c.forEach(function(a){return Object.keys(a).forEach(function(b){var c=f[b];if(c){b=a[b];b.errors?c.reject(b):b.data?c.resolve(b.data):c.reject({data:{},errors:[{message:"Unexpected response received from server.",severity:"CRITICAL",response:b}]})}})})}catch(d){c=a.response;b("FBLogger")("webgraphql").catching(d).mustfix("Bad response: ","%s%s",c.substr(0,250),c.length>250?"[truncated]":"")}Object.keys(f).forEach(function(a){f[a].isSettled()||f[a].reject({data:{},errors:[{message:"No response received from server.",severity:"CRITICAL"}]})})}).setTimeoutHandler(b("WebGraphQLConfig").timeout,function(){Object.keys(f).forEach(function(a){f[a].isSettled()||f[a].reject({data:{},errors:[{message:"Request timed out.",severity:"CRITICAL"}]})})}).setErrorHandler(function(a){var b=a.getErrorDescription();Object.keys(f).forEach(function(c){f[c].isSettled()||f[c].reject({data:{},errors:[{message:b,severity:"CRITICAL",error:a.getError()}]})})});d&&d.msgrRegion&&h.setRequestHeader("X-MSGR-Region",d.msgrRegion);h.send();return a},__forController:g};return d}e.exports=g(b("XGraphQLBatchAPIController"))}),null);
__d("FBStoriesGraphQLAPI",["CurrentUser","FBStoriesArchivedCardQueryWebGraphQLQuery","FBStoriesAudienceModeMutationCallMutationWebGraphQLMutation","FBStoriesBucketsQueryWebGraphQLQuery","FBStoriesDeleteMutationWebGraphQLMutation","FBStoriesMutedBucketOwnersQueryWebGraphQLQuery","FBStoriesMuteMutationWebGraphQLMutation","FBStoriesPageBucketQueryWebGraphQLQuery","FBStoriesPrivacyChangeSubscription","FBStoriesPrivacySettingsQueryWebGraphQLQuery","FBStoriesSeenRecieptsLastSeenTimeUpdateMutationWebGraphQLMutation","FBStoriesTakeNegativeFeedbackActionMutationWebGraphQLMutation","FBStoriesTraySubscription","FBStoriesUnifiedSeenReceiptLastSeenTimeMutationWebGraphQLMutation","FBStoriesViewerBucketQueryWebGraphQLQuery","FBStoriesViewerBucketViewersQueryWebGraphQLQuery","FBStoriesVotePollMutationWebGraphQLMutation","GroupUnmuteMemberMutationWebGraphQLMutation","ReactionStickerStoryCardReactMutationWebGraphQLMutation","ReportStoryCardToAdminWebGraphQLMutation","StoriesArchiveCardViewerQueryWebGraphQLQuery","StoriesArchiveDeletionMutationWebGraphQLMutation","UnifiedStoriesArchiveSavingModeMutationWebGraphQLMutation","UnifiedStoriesSettingGraphQLWebGraphQLQuery","WebGraphQL","uniqueID"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports={load:function(){return b("WebGraphQL").exec(new(b("FBStoriesBucketsQueryWebGraphQLQuery"))())},loadSingleBucketStoryData:function(a){return b("WebGraphQL").exec(new(b("FBStoriesViewerBucketQueryWebGraphQLQuery"))({bucketID:a,threadCount:100}))},loadPageBucketStoryData:function(a){return b("WebGraphQL").exec(new(b("FBStoriesPageBucketQueryWebGraphQLQuery"))({pageID:a}))},loadSingleArchivedCardData:function(a){return b("WebGraphQL").exec(new(b("FBStoriesArchivedCardQueryWebGraphQLQuery"))({storyID:a}))},loadPrivacySettings:function(){return b("WebGraphQL").exec(new(b("FBStoriesPrivacySettingsQueryWebGraphQLQuery"))({}))},loadViewerListForThread:function(a){return b("WebGraphQL").exec(new(b("FBStoriesViewerBucketViewersQueryWebGraphQLQuery"))({threadId:a}))},loadStoriesArchiveSavingMode:function(){return b("WebGraphQL").exec(new(b("UnifiedStoriesSettingGraphQLWebGraphQLQuery"))({}))},loadArchivedCardsData:function(a,c,d,e){return b("WebGraphQL").exec(new(b("StoriesArchiveCardViewerQueryWebGraphQLQuery"))({current_id:a,current_time:c,lower_bound_time:d,upper_bound_time:e}))},subscribeToPrivacyChanges:function(a){return b("FBStoriesPrivacyChangeSubscription").subscribe(b("CurrentUser").getID(),a)},subscribeToTrayChanges:function(a){return b("FBStoriesTraySubscription").subscribe(b("CurrentUser").getID(),a)},unsubscribeFromTrayChanges:function(a){a.unsubscribe()},updateThreadSeenReciept:function(a){a={client_mutation_id:b("uniqueID")(),actor_id:b("CurrentUser").getID(),thread_id:a};return b("WebGraphQL").exec(new(b("FBStoriesSeenRecieptsLastSeenTimeUpdateMutationWebGraphQLMutation"))({input:a}))},updateStorySeenReciept:function(a){a={client_mutation_id:b("uniqueID")(),actor_id:b("CurrentUser").getID(),story_id:a};return b("WebGraphQL").exec(new(b("FBStoriesUnifiedSeenReceiptLastSeenTimeMutationWebGraphQLMutation"))({input:a}))},deleteStory:function(a,c){return b("WebGraphQL").exec(new(b("FBStoriesDeleteMutationWebGraphQLMutation"))({input:{client_mutation_id:b("uniqueID")(),actor_id:a,story_thread_ids:[c]}}))},muteBucketOwner:function(a,c,d){return b("WebGraphQL").exec(new(b("FBStoriesMuteMutationWebGraphQLMutation"))({input:{client_mutation_id:b("uniqueID")(),actor_id:a,user_id:c,should_unfollow_user_story:d}}))},loadMutedBucketOwnersList:function(){return b("WebGraphQL").exec(new(b("FBStoriesMutedBucketOwnersQueryWebGraphQLQuery"))({}))},pollVote:function(a,c){return b("WebGraphQL").exec(new(b("FBStoriesVotePollMutationWebGraphQLMutation"))({input:{client_mutation_id:b("uniqueID")(),story_card_poll_id:a,option:c,actor_id:b("CurrentUser").getID()}}))},reactToSticker:function(a,c){return b("WebGraphQL").exec(new(b("ReactionStickerStoryCardReactMutationWebGraphQLMutation"))({input:{client_mutation_id:b("uniqueID")(),actor_id:b("CurrentUser").getID(),story_card_reaction_sticker_id:a,count:c}}))},reportThreadToAdmin:function(a,c){return b("WebGraphQL").exec(new(b("ReportStoryCardToAdminWebGraphQLMutation"))({input:{client_mutation_id:b("uniqueID")(),actor_id:a,report_to_admin_action:"REPORT",story_card_id:c}}))},takeNegativeFeedbackAction:function(a,c,d){return b("WebGraphQL").exec(new(b("FBStoriesTakeNegativeFeedbackActionMutationWebGraphQLMutation"))({input:{client_mutation_id:b("uniqueID")(),actor_id:a,negative_feedback_action_id:d}}))},changeAudienceMode:function(a,c){return b("WebGraphQL").exec(new(b("FBStoriesAudienceModeMutationCallMutationWebGraphQLMutation"))({input:{client_mutation_id:b("uniqueID")(),actor_id:a,audience_mode:c}}))},updateArchiveSavingMode:function(a,c){return b("WebGraphQL").exec(new(b("UnifiedStoriesArchiveSavingModeMutationWebGraphQLMutation"))({saving_mode:{client_mutation_id:b("uniqueID")(),actor_id:a,saving_mode:c}}))},deleteArchivedStoryCard:function(a,c){return b("WebGraphQL").exec(new(b("StoriesArchiveDeletionMutationWebGraphQLMutation"))({input:{client_mutation_id:b("uniqueID")(),actor_id:a,archived_story_card_id:c}}))},unmuteFromGroup:function(a,c,d){return b("WebGraphQL").exec(new(b("GroupUnmuteMemberMutationWebGraphQLMutation"))({input:{client_mutation_id:b("uniqueID")(),actor_id:a,group_id:c,user_id:d}}))}}}),null);
__d("LayerFadeOnHide",["invariant","CSSFade","Layer","SubscriptionsHandler","UserAgent_DEPRECATED","clearTimeout","emptyFunction","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g){__p&&__p();function h(a){"use strict";this._layer=a,this._subscriptionsHandler=new(b("SubscriptionsHandler"))()}h.prototype.enable=function(){"use strict";if(b("UserAgent_DEPRECATED").ie()<9)return;this._subscription=this._layer.subscribe("starthide",this._handleStartHide.bind(this))};h.prototype.disable=function(){"use strict";this._subscription&&(this._subscription.unsubscribe(),this._subscription=null),this._subscriptionsHandler.release()};h.prototype._getDuration=function(){"use strict";return 150};h.prototype._handleStartHide=function(){"use strict";__p&&__p();var a=!0,c=b("Layer").subscribe("show",function(){c.unsubscribe(),a=!1}),d=b("setTimeoutAcrossTransitions")(function(){c.unsubscribe();c=null;var b=function(){this._layer.finishHide()}.bind(this);a?this._animate(b):b()}.bind(this),0);this._subscriptionsHandler.addSubscriptions({remove:function(){b("clearTimeout")(d)}});return!1};h.prototype._animate=function(a){"use strict";var c=this._layer.getRoot();c!=null||g(0,70);b("CSSFade").hide(c,{callback:function(){a()},duration:this._getDuration()})};h.forDuration=function(a){var c;c=babelHelpers.inherits(d,h);c&&c.prototype;function d(){c.apply(this,arguments)}d.prototype._getDuration=b("emptyFunction").thatReturns(a);return d};Object.assign(h.prototype,{_subscription:null});e.exports=h}),null);
__d("StoryArchiveAutoSavingMode",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ENABLED:"ENABLED",DISABLED:"DISABLED"})}),null);
__d("FBStoriesArchiveIntroductionDialog.react",["fbt","BasicFBNux","CurrentUser","FBStoriesGraphQLAPI","LayerFadeOnHide","ProfileTabConst","React","StoryArchiveAutoSavingMode","URI","XUIButton.react","XUIDialog.react","XUIDialogBody.react","XUIDialogFooter.react","XUIDialogOkayButton.react","XUIDialogTitle.react","promiseDone"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=500,j=5856;c=babelHelpers.inherits(a,b("React").Component);h=c&&c.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=h.constructor).call.apply(a,[this].concat(e)),this.state={isShown:!0},this.$1=function(){this.setState({isShown:!1}),b("BasicFBNux").onDismiss(j)}.bind(this),this.$2=function(){this.$1()}.bind(this),c}a.prototype.componentDidMount=function(){b("BasicFBNux").onView(j),b("promiseDone")(b("FBStoriesGraphQLAPI").updateArchiveSavingMode(b("CurrentUser").getID(),b("StoryArchiveAutoSavingMode").ENABLED),null,null)};a.prototype.render=function(){var a=new(b("URI"))("/"+b("CurrentUser").getID()).setQueryData({sk:b("ProfileTabConst").STORIES_ARCHIVE});return b("React").createElement(b("XUIDialog.react"),{behaviors:{LayerFadeOnHide:b("LayerFadeOnHide")},layerHideOnBlur:!1,shown:this.state.isShown,width:i,onToggle:this.$1},b("React").createElement(b("XUIDialogTitle.react"),{showCloseButton:!0},g._("Introducing Stories Archive")),b("React").createElement(b("XUIDialogBody.react"),null,g._("Now photos and videos from your story will be kept in your archive so you don't have to save them to your phone. Only you can see your archive.")),b("React").createElement(b("XUIDialogFooter.react"),null,b("React").createElement(b("XUIButton.react"),{href:a,label:g._("View Settings")}),b("React").createElement(b("XUIDialogOkayButton.react"),{use:"confirm",action:"confirm",onClick:this.$2})))};e.exports=a}),null);
__d("BlueBarFixedBehaviorController",["Arbiter","Bootloader"],(function(a,b,c,d,e,f){__p&&__p();e.exports={init:function(a){__p&&__p();if(!("getBoundingClientRect"in a))return;var c,d=document.documentElement;function e(a){c!==a&&(c=a,b("Arbiter").inform("bluebarFixedBehaviorController/isfixed",c,"state"))}function f(){var b=a.getBoundingClientRect();b=b.top;var c=d?d.clientTop:0;b=Math.round(b)-c<=0;e(b)}function g(){e(!1)}f();b("Bootloader").loadModules(["Event"],function(a){a.listen(window,"scroll",f)},"BlueBarFixedBehaviorController");b("Arbiter").subscribe("quickling/response",f);b("Arbiter").subscribe("banner/shown",g)}}}),null);
__d("cancelAnimationFramePolyfill",[],(function(a,b,c,d,e,f){b=a.__fbNativeCancelAnimationFrame||a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.mozCancelAnimationFrame||a.oCancelAnimationFrame||a.msCancelAnimationFrame||a.clearTimeout;e.exports=b}),null);
__d("cancelAnimationFrame",["Env","TimerStorage","TimeSlice","cancelAnimationFramePolyfill","requestAnimationFrameAcrossTransitions"],(function(a,b,c,d,e,f){__p&&__p();var g=b("TimerStorage").ANIMATION_FRAME;function a(a){if(a!=null)if(b("Env").gk_raf_flush)b("requestAnimationFrameAcrossTransitions").cancelVirtualRAF(a);else{b("TimerStorage").unset(g,a);var c=g+String(a);b("TimeSlice").cancelWithToken(c)}b("cancelAnimationFramePolyfill")(a)}e.exports=a}),null);
__d("replaceNativeTimer",["scheduler","cancelAnimationFrame","clearInterval","clearTimeout","requestAnimationFrame","setInterval","setTimeout"],(function(a,b,c,d,e,f){!b("scheduler"),a.__fbNativeSetTimeout=a.setTimeout,a.__fbNativeClearTimeout=a.clearTimeout,a.__fbNativeSetInterval=a.setInterval,a.__fbNativeClearInterval=a.clearInterval,a.__fbNativeRequestAnimationFrame=a.requestAnimationFrame,a.__fbNativeCancelAnimationFrame=a.cancelAnimationFrame,b("setTimeout").nativeBackup=a.setTimeout,b("clearTimeout").nativeBackup=a.clearTimeout,b("setInterval").nativeBackup=a.setInterval,b("clearInterval").nativeBackup=a.clearInterval,b("requestAnimationFrame").nativeBackup=a.requestAnimationFrame,b("cancelAnimationFrame").nativeBackup=a.cancelAnimationFrame,a.setTimeout=b("setTimeout"),a.clearTimeout=b("clearTimeout"),a.setInterval=b("setInterval"),a.clearInterval=b("clearInterval"),a.requestAnimationFrame=b("requestAnimationFrame"),a.cancelAnimationFrame=b("cancelAnimationFrame")}),null);