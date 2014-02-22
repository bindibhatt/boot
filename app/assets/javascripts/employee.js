$(document.body).ready(function () {
    $('#submit').prop('disabled', true).removeClass("btn btn-block btn-lg btn-primary").addClass("btn btn-block btn-lg btn-default");
        $('#btn_AddToList').click(function () {
        $('#submit').prop('disabled', true).removeClass("btn btn-block btn-lg btn-info").addClass("btn btn-block btn-lg btn-default");
        var val = $('#txt_RegionName').val();
        var val2 = $('#txt_Region').val();
        var val3 = $('#txt_Regio').val();
        var val4 = $('#txt_Regi').val();
        $('#lst_Regions').append('<tr><td>' + val + '</td>' + '<td>' + val2 + '</td>' + '<td>' + val3 + '</td>' + '<td>' + val4 + '</td><td><button type="submit" class="api_key_edit btn btn-small btn-primary" value="31">Edit</button><button type="button" class="api_key_delete btn btn-small btn-danger" value="31" onclick="deleteRow(this);">Delete</button></td></tr>');
        $('#txt_RegionName').val('').focus();
        $('#txt_Region').val('');
        $('#txt_Regio').val('');
        $('#txt_Regi').val('');
        $('#btn_AddToList1').click(function () {
        $('#submit').prop('disabled', false).removeClass("btn btn-block btn-lg btn-default").addClass('btn btn-block btn-lg btn-info');
        $('body').on('shown.bs.modal', '#myModal', function () {
        $(".modal-body").html($("#table-lst-regions").html());
          });
        });
    });
});
 function deleteRow(el) {
        var tr = $(el).closest('tr');
        tr.css("background-color","#FF3700");

        tr.fadeOut(400, function(){
            tr.remove();
        });
      return false;
    }

$(document.body).ready(function(){
$("table.table tr th").bind("click", headerClick);
$("table.table tr td").bind("click", dataClick);

function headerClick(s) {
    console.log(s);
    $(s.currentTarget).css({
        color:"red"
    });
    console.log(s);
}

function dataClick(s) {
    console.log(s);
    if (s.currentTarget.innerHTML != "") return;
    $(s.currentTarget).append("<input type='text'>");
}
});