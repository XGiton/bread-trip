<template>
  <div id="role-list">
    <!-- <div style="width: 100%; display: inline-block"> -->
      <Button type="primary" @click="createBtnOnClick" style="margin-right: 20px;">新建角色</Button>
    <!-- </div> -->
    <div class="role-table">
      <p class="totalInfo">共 {{ total }} 个角色</p>
      <Table border :columns="columns" :data="roles"></Table>
    </div>
    <div class="role-page">
      <Page
        :total="total" show-sizer @on-change="onPageChange"
        @on-page-size-change="onPageSizeChange">
      </Page>
    </div>
    <Modal
      v-model="showEditModal"
      title="修改名称"
      @on-ok="editNameConfirm">
      <div style="padding: 10px 20px 30px 20px">
        <div style="width: 23%; display: inline-block; text-align: right;">
          <span style="">填写新名称：</span>
        </div>
        <div style="width: 65%; display: inline-block">
          <Input v-model="operateGroupName"></Input>
        </div>
      </div>
    </Modal>
    <Modal
      v-model="showCreateModal"
      title="新建角色"
      @on-ok="createConfirm">
      <div style="padding: 10px 20px 30px 20px">
        <div style="width: 23%; display: inline-block; text-align: right;">
          <span style="">填写名称：</span>
        </div>
        <div style="width: 65%; display: inline-block">
          <Input v-model="operateGroupName"></Input>
        </div>
      </div>
    </Modal>
    <Modal
      v-model="showDeleteModal"
      @on-ok="deleteConfirm">
      <div style="padding: 10px 20px 30px 20px; vertical-align: middle; line-height: 1.5">
        <Icon type="help-circled" color="#ffbf00" size="24" style="margin-right: 16px; line-height: 1"></Icon>
        <span style="font-size: 15px; line-height: 1.5"><strong>你正在删除【{{ operateGroupName }}】权限组</strong></span>
        <p style="margin-left: 42px; margin-top: 8px;">删除成功之后，该操作将无法恢复，你还要继续吗？</p>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  data () {
    return {
      columns: [
        {
          title: '角色名称',
          key: 'group_name',
          width: '30%'
        },
        {
          title: '包含用户数',
          key: 'user_no',
          width: '30%'
        },
        {
          title: '操作',
          key: 'action',
          render: (h, params) => {
            return h('div', [
              h('a', {
                props: {
                  type: 'text'
                },
                style: {
                  color: '#3da4ff',
                  padding: '6px 2px',
                  transition: 'color .3s ease'
                },
                on: {
                  click: () => {
                    this.show(params.index)
                  }
                }
              }, '编辑'),
              h('a', {
                props: {
                  type: 'text'
                },
                style: {
                  color: '#3da4ff',
                  padding: '6px 2px'
                },
                on: {
                  click: () => {
                    this.showEditModal = true
                    this.operateIndex = params.index
                    this.operateGroupName = this.roles[params.index].group_name
                  }
                }
              }, '更名'),
              h('Button', {
                props: {
                  type: 'text'
                },
                style: {
                  color: '#3da4ff',
                  padding: '6px 2px'
                },
                on: {
                  click: () => {
                    this.showDeleteModal = true
                    this.operateIndex = params.index
                    this.operateGroupName = this.roles[params.index].group_name
                  }
                }
              }, '删除')
            ])
          }
        }
      ],
      roles: [],
      total: 0,
      page: 0,
      size: 10,
      showEditModal: false,
      showDeleteModal: false,
      showCreateModal: false,
      operateIndex: 0,
      operateGroupName: ''
    }
  },

  created: function () {
    this.getRoleList()
  },

  methods: {
    deleteConfirm: async function () {
      const url = `/api/group/` + this.roles[this.operateIndex]._id
      const res = await fetch(url, {
        method: 'DELETE',
        credentials: 'same-origin'
      })
      const data = await res.json()
      if (res.status >= 400) {
        console.log(data.msg)
      } else {
        this.getRoleList()
      }
    },
    editNameConfirm: async function () {
      const url = `/api/group/` + this.roles[this.operateIndex]._id + `/name`
      const formData = new FormData()
      formData.append('group_name', this.operateGroupName)
      const res = await fetch(url, {
        method: 'PUT',
        credentials: 'same-origin',
        body: formData
      })
      const data = await res.json()
      if (res.status >= 400) {
        console.log(data.msg)
      } else {
        this.getRoleList()
      }
    },
    createConfirm: async function () {
      const url = '/api/group'
      const formData = new FormData()
      formData.append('group_name', this.operateGroupName)
      const res = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        body: formData
      })
      const data = await res.json()
      if (res.status >= 400) {
        console.log(data.msg)
      } else {
        this.getRoleList()
      }
    },
    createBtnOnClick: function () {
      this.showCreateModal = true
      this.operateGroupName = ''
    },
    onPageChange: function (page) {
      this.page = page - 1
      this.getRoleList()
    },
    onPageSizeChange: function (size) {
      this.size = size
      this.getRoleList()
    },
    getRoleList: async function () {
      const start = this.page * this.size
      const end = (this.page + 1) * this.size
      const res = await fetch(`/api/groups?start=` + start + `&end=` + end, {
        method: 'GET',
        credentials: 'same-origin'
      })
      const data = await res.json()
      if (res.status >= 400) {
        console.log(data.msg)
      } else {
        this.roles = data.groups
        this.total = data.total
      }
    }
  }
}
</script>

<style scoped>
.role-page {
  margin: 16px 0;
  text-align: right;
}
.totalInfo {
   display: block;
   font-size: 13px;
   padding: 20px 0px 10px;
}
</style>
