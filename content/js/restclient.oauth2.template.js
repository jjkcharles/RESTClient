/* ***** BEGIN LICENSE BLOCK *****
Copyright (c) 2007-2012, Chao ZHOU (chao@zhou.fr). All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.
    * Neither the name of the author nor the names of its contributors may
      be used to endorse or promote products derived from this software
      without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED
TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 * ***** END LICENSE BLOCK ***** */

"use strict";
restclient.oauth2 = restclient.oauth2 || {};
restclient.oauth2.templates = {
  "Google": {
    "authorization_endpoint": "https://accounts.google.com/o/oauth2/auth",
    "redirection_endpoint": "http://www.google.com/robots.txt",
    "token_endpoint": "https://accounts.google.com/o/oauth2/token",
    "token_method": "POST",
    "response_type": "code"
  },
  "Github": {
    "authorization_endpoint": "https://github.com/login/oauth/authorize",
    "redirection_endpoint": "https://github.com/robots.txt",
    "token_endpoint": "https://github.com/login/oauth/access_token",
    "token_method": "POST",
    "response_type": "code"
  },
  "Facebook": {
    "authorization_endpoint": "https://www.facebook.com/dialog/oauth",
    "redirection_endpoint": "http://www.facebook.com/robots.txt",
    "token_endpoint": "https://graph.facebook.com/oauth/access_token",
    "token_method": "GET",
    "response_type": "code"
  },
  getTemplate: function(name) {
    if (typeof restclient.oauth2.templates[name] === 'object')
      return restclient.oauth2.templates[name];
    else
      return false;
  }
}