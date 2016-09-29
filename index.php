<?php
header("Content-Type: text/html; charset=utf-8");
$list = array();
if( $handle = opendir('html') )
{
    while( false !== ($file = readdir($handle)) )
    {
        if( $file !== '.' && $file !== '..' && $file !== '.htaccess' )
            $list[] = $file;
    }
    closedir($handle);
}

sort($list);

ob_start();
$xmpl = file_get_contents($_SERVER['DOCUMENT_ROOT'] . '/html.txt');
preg_match_all("#(.*?)\n(.*?)\n(.*?)\n(.*?)\n(.*?)\n\n#isu", $xmpl, $xmpl);
unset($xmpl[0]);
foreach($xmpl[1] as $id => $inf)
{
    $logoclass = '';
    if( preg_match("#^.*?youtube.*?v\=([^\&]+).*?$#isu", $xmpl[2][$id], $yid) )
    {
        $xmpl[2][$id] = 'https://i.ytimg.com/vi/' . $yid[1] . '/hqdefault.jpg';
        $logoclass = 'youtube';
    }

    echo '<div class="item"><div class="item-content"><a href="' . $xmpl[1][$id] . '" target="_blank" class="href">';
    echo '<div class="logo ' . $logoclass . '"><img src="' . $xmpl[2][$id] . '" alt="' . htmlspecialchars($xmpl[3][$id]) . '" /></div>';
    echo $xmpl[3][$id] . '</a>' . "<br />\n" . $xmpl[4][$id] . "\n";
    echo '<a href="' . $xmpl[5][$id] . '" class="tag">' . $xmpl[5][$id] . '</a></div></div>';
}
foreach($list as $dir)
{
    $name = $dir;
    $desc = '';
    $tag = '#HTML';
    if( is_file($_SERVER['DOCUMENT_ROOT'] . '/html/' . $dir . '/about.txt') )
    {
        $about = file_get_contents($_SERVER['DOCUMENT_ROOT'] . '/html/' . $dir . '/about.txt');
        preg_match("#^(.*?)\n([^\#]*)(.*)$#isu", $about, $text);
        unset($text[0]);
        $name = $text[1];
        $desc = $text[2];
        $tag = !empty($text[3]) ? $text[3] : $tag;
    }

    echo '<div class="item"><div class="item-content"><a href="/html/' . $dir . '/" target="_blank" class="href">';
    if( is_file($_SERVER['DOCUMENT_ROOT'] . '/html/' . $dir . '/images/logo.png') )
        echo '<div class="logo"><img src="/html/' . $dir . '/images/logo.png" alt="' . htmlspecialchars($name) . '" /></div>';
    echo '' . $name . '</a>' . "<br />\n" . $desc . "\n";
    echo '<a href="' . $tag . '" class="tag">' . $tag . '</a></div></div>' . "\n\n";
}
$content = ob_get_clean();
?>
<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="description" content="Создание сайтов, шаблонов, леддингов, скриптов, парсеров. Примеры моих работ по созданию сайтов">
        <meta name="mailru-domain" content="nKrZcHaPcrsJjlyU" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
        <link href="style.min.css" type="text/css" rel="stylesheet">
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
        <script src="/libs.js"></script>
        <title>Of Nine by CaguCT | Примеры работ</title>
    </head>

    <body>
        <div class="centrum">
            <div class="header">
                <div class="logo">Of Nine by <a href="http://caguct.com" target="_blank" title="Мой блог">CaguCT</a></div>
                <div class="descr">Примеры работ, <a href="#contacts">контакты</a>, <a href="http://www.maultalk.com/topic165679.html" target="_blank" title="maultalk">отзывы</a></div>
                <div class="tags">
                    <a href="#all">#Все работы</a>
                    <a href="#HTML">#HTML</a>
                    <a href="#DLE">#DLE</a>
                    <a href="#WordPress">#WordPress</a>
                    <a href="#OpenCart">#OpenCart</a>
                    <a href="#HY">#HY</a>
                    <a href="#KVS">#KVS</a>
                    <a href="#uCoz">#uCoz</a>
                    <a href="#Joomla">#Joomla</a>
                </div>
            </div>
            <div class="contacts"><img src="images/maultalk_contacts.png" alt="Контакты" /></div>
            <div class="content">
                <?php echo $content; ?>
                <div class="clr"></div>
            </div>
            <div class="hFooter"></div>
        </div>
        <div class="footer">
            <div class="counter">
                <!--LiveInternet counter--><script type="text/javascript"><!--
                document.write("<a href='//www.liveinternet.ru/click' " +
                            "target=_blank><img src='//counter.yadro.ru/hit?t14.6;r" +
                            escape(document.referrer) + ((typeof (screen) == "undefined") ? "" :
                            ";s" + screen.width + "*" + screen.height + "*" + (screen.colorDepth ?
                                    screen.colorDepth : screen.pixelDepth)) + ";u" + escape(document.URL) +
                            ";" + Math.random() +
                            "' alt='' title='LiveInternet: показано число просмотров за 24" +
                            " часа, посетителей за 24 часа и за сегодня' " +
                            "border='0' width='88' height='31'><\/a>")
                    //--></script><!--/LiveInternet-->
            </div>
        </div>
    </body>
</html>
