import React from 'react'

export default function Recit({total,pay}){
return(<div>
<div>your Total was {total}</div>
<div>you paid {pay}</div>
<div>your change is :$ {pay-total}</div>
</div>)


}
