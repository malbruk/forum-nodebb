
(function (factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  }
})(function () {
  function compiled(helpers, context, guard, iter, helper) {
    var __escape = helpers.__escape;
    var value = context;
    return "\t\t\t\t\t<label>[[admin/manage/privileges:group-privileges]]</label>\r\n\t\t\t\t\t<table class=\"table table-striped privilege-table\">\r\n\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t<tr class=\"privilege-table-header\">\r\n\t\t\t\t\t\t\t\t<th colspan=\"3\"></th>\r\n\t\t\t\t\t\t\t\t<th class=\"arrowed\" colspan=\"3\">\r\n\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.section-viewing]]\r\n\t\t\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t\t\t<th class=\"arrowed\" colspan=\"10\">\r\n\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.section-posting]]\r\n\t\t\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t\t\t<th class=\"arrowed\" colspan=\"3\">\r\n\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.section-moderation]]\r\n\t\t\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t\t\t" + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['columnCountGroupOther'] : null) ?
        "\r\n\t\t\t\t\t\t\t\t<th class=\"arrowed\" colspan=\"" + 
          __escape(guard((context != null && context['privileges'] != null) ? context['privileges']['columnCountGroupOther'] : null)) + 
          "\">\r\n\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.section-other]]\r\n\t\t\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t\t\t" :
        "") + 
      "\r\n\t\t\t\t\t\t\t</tr><tr><!-- zebrastripe reset --></tr>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<th colspan=\"2\">[[admin/manage/categories:privileges.section-group]]</th>\r\n\t\t\t\t\t\t\t\t<th class=\"text-center\">[[admin/manage/privileges:select-clear-all]]</th>\r\n\t\t\t\t\t\t\t\t" + 
      compiled.blocks['privileges.labels.groups'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t" + 
      compiled.blocks['privileges.groups'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t<tfoot>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td colspan=\"3\"></td>\r\n\t\t\t\t\t\t\t\t<td colspan=\"" + 
      __escape(guard((context != null && context['privileges'] != null && context['privileges']['keys'] != null && context['privileges']['keys']['groups'] != null) ? context['privileges']['keys']['groups']['length'] : null)) + 
      "\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"btn-toolbar\">\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default pull-right\" data-ajaxify=\"false\" data-action=\"search.group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-users\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.search-group]]\r\n\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default pull-right\" data-ajaxify=\"false\" data-action=\"copyPrivilegesFrom\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-copy\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.copy-from-category]]\r\n\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default pull-right\" data-ajaxify=\"false\" data-action=\"copyToChildren\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-copy\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.copy-to-children]]\r\n\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default pull-right\" data-ajaxify=\"false\" data-action=\"copyToAll\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-copy\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.copy-privileges-to-all-categories]]\r\n\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</tfoot>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t\t<div class=\"help-block\">\r\n\t\t\t\t\t\t[[admin/manage/categories:privileges.inherit]]\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<hr/>\r\n\t\t\t\t\t<label>[[admin/manage/privileges:user-privileges]]</label>\r\n\t\t\t\t\t<table class=\"table table-striped privilege-table\">\r\n\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t<tr class=\"privilege-table-header\">\r\n\t\t\t\t\t\t\t\t<th colspan=\"3\"></th>\r\n\t\t\t\t\t\t\t\t<th class=\"arrowed\" colspan=\"3\">\r\n\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.section-viewing]]\r\n\t\t\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t\t\t<th class=\"arrowed\" colspan=\"10\">\r\n\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.section-posting]]\r\n\t\t\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t\t\t<th class=\"arrowed\" colspan=\"3\">\r\n\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.section-moderation]]\r\n\t\t\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t\t\t" + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['columnCountUserOther'] : null) ?
        "\r\n\t\t\t\t\t\t\t\t<th class=\"arrowed\" colspan=\"" + 
          __escape(guard((context != null && context['privileges'] != null) ? context['privileges']['columnCountUserOther'] : null)) + 
          "\">\r\n\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.section-other]]\r\n\t\t\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t\t\t" :
        "") + 
      "\r\n\t\t\t\t\t\t\t</tr><tr><!-- zebrastripe reset --></tr>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<th colspan=\"2\">[[admin/manage/categories:privileges.section-user]]</th>\r\n\t\t\t\t\t\t\t\t<th class=\"text-center\">[[admin/manage/privileges:select-clear-all]]</th>\r\n\t\t\t\t\t\t\t\t" + 
      compiled.blocks['privileges.labels.users'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t" + 
      compiled.blocks['privileges.users'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t<tfoot>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td colspan=\"3\"></td>\r\n\t\t\t\t\t\t\t\t<td colspan=\"" + 
      __escape(guard((context != null && context['privileges'] != null && context['privileges']['keys'] != null && context['privileges']['keys']['users'] != null) ? context['privileges']['keys']['users']['length'] : null)) + 
      "\">\r\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default pull-right\" data-ajaxify=\"false\" data-action=\"search.user\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-user\"></i>\r\n\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.search-user]]\r\n\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</tfoot>\r\n\t\t\t\t\t</table>\r\n";
  }

  compiled.blocks = {
    'privileges.labels.groups': function privilegeslabelsgroups(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['privileges'] != null && context['privileges']['labels'] != null) ? context['privileges']['labels']['groups'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t\t\t<th class=\"text-center\">" + 
          __escape(guard((context != null && context['privileges'] != null && context['privileges']['labels'] != null && context['privileges']['labels']['groups'] != null && context['privileges']['labels']['groups'][key0] != null) ? context['privileges']['labels']['groups'][key0]['name'] : null)) + 
          "</th>\r\n\t\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'privileges.groups': function privilegesgroups(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['privileges'] != null) ? context['privileges']['groups'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t\t<tr data-group-name=\"" + 
          __escape(guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['nameEscaped'] : null)) + 
          "\" data-private=\"" + 
          (guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['isPrivate'] : null) ?
            "1" :
            "0") + 
          "\">\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t" + 
          (guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['isPrivate'] : null) ?
            "\r\n\t\t\t\t\t\t\t\t\t\t" + 
              ((guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['name'] : null) == "banned-users") ?
                "\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-exclamation-triangle text-muted\" title=\"[[admin/manage/categories:privileges.inheritance-exception]]\"></i>\r\n\t\t\t\t\t\t\t\t\t\t" :
                "\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-lock text-muted\" title=\"[[admin/manage/categories:privileges.group-private]]\"></i>\r\n\t\t\t\t\t\t\t\t\t\t") + 
              "\r\n\t\t\t\t\t\t\t\t\t" :
            "\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-none\"></i>\r\n\t\t\t\t\t\t\t\t\t") + 
          "\r\n\t\t\t\t\t\t\t\t\t" + 
          __escape(guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['name'] : null)) + 
          "\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t<div class=\"dropdown\">\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-default btn-sm dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-copy\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\r\n\t\t\t\t\t\t\t\t\t\t\t<li data-action=\"copyToAllGroup\"><a href=\"#\">[[admin/manage/categories:privileges.copy-group-privileges-to-all-categories]]</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li data-action=\"copyToChildrenGroup\"><a href=\"#\">[[admin/manage/categories:privileges.copy-group-privileges-to-children]]</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li data-action=\"copyPrivilegesFromGroup\"><a href=\"#\">[[admin/manage/categories:privileges.copy-group-privileges-from]]</a></li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><input autocomplete=\"off\" type=\"checkbox\" class=\"checkbox-helper\"></td>\r\n\t\t\t\t\t\t\t\t" + 
          __escape(helper(context, helpers, 'spawnPrivilegeStates', [guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['name'] : null), guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['privileges'] : null)])) + 
          "\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'privileges.labels.users': function privilegeslabelsusers(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['privileges'] != null && context['privileges']['labels'] != null) ? context['privileges']['labels']['users'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t\t\t<th class=\"text-center\">" + 
          __escape(guard((context != null && context['privileges'] != null && context['privileges']['labels'] != null && context['privileges']['labels']['users'] != null && context['privileges']['labels']['users'][key0] != null) ? context['privileges']['labels']['users'][key0]['name'] : null)) + 
          "</th>\r\n\t\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'privileges.users': function privilegesusers(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['privileges'] != null) ? context['privileges']['users'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t\t<tr data-uid=\"" + 
          __escape(guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['uid'] : null)) + 
          "\"" + 
          (guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['banned'] : null) ?
            " data-banned" :
            "") + 
          ">\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t" + 
          (guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['picture'] : null) ?
            "\r\n\t\t\t\t\t\t\t\t\t<img class=\"avatar avatar-sm\" src=\"" + 
              __escape(guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['picture'] : null)) + 
              "\" title=\"" + 
              __escape(guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['username'] : null)) + 
              "\" />\r\n\t\t\t\t\t\t\t\t\t" :
            "\r\n\t\t\t\t\t\t\t\t\t<div class=\"avatar avatar-sm\" style=\"background-color: " + 
              __escape(guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['icon:bgColor'] : null)) + 
              ";\">" + 
              __escape(guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['icon:text'] : null)) + 
              "</div>\r\n\t\t\t\t\t\t\t\t\t") + 
          "\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t" + 
          (guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['banned'] : null) ?
            "\r\n\t\t\t\t\t\t\t\t\t<i class=\"ban fa fa-gavel text-danger\" title=\"[[admin/manage/categories:privileges.banned-user-inheritance]]\"></i>\r\n\t\t\t\t\t\t\t\t\t" :
            "") + 
          "\r\n\t\t\t\t\t\t\t\t\t" + 
          __escape(guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['username'] : null)) + 
          "\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><input autocomplete=\"off\" type=\"checkbox\" class=\"checkbox-helper\"></td>\r\n\t\t\t\t\t\t\t\t" + 
          __escape(helper(context, helpers, 'spawnPrivilegeStates', [guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['username'] : null), guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['privileges'] : null)])) + 
          "\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
