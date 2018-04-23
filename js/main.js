	function handleLike(element)
	{
		console.log('Like Clicked');
		$(element).find('i').toggleClass('fa-thumbs-o-up fa-thumbs-up');
		var clicked_Post=$(element).parent().parent().parent().parent();
		//get div id of post
		console.log(clicked_Post.attr('id')+' Liked');
		clicked_Post.find('.my-like').text('You and ');
	}

	function handleComment(element)
	{
		console.log('Comment Clicked');
	}

	function handleShare(element)
	{
		console.log('Shared');
	}


       $(document).ready(function() {
         $('.demo-settings-toggle').hide();//Hide floating button
      var win = $(window);
      win.scroll(function() {

        if ($(window).scrollTop() >= ($(document).height() - $(window).height())*0.7){

          $('#loading').append(` <section style="background-color:#F5F5F5" id="loading"><img src="images/loading.gif" alt="Loading.. Please reload the page, if problem persists."></section>`);

          $('#pipeline').append(`<div class="col-md-11 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-10 col-xs col-xs-offset-1" style="background-color:white; margin-bottom:20px;">
            <br>
            <table width="100%">
              <tr valign="top">
                <td width="30%">

                  <table width="100%"  align="center">
                    <tr align="left">
                      <td><img src="images/img01.jpg" width="50px" height="50px" style="border-radius:25px"/></td>
                      <td>&nbsp;&nbsp;</td>
                      <td><b>Rohit Koshy</b><br>Finance Guy, Startup Catalyst<br>4h - Edited</td>
                    </tr>
                  </table>

                </td>
                <td align="right">

                <div class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-ellipsis-h" style="font-size:20px"></i></a>
                  <ul class="dropdown-menu" style="margin-left: 500px;">
                    <li><a href="#"><i class="fa fa-save" style="width: 25px;"></i>Save Post</a></li>
                    <li><a href="#"><i class="fa fa-thumbs-o-down" style="width: 25px;"></i>  Not Interested</a></li>
                    <li><a href="#"><i class="fa fa-eye-slash" style="width: 25px;"></i>  Hide all such posts</a></li>
                    <li><a href="#"><i class="fa fa-exclamation" style="width: 25px;"></i>  Bad Content</a></li>
                  </ul>
                </div>

              </td>
            </tr>
          </table>

          <p align="left">IIM interviews will be starting soon.<br>What song will the interviewer be singing for the hapless candidates?</p>
          <p align="right"><a href="#">...See more</a></p>

          <div class="page-description" style="border:1px solid gray">
            <iframe width="100%" height="400" src="https://www.youtube.com/embed/_P7S2lKif-A" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <div style="margin:10px">
            <h6>Techfest, IIT Bombay | Official Aftermovie 2017-18 (Featuring Sophia, MARNIK, Sountec)</h6>
            youtube.com<br>
          </div>
          </div>

          <br>
          <p align="left" style="color:gray"><span class="my-like"></span><span class="like-count">1</span> people liked this.  <span class="comment-count"> 1</span> Comment(s)</p>
          <hr color="gray">

          <table width="50%">
            <tr  style="font-size:20px;color:gray">
            <td class="like-btn" onclick="handleLike(this);"><i class="fa fa-thumbs-o-up"></i>&nbsp;&nbsp;Like</td>
            <td class="comment-btn" onclick="handleComment(this);"><i class="fa fa-commenting-o"></i>&nbsp;Comment</td>
            <td class="share-btn" onclick="handleShare(this);"><i class="fa fa-share" ></i>&nbsp;&nbsp;Share</td>
              </tr>
          </table>
         <br>
       </div>
         `);
          $('#loading').remove();
          }
      });
    });
