<template>
  <div class="log_box">
      
    <div class="top_wrap"><router-link to="/signin" >注册</router-link></div>
    <div class="top_logo">
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAABGCAYAAADyxhn6AAAgAElEQVR4nO1dCZQcVbn+qnqd7tm3JJMNEhIWg2ENi49FQH2EBwYEBQURAwg+CDwfCAFFnvLYFZCHiICsLkBAlNUEBQIIhIEASYBshCSTzD6ZfXqvd271V6TSqbW7ejKE+c7p09M9Xbdu3Xv//b//lZTFr2GE4jgAiwH0Oe5eRRT4cD3w+GIgHABkeaQ+2yhG4QlG6gr/IYCnAfx0BPRlFKMYsRiJBHwwgDv496UAvriD+zOKUYxYjEQC/lPO5xcBVO2gvoxiFCMa/h3QuZkA9gQwBcAEAGMB1AOIAKgEsEvO76sBvAHguwDeHOHjOYpRDCvyJeA/AhgH4MsOfvsFAMcA+BKAAwDsmsf9ppOI1wBoBPAvAK8AeHebX0kAfKOOq1F8fpAPAV8A4DT+/W0Scy6qKDG/AeAwD0dzN75O5edWKLgNUK5DtASorgDQBKQzHt5yFKMYuXBLwDUAbtd9/gOAjwC8w89CLb4QwFwAZR4/9SBkeRn8vlUI+tfBJ3cCkg8+uQuSBDR3Aq+vAJZ/PBpCGsXnBm4J+DKD74Q6ewLV4//1eOC6EPA9hUjJ8/DLCzEU78JADGjtAmIJIJUGZAnY1AG8uwbo7AFKS4DSCJAZlcKj2PnhNpFjNVXY4kBR7dhOBAPPIhr+C2RpIXoGBtDUDqzbDLT3AH2D2VciBShKllBTGSAaBsLB7HejGMXnBG4ksPAQTyzSsDQjGHgRpSWPAcpCdPYOYn0L8PFmYEMb0LZFSNzpCPr3Q8D/RQT8MxAJ1UFBCSSkIUn9AD6BoiwF8D4dXb2fm1kcxecWbiTwZJVIvIKCDQj5X0Bp5FFI0j/Q0Z3CpnZg7Wbgkxagq1dI2f1REjoWJaGT4ZNnupCugngXAVgA4AUAHaNLfBQ7I9wQcCTr4i0wqSKjLEVp+BZESh5GV4+Cdc1ZKSvehaTNKPshGj4eocB/QJYOQOEa8SCApwA8B+CvALoLbnEUoxghcGsDLwMwI6+uC+npk69ATcV1aN0CvPkBsKYJ6t/pzEyUlpyMcHA2JOznAdGaQWyM+AeAx0nQnUW7kztIdAIGDa5aB2CzR/eJ0AwS8fS0B+2FAOwrou8537fyHm4hohy7czyGCwqZ/AbVaVo8VDOBKRfi/isA9ORzZzcEfDOAeQACru+SUURo50SUR59E40pg4RKgo6cKZZFzEAmfDgl7F5FozSAm7e8A7qOE3pE4EMASk/u/5DBhxgnE5pCfqz6HrGnxKDeN5ItvAfizwbUDJMa4y3bvAnDuDpqHIQDPA7gSwIdFaP9p7rAzwsWAyGdwD6fB0usB/HdexCskbyhwMqLhJ/HsG8AfXwCGEqdhXM0aRMI3ADuEeEFpdCKAvwF4limdOwpRm356hWq2I7LoziDjeo/jkA+SJtcE8yBer5/VLUo4DiuKtIFmH4v/teTbqBMv9Hkm8V9nkKTbUBF9HIsageffBMZU/w8C/qtUqTxycCwn7kiaCcMNM0IANQWvYNSWWKxPALgFwI8M/n8mgFNM7j/e5HuJ0ixl0e/NzOpL6L4b8vBZ84XE8TAKl4rdcd9z2a5CQWk2VmD+xE9dmg7it4/ZEbDY2neni0a3haK0oKr8YnWT/QuNQF3VeSrxjsxYrbZpYmKRbaGRiv/iQrs4p3+nM5fdDcS6+pqD3/8EQNsIHI+pAGYZmDViHPYq0v3ywdesVOgSctH84ffdjmQKWCy0NIxDOHDnCE+0ECrcvSOgH8VCpU27FwH4es53XjnQciHsZDfpckJS9/O6Ql/9Du43zeC71vwetWhosZLAIs+5wvS/MqW9lSpcFnkEH3wCbGgFKsuuHGFqsxnmcAfVipHZvYLgxDx4kISuTVauh9kr+FzuR/85Cz144aEWz9YA4G4Ah5r85jORTG9GwF8xdGykFSDiA+qDQCwjiFdB1CehIwn0pQDfNmO7ApK0Vk3MSKRC8MlnfYbSHOea2IOfdfyW6bBX0LNtRAzlOd5lO6mdL8IuQ1ntHsfwRVvzAbxs8n8vwmzFhmRGwA9t/zgKUBUQdq1yz8PNeP7tXiTTinLkXlHlP+fUS8HaoIT2BODnmpDl5RiKA939QMC/LxTFjYcxxUocEe4jzhc9LAIgQhr7u2jjq8Mx+jsI/+BtDyURGeF8HQH/ghtWjCBiwCcbfB8DcBPfhWNqrU6ig/HjEpe+BitPfb5wq100WPzvYe5R9xr7AfiBSZvjjQhYcKUx230b9Qm1WTn6qjX455NtQhJL8EnS355qxWWPtirLf72HMn1SWEIPHY+y1INkGkgkRQJHbpUNK6ylBrCOvzmBKZFuQ1hvMu6mJWucyzijEzQwFJJw+PvPCqYynj/Hpr8HkWAGOI5mlVCOMiFg4e2+Svd5f46nQqkv5mSVyzFrLsIYu23zfiYD6ZmRzCjCGR73TY8mMj29z0Dc941cAg7R1tgetQHccvcmQbwSdosCAQloiQNhP/aZHFbSGUXKiedm1KmSVInshvjO0BEvGKe9w8A7aoUEF6k+0+p3AP7dYcxT5ljsbAR8oQPiBZ99hkcljI7SSX093NqypzBS4JVtmqGvww0e5ssMx7J/zwD4N2oohdqNgom+TW1Ba0via2kuAV9iaBcLtbg3rdz3Ro+C8oCEWBr4OI6pM8uUG+aOxzdm10noTUnoSm5VobedIKf2RMrE0fK2w+s1tJoExxsdEnDGg4EHK5JcnjMWElX703aAV9NNcoVCFftcvud6jNMMtRghwhBRv0k4qYMx1XXUrpzgJL5GGhqohZzFZI1WJgXdw7TQYuJlIwLeHlLWBh5KZoDeISASVeZfNAnXnN4AuS4ooSkGJDJ64s0XCit55Lr5zWw1K8gGiy40zJN/EnOcjTAhDwKeTueakGiP5dEfq8SKXKxhkkc+KX5h2s5mqAVwI//3WdR0ZM7tt8ik9Qt/A9+3DEM/+vUE/O+mHseUcGDJ0iFTI6hJVGfuv2o37LFvuYzWOLB2MOt9lj3LPzdqyK3aJHnUTqEwc5LEaeu7xf50aIjXcuZx30U1y2vIw7CpoOOzEq4hpjJ77ERurzWCprm5YZb5IqUn4AtNGxFd6krh3u81IFAZkBCRJaweZBXI4dw48pnDTJMOb8ozJKLXTISN+kuq6A8yFXKTzfV6Bi3qmH0A4DsmhCp5ZEZYwStTpRgwqul2vYnTTg9N6ytW8Qs9GjQCjtLza46EgoDwPMczUD3NozXj7CAyefYw+Y13hRGAOm40uZBprzdYeFeX08fwG8aEZzFV0ghxk+2NXqLeRVstjAU7XXlaDvJ0i3yHlfQg5zIwhfHyXDjx5Whm2oMMR5plmymMuZttz+1i/4ygaZiPaw82x9ZTLIYintn69yjsYOxPyOKdIoxekKmQP6B9eR3jsHrcmZPbbuWFnUgJ/RDXRj9DekZEt4QL3s3KkGhGOLV/f0HG4xYthmHRLAEd7FITctJXjYCvygmlGeEg5t8b4Xxu97SERsBH5DEwozDHbjb7Wp/Ic+ycEEiYC+f73OFyv8VvrXb/TGQ66Xd13+XmSYMS5iAH/SoUxRAbxWjTSOLuypBSUGcyZGi+mOEw/kbzo8icr0bGhVVoBHxIER7k84pK1uMyg+D4r+c5Nm7i6RPo5HrSQsqUWFyfG3K6iep6LvqYMGPntJEpwVbqF6AL5HMIQcDGEec2KuFG5ddwL5mpW1zAlxFu5e4xdVDG510mx3soJk4Nt0WevWrHLfZmqR6rvZ935Ne0isW0Xb+p25xvhbjJwpeobl9hca3eg365hUlQnkdVj+ts7m2Edpe/B+1bK7vVbSbWqxzPldSw7JjKdXkSrx0u5i6xm/x5ZKPkA6eqimxSDjbXlnMCI2J1msiQbwjlFBviBT3H+aKNttGlXBhzbapHpAzG4UwmWdjV926lE+Ymm3vkM07zmcxyg4trLqBa6caJ5bfZjPEH2vZmIcc19DxruIavKM+wtkIJGV+xcLU4JUU84KQi3UDJykFXUQI/Y52Lc753a2ONJSHlhlUOdni9kuduFLvCZDd4FOAXi+7XfM1hcoeTM6guovrlBDESTbHOZ76G2oiTvbng3DmdPyeQeLaXFZQcAtZgFl3Qw8hx5iVEtttYv80Oi0IQ0PE1N9Ufhft9Nj2gYMrhf7rsR4AlZL+uI2Khdhzv8Pr+PEvZWHGrjUXiyE/y9RVKNn0BvNz+GG1SN0OgkFpNDqAJjw8Kbql4MAolwWHs2s5c+6eDTLyJzKk2g+JnWpv3SGeq1XOKyiJiR9K71v6SbTCZ3s+/077K18EmJPnHHKhxFkkVRnjL4/HIsN5WMbGIr5NoX4rnL81ROd2WLrVbqCKT6vfMBDPKOktTGzpnB51FXSgKyVKyGjshVI522E4P6cCofZWAjTyLhUNR9kfQD4ytBpZmmiFJL0NR3ISrnNRUskOQKaJu8aCHIyEk+eFkJsOBJ/iaR/9GXvWGCbsF/POc0yrNUEPHWy5G+gl0+Zxl7QROY8+ynd/GTy5dDEzCYHwWdp+0RD32cyh+FcJBs+oHIwlNqkqq8k8DJipZrunczKV/MdNpncnvi4lfG7Sd6wDqIHEZPVRSp529ygIAuddr+3tlg8GSdaElL4oEvskD3d1IcoU+AjMtU6jvC03SJtXtenn21Q670OyxwiNOEzmKxwUH42ehoXYJ9pkGLHprMRpq/wZFOaFo9/MCsnyGeoRpLJ497V+/A1OcghgJAZGw2fGlWnnY5SSgu0fY02mqmKgy+GOqvc+Y/LaGCSE/op/kVYPf/K/BdkkNMk2REzzaFHE7vcZuEbLYbJ/W4qnDjKhJUowewiz5kx19+ot8it/Z6B/6Cb68TyfWbgKa2k5EXdU7yGTc2KPDB0maj/bulzCuBjiODs80ndGyL0vQosJmSxdQW2FExPcxrbAYpVW8wJ3UCjRCON6CuMp0aX6zLOpnGdlnGrTogRc7c/I19awqf+zNWO38PNsuJjQHl2XYTC7q+UAS/BiKPYpQEDjlSCBakkH7llmQpGeG9fQbOwi1WFEuRHPn9RhfC5zxVeBLM4D9pgMH7pl97T8dOHQG8J1jgKpSoL1bSOvchrvyJF6rwu5eYnmOFLPKRPKC6Dby3QsHVr4rxkzD0HC5Rc2pHYn7eG9LAvYXvSqELB+Fzt5rUV91Bc45HljwUgLrmv8DlaXnoiT0QyjKjpTGCUjS0+gbvBoDQ8uw7zTgxMOBkiDUQ8VzCbSzB6irBM6aDTzwHNA7kPWyF15t08pRUUxWV+g+Ym1LYm4ftbzdX/GzF4UU8q2JtZS2s9XRJr9luOaX/G2x0aUbGz20+lrPc9eYbSELf555qe4gS/PR2RtAXeWlmHtcVg19e+Xv0Lbldwj4D0AocDgkacIwhhoGkM58gHhyEdLpFtRXAV+blZWw8aQ4m/heyHI3t+lthSBoIXkbaoCTjgDufw5IiXK6BZdO/rHF/4pZ3vTMAq//H9Yss0Nf4V1V1X2fSbjqI4vD4cAEFjsH6ul8LaO9v442/EsF9tsIm+g/sEPMbv79Hu9NNYcsXYItfXuhJHgxZh+0GntPyR4vurGtEV19jVulWJF1a3EfcYtgAKguAxpqgb12ydq0W/prkUz9BrJ8imnKoyDitm5gSgPwhV2Bpauz17qTwgHuFGpgfNqs7A48djIepvolspx+N5vMJifM9BiHBOxFrv23LTKnVnPfrxkWM7TmpKbW3nyBIbhi1MWexKNGtSQjs0W/u42PQZ2kZRTb7k8edAtZmo148li0dd+N6rJ7cOS+jYglFPQPAalhqqOtErAEhINZb3LAD/QPTkd793cgSRdBlrTTKMw5eoaFJAQTWrZWJK24LSlUTwJ2gnxO+TPD6TnbA62gd26aqRgXsm73kImtlqY32+hcXHi4nc+JI/ZbzG02K4VjhEL8Q1bPVkHTw67fVsSr1sPxM6j8pk3KlpeQIEnnYjAuXhshS+8g4N+IUCA+jKUCFKQzMvoGa2mD720Q3zXXTMRvewaBXccCk8YILQIod113POPweb2MRTpdkAodXvrPZtivgP54xbWdOAFTzOprdJE+XIgjz8m1ltLVAeKamvTWMBKwHhORUSYiMxz1v1whbXvIs7B9hQou1O+1rs//MtvuaATrTCeN7zhrzek9b81xcDU6vM4NuofNfNuKZposD3uU6Wd3L7FxpapI7YtqJs2aBCjklPadEa/bOl6EFB4YAqaOzxJywlUkyO/wWI9jTY/fFKQYTAMl4jibtFPSdGLP/cvgXKg1Jl7TQvB9A/Mg38Ve4+K3HUyvPZ72u5WPwSyDy8qrrsWrM6wVXSycreVCgwn/nS4HYmfGXxw922BcHFgO7D4eeH8FECoHfMIeVoBYAEj6AMmQsvro/a/Nqbaf5g6g1+ml/Gi7K8WvQymVeJt6SnDNqgZ8qb4fZ+zSBfSG7HyAH9JelXLum2E94z9a1HP+bzKTc6iCuq1aqT3fSj6b0RgvY3UPN21Lee5oepqvSXTuHcmzf8eRkYQtTnNsY4EBozCP3uT5K/eIX06nYaEmYppr4mead1xSFr+m/fN3nJxRZOv/2m8+EAe+TaoE3lmLd+98BUp1FEsHQhhK+HHW+G5EIklgMGBGVEHaQLkEbLxfWJGAYAoIp9DUHcavN1bh1k0VSPaGgUgCr87agC/V9QP9tiHXGhMCdpOvnNuGE1g/X/5tS+y7l976Ms5Pt4WdHjaRxGabR8o8IOBMrmaoJ2DhOn+/wBvsDHjZ0dY/hUfOTAzhrGs34P6HmoExwazUjfuxa80AXtx/IyZXDQFpOetuMJfI1hASvSSJ2FAAV35cg99sqkBsIKh+p6rRZBKvHLQe/1bfD/QN9wEUo9hR0BMwmDfqZtP3zghRuPtx2+cS0ndaFAsWtOCUy1YD48JZghbEJoh0IIjK0gSOrhrEjGAaV07tQCCQBoaC7og4nALSElYNBHH8snFY1VYGlMYB0ZZC0S7aGwqo728evB6z6gbyJ2LRf5n9E+2nPwOF+xX226dkTRiJm6TEe0oGEv78GGchfVHnTTBuX1FTG3IJ+FTugPi8otlRiEEQ74QwOtbHUPfd94GkAtQExYHn+pEFkn4g5gNSPswc04fXZm1ANJLIqrmCMOwmtjSOv28ux3kfjcEnMT+QkYFwcivhbjuTKhFLsoKXD9iIw8b3qPfdRhEVf2eMtDglq9yptrsf6UTWv+YTTEIQRdyEAIT0FwQj/i8Wq7heqPniXdtoqBKQR4tY9CFEjVYQhjYOgljEcA8F8GEsgKEU+5KSMbk0jrFlcT6DjsDEs4n2RBsZErusbG1T4Xd6ZmCkRWntCb+EGpnNqAzjpZYyTIokMKV2INu+wvkWY5GUnY+Hqullsu2LMRbrQIy7+KxI2xEw6FyxK8y2s+I03cHWxhBEWhEASmTMPOcDvP9WD7BrSZaozSAmvD+EqeUx3Lx7G+aM7ctOaiywPWFo5wmUx/BcUwVmL5mUnXyhLss2UkSTxIEMrp7SiYj4fYYrJSOhOpjCHpFkdu3oLOCEAnQkferif64jirWiDcGTfAr+us8mTBNmgCrRmcUmFo8/g3WdETTHAji0ZgAoTahE9UFnFN0aAaVl7FkaR1XlUHbx50PImrddvFIy3umMqlNwgLgnJe6yziguXVWHdwaCaBdMS2OOSRml4RQW7duEg6sHP5XE/SkfXu8N4dnOKGIKMG9CDz4ZCqA55kdtMA1JUlATTKM97sfrvWE190dWJMzfpQvl0QQwyPLO4hmFnyMl45W2UnSnZfTLCu7bXI5FmyogR5K4YEI3Di2PqQWs5IyMY6oHESqPZefJiJA1xifGWGUyULW5Z1rLMCGSwMz6fjRtKcGCtjIkJcWQgL/uYLPxzgi7dLzs4IpzkSeFce5Va3D3fZuB6RFn7hZpq2f6y2N78ecvtKBeLGwxkZqKJwhVTFw4iT9/Uo3T3mvITqCZ1DW7j1jEMQYY9HFiseD8Jr4esegFhxcSRPtNLICKSAKNB23AbjX9WWmqSFjXXYJrN1bhns3lat8Pru/DcWP68H5PCR5rLs8yDUrAipIkzh/fg0snbkG1kISib5Twal816WQ01pQ0/f0h3NpUiYVdEbyyJVua6bDaAZQH0qpXRzAdDISyY6eq0LqxEIwjkMZ0ce9MlrBbEz70CB9CSt46vuJv8fJxMjXmp/0m4cNudf14d9Z6RAXRst9/bynDjeur8M9OJvJokla0qUlMHyV5WkZDaRzzJm7BxRO6EYomgSF/VlPTtCARFpSA15rL8WpPGHIwjQeay7GivVR1Vh5RO4C3usMY7ClR+2hEwOAuk32drZiC0MuMnx7GRrXKDj56+aYMQ3U/DQfZJMRnpe8eUdz7wGacfcVqYFIJEJTc+UszWY5aEU3iyl061cVdKri6WGihFIZiAVy2qg63f1yT5cBUlTyDaVvK9tJAteVDKC+N497d2zCkAE+2l+KJ1rIsMxJagaZCC9XSR1VPr3Yms8ykrCyOeRO6cWp9P2ZEeEKJ6It4RrHQNdVUI9xwlnDvaKrATRsr0dkXzrYfZtKPuKemXagaQdrctBBMQyPETxlZeuvzCuYlY+v99VxPzwz6QtijZhCPfHEzOuJ+/OKTarzUwmQqMRaSznTIGdpP518w67gP4yqGcOnEHpw/oRthMR6Z7HFHr7VHcfPGKjzZUrZ1TPyZT30hn6rQ9IGYEfDuhjFIb/Fjhq6sajYFqdbemGdVfKd4yDZHWKjIUyNYuqQH+52zAgjKQFVgW7vXKcSkiImM+VFXHsOPdunC3IZeLOqK4LKV9WjqCQOCqH2Kc+ZQLGhEmKTU1LQEsajcMK4EJW8ohV3K4ln1Pu7HARVDeGBGMwnZpxLWwEAQtzRV4raNlegQYTJxv5DjZJXijoVgHJp0TtMnYVRQyLIdMqC4Dw2VMfxsSgemRRO4Y2MlHm+qyPopVOZoP/9mBCxw83bb6bzDEQa1n61Qz32a44rQl34G7s3zOQXxjg+hvSWBKWcuR39nQnViqecmFwKJzpiUD+HSuBomUuFGZR4ueLVZTFVLdc61uB8nTO7C1VM71f892xXB7eur0DqSCDcXVMUL9mxr85+m6p6SspLWBeO2ImAww8VsJ0m+uCTP0wmKFac+3LKKhhjIiqw9Oe3sFVizvB+YUmJHvPXUYrR2j2N2lXmyhGZ/yYaTdyhTHPdlpEBLOZTpdLzbwdnA4O6hQ5icoDCbKKnLrBLtrXdx7MmB3Civr/01h4d2pZj59TjLBJtD8wFQKqvqrTnhzmZR8wW672p46PY9DvutxyGcm73Z7xqdK2kzy+aud9DOWTzJIsXrtzDrTXMIy4xybH9Ejaa2WzOE86gVb7M/2W7P51d1ZVG8QHsBR4ssY8rnUR725wrbEjhiGuuDOO9na7GmsUe1gR1I3ldp32v7fP9GM8C89pLmONq+6UeYu1tBregobj7RZOFcLppr7DqluYa0gJIu5/lR3XEyTsVKCRfjN1mPuo/XVzA9cZDMJmVLwCL0pNmzn9rH2/2qjkfKXMrP4sgXzavwdTLMPUjYZkd25uJO5hQHWCJ3Ts7Ynk1mcamDtjJsRysU+T1m2unH1hjbhAUs+zqPBDyPCUfv2RFwE5O+n3I4IHb4Z4HXP+ohAT/CgmbmoN37+sJO3PWnzcDkEifL+3CWDT2DEkjj5pdwgfhYtP5CB308lQRyBPex9nFjwXtcFBnWLnZ6dlQTJbWPUng1F1kLv9Nyop3gQG6QV6ip+ZgHLIoEPMDru5gPbA+7EFmWYRxJad/Pv9t44uFm9uFIaipOMJtS7ZtkOEZjO9VF2aFmjq+fY7uGJ0S26pyzTiS5hjGku1OZ1ruISUZzuaNKjMO5TqouPE3JYb3YnaHQ+sBeHfXRyIExh3BO1QaQbonj+BvXZTfsR3zW8d4s/kpJuYBHY4CL+mgeNWl2+rsRvsgqFMeTgLeQOUzWLYoaF7W9r6Uf4R/8XEKJPIFt7c9Du+5y0FYjn0cc5fINftYz6NO488da+jrHBlbH3JNzJ/4+jJI5n/OW9+OOqL04xhsNxrbKRUWOn1Id10KwWj61pkJP51lTdzjM255GJtnBzyEWTziLc6geN+S0BtX1VI0KPdtnJFTi/9DR3uegrHrt51z3MTpXDQLTIk6I95uc8HHkwjfz+5NIzDfbXJ+LK7go/siF0JCzm0ji8yxw2F4rpbUmZWdwDWxge9UuNtkPUjLMYijwXarLv6FEm0kp8kuPnaEf6La/XsZ7PEFm9A2qz2sctHMNdwitpqQtpRah9yl/5OKUjhbu0dXGdjK1G+1zwOV2yX2oLWlVOyZSi3uI5oI4KG+imyJy8zm5V7q4JhfWm+TtUWho622quPZlakp8iDXF8fR7/aoN7DBctIrq41f4+QJK3xnk7tpiuJxqnx0mUiVcxt8fRQYh6RwlKRcSuI7EpRUyDJIxT+XnaZTGTqEP7fm4QJNUa+tJbF5V3RBrVfO4aofUtdCxt5CMJK4rnWOHKhLvejKikzm2sm5sExwfJ6jn+GnHtoZpP+vH1k2G4+E5Kndct31xJd/nuq0C+ROqwfk6ogrNs15Jbp9PkbSF3CBvrwWI6YvI6IplIKcVZAKOkzXeZd3lY/i5nCpuhAu8Vqtl5LDPEdrLB1KF2kJCTvN1Dtt8yGF7P6BHu4KnAxzMhTHIhfuCjkicoFl3ftAePI1C68vLLI/qhekF9vcAMskzmUcwmSpmE6uIPOuivTDH9hCOczefRxvb71O6O9VuLqKZVEmGujfvoWlMjayu4lQLnW2wZ1q/bkT7A/mUcf0VOddDLrgTKPK9OCNnXh7OsFsMqkyYQ81FlXH1Mx3ItCaAyWE3scgJukm6lu/nkXhmu+y3dhL8ErKVOi6QBhJcggvPaSGGr3DR38k2j2MCi1OvbS5+Sw/wu/S86xl0yOOD83ooZR+juvx/9M735pyCHz4p/NAAAAJNSURBVHXoeGomI1jK+aqjVB5DaZ/iPZ0+w1HUBoRf4EWW7PkezZ988IecovTTcvoishTH5rvB+Cnq4U5Kigo85+HZuC/S5e8ELbQ/nROvIJPaADpX9OP3z7arf+eRSJC7l68Q23+STq37kJ7XX9GU+RclkFPTQqu8cj/bm0Y78pI8tZoBSpaZ7Js+GUYuQknWQZoVfyAT2kK7XcMSMmunmKwL8bzP9XI7z4R6hQLHae7BG9QEbuLY7knmOJ/OQbf4QQ59iRj1bfz7NjpLI4VUCGgl9z3F4jzdJMunuJU8dvgZuZvZqRL9lH7THZfH0SBnHVjzn2gD2hNAqWslpYoEPJ1aiiCWq+mUeIDfzXPRXik5r0SP7g9pu4aosm10UZy/XFdCeDlDXUM8/LyR7bg5QOwuHg52Dt/v5Pf3Ue13FkJyjhpKx7G8IsO19Xsu9gNdeqSjlLg+ju151CpjNIM2uyi8FyYDC9KZdRrH8zwy2maq405z2W7UrZcHeVTs9WTA32XI7FYvTkJYwNfhdHNPIKdcwdiVkwyhfPAA73scVZc6qpPv0LbJr6ZvmQ9tHw7g7hc7s9LXfa7za/S6BnUL7SWqY7txAt14I1eRCfrImL7GBXY0vbEPOGhDw4EMTd2sCxU9zPfpdA7Vukjo+IQE9BxPMtAKoos2zi8CAa+nhNPmVkgiQcRCkgpzQoS03JykIJxXwhutEZXwkQiGJsZJ2O9uzokWa1BIWsGwtQKA2tZU4cAUYyu0B6djK9aOljqsphNRIxDaUvbcJAD/D3VtWaegloAbAAAAAElFTkSuQmCC"
        alt=""
      />
    </div>
    <div>
      <div class="tab_nav">
        <span class="common logo" :class="{active:num==1}" @click="fn1">普通登录</span>
        <span class="note logo" :class="{active:num==2}" @click="fn2">短信快捷登录</span>
      </div>
      <div class="tab_content">
        <div class="tab_content1" v-show="num==1">
          <div class="mail_box">
            <i class="iconfont icon-yonghu"></i>
            <input class="mail" type="text" v-model="phone"  placeholder="手机号、邮箱" />
            <div class="country_num">
                <span class="country_num1"></span>
                <span class="country_num2">+86</span>
                <img class="country_num3" src="https://m.xiaozhu.com/static/images/flag/China.jpg" alt="">
            </div>
          </div>

          <div class="password_box">
            <i class="iconfont icon-dunpaisuo"></i>
            <input class="password" type="password" v-model="password" placeholder="密码" />
          </div>
          <!-- <div class="sliding"> 滑块</div> -->
          <div class="login_btn" @click="login1">登录</div>
          <div class="find_password">找回密码</div>
        </div>

        <div class="tab_content2" v-show="num==2">
         <div class="mail_box">
            <i class="iconfont icon-yonghu"></i>
            <input class="mail" type="text" placeholder="手机号" />
            <div class="country_num">
                <span class="country_num1"></span>
                <span class="country_num2">+86</span>
                <img class="country_num3" src="https://m.xiaozhu.com/static/images/flag/China.jpg" alt="">
            </div>
          </div>

          <!-- <div class="sliding"> 滑块</div> -->

          <div class="password_box">
            <i class="iconfont icon-dunpaisuo"></i>
            <input class="password" type="text" placeholder="动态验证码" />
            <div class="hq_box">获取验证码</div>
          </div>
          <div class="login_btn" @click="login2">登录</div>
           <div class="find_password"></div>
        </div>


      </div>
      <div class="tab_bottom">
          <div class="tab_bottom_text">
              <span>合作账号登录</span>
          </div>
          <div class="tab_bottom_logo">
              <router-link to="" class="tab_bottom_logo1">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0ExMDdFQkYzNjcwMTFFNTg0NTJCOEQ5NjNGQjA0QUEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0ExMDdFQzAzNjcwMTFFNTg0NTJCOEQ5NjNGQjA0QUEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozQTEwN0VCRDM2NzAxMUU1ODQ1MkI4RDk2M0ZCMDRBQSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozQTEwN0VCRTM2NzAxMUU1ODQ1MkI4RDk2M0ZCMDRBQSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlR8HWcAAAjESURBVHja1FxpjBRF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" alt="">
              </router-link>
              <router-link to="" class="tab_bottom_logo2">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDIwRDRBMzAzNjcwMTFFNUI2RkFENUQyQThGRTE5RTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDIwRDRBMzEzNjcwMTFFNUI2RkFENUQyQThGRTE5RTEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0MjBENEEyRTM2NzAxMUU1QjZGQUQ1RDJBOEZFMTlFMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0MjBENEEyRjM2NzAxMUU1QjZGQUQ1RDJBOEZFMTlFMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjfEtEQAAAsRSURBVHja3JwNcFTV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" alt="">
              </router-link>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            num:1,
            phone:'',
            password:'',
        }
    },
    methods:{
        fn1(){
            this.num=1
        },
        fn2(){
            this.num=2
        },
        login1(){

          var obj={

          }
          let cookies = document.cookie.split(';');
          for (let i = 0; i < cookies.length; i++) {
            obj[cookies[i].split("=")[0]]=cookies[i].split("=")[1]
          }
          // console.log(obj);
          if(this.phone!=obj.phone&&this.password!=obj.password){
            console.log("请输入正确的账号和密码");
            
          }else{
            console.log("成功");
            this.$router.push({path: '/'})
          }

          
          
        },
        login2(){

        }
    }
}
</script>>

