<template>
  <div id="role-list">
    <div class="role-table">
      <Table border :columns="columns" :data="roles"></Table>
    </div>
    <div class="role-page">
      <Page :total="total" show-sizer></Page>
    </div>
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
                  // marginRight: '2px',
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
                    this.remove(params.index)
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
      size: 10
    }
  },

  created: function () {
    this.getRoleList()
  },

  methods: {
    getRoleList: async function () {
      const start = this.page * 10
      const end = this.page * 10 + 10
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
