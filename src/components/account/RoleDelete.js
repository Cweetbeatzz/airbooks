import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

function DeleteRole() {
  //###################################################

  const roleDetail = useSelector((state) => state.delRole);
  const { DeleteRole } = roleDetail;
  const { id } = useParams();
  const dispatch = useDispatch();

  console.log(roleDetail);

  const handleDelete = () => {
    dispatch(DeleteRoleAction(id));
  };
  //###################################################

  //if delete successful refresh
  useEffect(() => {
    dispatch(roleListAction());
  }, [dispatch, id]);
  //###################################################

  return (
    <div class="container">
      <br />
      <br />
      <div class=" text-center">
        <h4>
          <strong>DELETE ROLE</strong>
        </h4>
        <div className="alert alert-danger">
          <h6>Are you sure you want to delete this?</h6>
        </div>
      </div>
      <div className=" justify-content-center">
        <hr />
        <form
          asp-action="Delete"
          className="justify-content-center"
          onClick={handleDelete}
        >
          <dl class="container row  mx-auto">
            <dt class="col-sm-2">Role Name</dt>
            <dd class="col-sm-10">{DeleteRole.RoleName}</dd>
          </dl>
          <hr />
          <div className="text-center">
            <input type="hidden" asp-for="Id" />
            <button type="submit" value="Delete" class="btn btn-danger">
              DELETE
            </button>
            {"  "}|{"  "}
            <Link to="/rolelist" className="mx-auto">
              <strong>BACK</strong>
            </Link>
          </div>{" "}
        </form>
      </div>
    </div>
  );
}

export default DeleteRole;
