<template>
   <div class="row">
        <div class="col-md-12">
            <h3 class="heading-content">Thông tin vai trò</h3>
            <form @submit.prevent="">
                <div class="mb-3">
                    <label class="form-label"
                        >Tên vai trò</label
                    >
                    <input
                        required
                        type="text"
                        class="form-control"
                        placeholder="Admin"
                    />
                   
                </div>
                <div class="mb-3">
                    <label class="form-label"
                        >Mô tả thông tin</label
                    >
                    <textarea
                        required
                        type="text"
                        class="form-control"
                        placeholder="Thông tin chi tiết..."
                    />
                </div>
                <div class="mb-3" style="display:flex;align-items:center">
                    <label class="me-4"
                        >Chọn quyền truy cập</label
                    >
                    <div class="ckeckbox">
                        <input type="checkbox">
                        <span class="checkmark">Chọn tất cả</span>
                    </div>
                </div>
                <div class="mb-3">
                    <div class="row">
                        <div class="col-3">
                            <div class="ckeckbox">
                                <input type="checkbox">
                                <span class="checkmark">Quản lý nhân viên</span>
                            </div>
                            <div class="checkbox-inner">
                                <div class="ckeckbox">
                                    <input type="checkbox">
                                    <span class="checkmark">Thêm mới</span>
                                </div>
                                <div class="ckeckbox">
                                    <input type="checkbox">
                                    <span class="checkmark">Tìm kiếm</span>
                                </div>
                                <div class="ckeckbox">
                                    <input type="checkbox">
                                    <span class="checkmark">Chỉnh sửa</span>
                                </div>
                                <div class="ckeckbox">
                                    <input type="checkbox">
                                    <span class="checkmark">Xóa</span>
                                </div>
                                <div class="ckeckbox">
                                    <input type="checkbox">
                                    <span class="checkmark">Phân công trực</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="ckeckbox">
                                <input type="checkbox">
                                <span class="checkmark" >Quản lý vé</span>
                            </div>
                            <div class="checkbox-inner">
                                <div class="ckeckbox">
                                    <input type="checkbox">
                                    <span class="checkmark" >Thêm mới</span>
                                </div>
                                <div class="ckeckbox">
                                    <input type="checkbox">
                                    <span class="checkmark" >Tìm kiếm</span>
                                </div>
                                <div class="ckeckbox">
                                    <input type="checkbox">
                                    <span class="checkmark" >Chỉnh sửa</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="ckeckbox">
                                <input type="checkbox">
                                <span class="checkmark" >Phân quyền</span>
                            </div>
                            <div class="checkbox-inner">
                                <div class="ckeckbox">
                                    <input type="checkbox">
                                    <span class="checkmark" >Thêm mới</span>
                                </div>
                                <div class="ckeckbox">
                                    <input type="checkbox">
                                    <span class="checkmark" >Tìm kiếm</span>
                                </div>
                                <div class="ckeckbox">
                                    <input type="checkbox">
                                    <span class="checkmark" >Chỉnh sửa</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="ckeckbox">
                                <input type="checkbox">
                                <span class="checkmark" >Báo cáo</span>
                            </div>
                            <div class="checkbox-inner">
                                <div class="ckeckbox">
                                    <input type="checkbox">
                                    <span class="checkmark" >Xem báo cáo</span>
                                </div>
                                <div class="ckeckbox">
                                    <input type="checkbox">
                                    <span class="checkmark" >Xuất báo cáo</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="display:flex;justify-content:flex-end">
                    <router-link to="/personnel" class="btn btn-primary me-4" @click="savePerson">Cập nhật</router-link>
                <router-link to="/personnel" class="btn btn-primary">Đóng</router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name:'Decentralization',
}
</script>

<style>
.ckeckbox{
    display: flex;
    align-items: center;
    padding: 5px;
    position: relative;
}

.ckeckbox input{
    width: auto;
}
.ckeckbox input {
      padding: 0;
    height: initial;
    width: initial;
    margin-bottom: 0;
    opacity: 0;
    cursor: pointer;
    position: absolute;
    width: 24px;
    height: 22px;
    z-index: 1;
}

.ckeckbox span {
  position: relative;
  cursor: pointer;
}

.ckeckbox span:before {
  content:'';
  -webkit-appearance: none;
  background-color: transparent;
  border: 2px solid #0079bf;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
  padding: 10px;
  display: inline-block;
  position: relative;
  vertical-align: middle;
  cursor: pointer;
  margin-right: 5px;
}

.ckeckbox input:checked + span:after {
  content: '';
  display: block;
  position: absolute;
  top: 2px;
  left: 9px;
  width: 6px;
  height: 14px;
  border: solid #0079bf;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}
.checkbox-inner{
    padding-left: 30px;
}
</style>