<style scoped>
.log_box {
  padding: 0 0.3rem;
}
.top_wrap {
  width: 100%;
  height: 0.92rem;
  color: #f05b72;
  font-size: 0.32rem;
  text-align: right;
  line-height: 0.92rem;
}
.top_wrap a{
    color: #f05b72;
}
.top_logo {
  height: 0.92rem;
  margin-bottom: 0.6rem;
  text-align: center;
}
.top_logo img {
  height: 0.7rem;
}

/* 登入部分 */
.tab_nav {
  padding: 0.1rem 0 0.6rem 0;
  display: flex;
  justify-content: space-between;
}
.logo {
  flex: 1;
  padding: 0.34rem 0;
  text-align: center;
  border-bottom: 0.02rem solid transparent;
  font-size: 0.28rem;
  color: #666666;
}
.active {
  font-weight: 700;
  color: #f05b72;
  border-bottom-color: #f05b72;
}


.mail_box,
.password_box {
  padding: 0 0.3rem;
  margin-bottom: 0.3rem;
  border: 0.02rem solid #eee;
  position: relative;
}

.mail,
.password {
  outline: none;
  border: none;
  height: 0.72rem;
  width: 60%;
  padding-left: 0.3rem;
}
.mail_box i,
.password_box i {
  font-size: 0.34rem;
}

