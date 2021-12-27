import styles from './index.less';
import './styles.less';

import {useIntl, setLocale, useModel} from 'umi'
import { Button, Radio, RadioChangeEvent } from 'antd';
import { useEffect, useState } from 'react';
import useAuthModel from '@/models/useAuthModel';

export default function IndexPage() {
  // 多语言
  const intl = useIntl()
  const t = (id: string) => intl.formatMessage({id})

  const handleSwitchLocale = (v: RadioChangeEvent) => {
    setLocale(v.target.value, true)
  }

  // State
  const { initialState } = useModel('@@initialState')
  const [msg, setMsg] = useState<string>()

  useEffect(() => {
    if (initialState) {
      setMsg(initialState.msg)
    }
  }, [])

  // Model
  const {user, signin, signout} = useAuthModel()

  return (
    <div>
      <h1>多语言</h1>
      <Radio.Group onChange={handleSwitchLocale}>
        <Radio.Button value="en-US">English</Radio.Button>
        <Radio.Button value="zh-CN">Chinese</Radio.Button>
        <Radio.Button value="ja-JP">Japanese</Radio.Button>
      </Radio.Group>
      <h4 className={styles.title}>{ t('home.header.home') }</h4>
      <hr/>
      <h1>Initial State: {msg}</h1>
      <hr />
      <Button onClick={signin}>Sigin In</Button>
      <p>User: {user}</p>
      <Button onClick={signout}>Sigin Out</Button>
    </div>
  );
}
