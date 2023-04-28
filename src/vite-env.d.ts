/// <reference types="vite/client" />

// avatar_url:"https://avatars.githubusercontent.com/u/19692?v=4"
// bio:null
// blog:"https://dev.bleacherreport.com/"
// company:null
// created_at:"2008-08-06T00:03:29Z"
// email:"eng@bleacherreport.com"
// events_url:"https://api.github.com/users/br/events{/privacy}"
// followers_url:"https://api.github.com/users/br/followers"
// followers:16
// following_url:"https://api.github.com/users/br/following{/other_user}"
// following:0
// gists_url:"https://api.github.com/users/br/gists{/gist_id}"
// gravatar_id:""
// hireable:null
// html_url:"https://github.com/br"
// id:19692
// location:"San Francisco, CA"
// login:"br"
// name:"Bleacher Report"
// new entry:
// node_id:"MDEyOk9yZ2FuaXphdGlvbjE5Njky"
// organizations_url:"https://api.github.com/users/br/orgs"
// public_gists:2
// public_repos:84
// received_events_url:"https://api.github.com/users/br/received_events"
// repos_url:"https://api.github.com/users/br/repos"
// site_admin:false
// starred_url:"https://api.github.com/users/br/starred{/owner}{/repo}"
// subscriptions_url:"https://api.github.com/users/br/subscriptions"
// twitter_username:null
// type:"Organization"
// updated_at:"2023-02-28T17:03:54Z"
// url:"https://api.github.com/users/br"

interface User {
  avatar_url: string;
  bio: string;
  blog: string;
  followers: number;
  following: number;
  hireable: boolean;
  html_url: string;
  id: number;
  location: string;
  login: string;
  name: string;
  public_gists: number;
  public_repos: number;
  twitter_username: string;
  type: string;
}

interface Repo {
  name: string;
}