.country_num{
    position: absolute;
    top: 0.24rem;
    right: 0.3rem;
    overflow: hidden;
    width: 1.7rem;
    border-left: 1px solid #959ea7;
}
.country_num1,.country_num2,.country_num3{
    float: right;
}
.country_num1{
    width: 0.14rem;
    height: 0.08rem;
   background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAHBAMAAADOnLEXAAAAFVBMVEUAAAA0Myc0Myc0Myc0Myc0Myc0Myf6rN8RAAAABnRSTlMAhoKLdXT/EPDkAAAAL0lEQVQI12MIZgACEwYzAwYG5mQGxkQGBjEBEGYCshgYk9QEQPJqSQwgwKTAwAAAZRMDqG4AaQ4AAAAASUVORK5CYII=) no-repeat;
   background-size: cover;
   margin-top: 0.1rem;
}
.country_num2{
    margin: 0 0.1rem;
}
.country_num3{
    width: 0.4rem;
    height: 0.24rem;
}
.hq_box{
    position: absolute;
    top: 0.24rem;
    right: 0.3rem;
    width: 1.7rem;
    border-left: 1px solid #959ea7;
    color: black;
    font-size: 0.26rem;
    text-align: right;
}

/* 滑块 */
.sliding{
    height: 35px;
    background: pink;
    margin-bottom: 0.3rem;
}

