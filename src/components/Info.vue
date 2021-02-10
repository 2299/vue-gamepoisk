<script>
// import axios from 'axios'

export default {
  data() {
    return {
      info: {},
    }
  },
  async mounted() {
    const res = await fetch('https://api.rawg.io/api/games')
    const info = await res.json()
    this.info = info
  },
}
</script>