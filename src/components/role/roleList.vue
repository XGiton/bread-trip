<template>
  <div id="role-list">
    <div class="role-table">
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
      title="修改名称">
      <!-- @on-ok="ok" -->
      <!-- @on-cancel="cancel"> -->
      <div style="padding: 10px 20px 30px 20px">
        <div style="width: 23%; display: inline-block; text-align: right;">
          <span style="">填写新名称：</span>
        </div>
        <div style="width: 65%; display: inline-block">
          <Input v-model="editGroupName"></Input>
        </div>
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
                    this.editIndex = params.index
                    this.editGroupName = this.roles[params.index].group_name
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
                    this.remove(params.index)
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
      editIndex: 0,
      editGroupName: ''
    }
  },

  created: function () {
    this.getRoleList()
  },

  methods: {
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
</style>