.login_btn {
  margin-top: 0.6rem;
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  font-size: 0.32rem;
  background: #f05b72;
  border-radius: 0.04rem;
  color: #fff;
}
.find_password{
    line-height: 0.92rem;
    text-align: right;
    height: 0.92rem;
    padding-right: 0.3rem;
    font-size: 0.28rem;
    color: #ff4081;
}

.tab_bottom_text{
    height: 0.6rem;
    margin-bottom: 0.3rem;
    font-size: 0.28rem;
    color: #999999;
    text-align: center;
    line-height: 0.6rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAPCAMAAAD59u7IAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODJEMTQ0NDUzNzRBMTFFNThEOUFFQkI2MzYzMTM2QzgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODJEMTQ0NDYzNzRBMTFFNThEOUFFQkI2MzYzMTM2QzgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4MkQxNDQ0MzM3NEExMUU1OEQ5QUVCQjYzNjMxMzZDOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4MkQxNDQ0NDM3NEExMUU1OEQ5QUVCQjYzNjMxMzZDOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pk+541EAAAAGUExURenp6f///xohfosAAAACdFJOU/8A5bcwSgAAABJJREFUeNpiYGRkIBIxMAAEGAACzQAdetrdPgAAAABJRU5ErkJggg==) repeat-x  0 0;
}
.tab_bottom_text span{
    padding: 0 0.1rem;
    background: white;
}
.tab_bottom_logo{
    text-align: center;
}
.tab_bottom_logo1,.tab_bottom_logo2{
    display: inline-block;
    width: 33%;
}
.tab_bottom_logo1 img,.tab_bottom_logo2 img{
    height: 0.72rem;
    width: 0.72rem;
}
</style>