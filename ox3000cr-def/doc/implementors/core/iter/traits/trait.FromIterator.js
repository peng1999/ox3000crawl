(function() {var implementors = {};
implementors["bytes"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html\" title=\"trait core::iter::traits::FromIterator\">FromIterator</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt; for <a class=\"struct\" href=\"bytes/struct.BytesMut.html\" title=\"struct bytes::BytesMut\">BytesMut</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html\" title=\"trait core::iter::traits::FromIterator\">FromIterator</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt; for <a class=\"struct\" href=\"bytes/struct.Bytes.html\" title=\"struct bytes::Bytes\">Bytes</a>",];
implementors["futures"] = ["impl&lt;F:&nbsp;<a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html\" title=\"trait core::iter::traits::FromIterator\">FromIterator</a>&lt;F&gt; for <a class=\"struct\" href=\"futures/stream/struct.FuturesUnordered.html\" title=\"struct futures::stream::FuturesUnordered\">FuturesUnordered</a>&lt;F&gt;","impl&lt;F:&nbsp;<a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html\" title=\"trait core::iter::traits::FromIterator\">FromIterator</a>&lt;F&gt; for <a class=\"struct\" href=\"futures/stream/struct.FuturesOrdered.html\" title=\"struct futures::stream::FuturesOrdered\">FuturesOrdered</a>&lt;F&gt;",];
implementors["hyper"] = ["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html\" title=\"trait core::iter::traits::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"hyper/header/struct.HeaderView.html\" title=\"struct hyper::header::HeaderView\">HeaderView</a>&lt;'a&gt;&gt; for <a class=\"struct\" href=\"hyper/header/struct.Headers.html\" title=\"struct hyper::header::Headers\">Headers</a>",];
implementors["selectors"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html\" title=\"trait core::iter::traits::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"selectors/matching/struct.StyleRelations.html\" title=\"struct selectors::matching::StyleRelations\">StyleRelations</a>&gt; for <a class=\"struct\" href=\"selectors/matching/struct.StyleRelations.html\" title=\"struct selectors::matching::StyleRelations\">StyleRelations</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html\" title=\"trait core::iter::traits::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"selectors/matching/struct.ElementSelectorFlags.html\" title=\"struct selectors::matching::ElementSelectorFlags\">ElementSelectorFlags</a>&gt; for <a class=\"struct\" href=\"selectors/matching/struct.ElementSelectorFlags.html\" title=\"struct selectors::matching::ElementSelectorFlags\">ElementSelectorFlags</a>",];
implementors["smallvec"] = ["impl&lt;A:&nbsp;<a class=\"trait\" href=\"smallvec/trait.Array.html\" title=\"trait smallvec::Array\">Array</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html\" title=\"trait core::iter::traits::FromIterator\">FromIterator</a>&lt;A::<a class=\"type\" href=\"smallvec/trait.Array.html#associatedtype.Item\" title=\"type smallvec::Array::Item\">Item</a>&gt; for <a class=\"struct\" href=\"smallvec/struct.SmallVec.html\" title=\"struct smallvec::SmallVec\">SmallVec</a>&lt;A&gt;",];
implementors["tendril"] = ["impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html\" title=\"trait core::iter::traits::FromIterator\">FromIterator</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.char.html\">char</a>&gt; for <a class=\"struct\" href=\"tendril/struct.Tendril.html\" title=\"struct tendril::Tendril\">Tendril</a>&lt;<a class=\"struct\" href=\"tendril/fmt/struct.UTF8.html\" title=\"struct tendril::fmt::UTF8\">UTF8</a>, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"tendril/trait.Atomicity.html\" title=\"trait tendril::Atomicity\">Atomicity</a>,&nbsp;</span>","impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html\" title=\"trait core::iter::traits::FromIterator\">FromIterator</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt; for <a class=\"struct\" href=\"tendril/struct.Tendril.html\" title=\"struct tendril::Tendril\">Tendril</a>&lt;<a class=\"struct\" href=\"tendril/fmt/struct.Bytes.html\" title=\"struct tendril::fmt::Bytes\">Bytes</a>, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"tendril/trait.Atomicity.html\" title=\"trait tendril::Atomicity\">Atomicity</a>,&nbsp;</span>","impl&lt;'a, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html\" title=\"trait core::iter::traits::FromIterator\">FromIterator</a>&lt;&amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt; for <a class=\"struct\" href=\"tendril/struct.Tendril.html\" title=\"struct tendril::Tendril\">Tendril</a>&lt;<a class=\"struct\" href=\"tendril/fmt/struct.Bytes.html\" title=\"struct tendril::fmt::Bytes\">Bytes</a>, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"tendril/trait.Atomicity.html\" title=\"trait tendril::Atomicity\">Atomicity</a>,&nbsp;</span>","impl&lt;'a, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html\" title=\"trait core::iter::traits::FromIterator\">FromIterator</a>&lt;&amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"tendril/struct.Tendril.html\" title=\"struct tendril::Tendril\">Tendril</a>&lt;<a class=\"struct\" href=\"tendril/fmt/struct.UTF8.html\" title=\"struct tendril::fmt::UTF8\">UTF8</a>, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"tendril/trait.Atomicity.html\" title=\"trait tendril::Atomicity\">Atomicity</a>,&nbsp;</span>","impl&lt;'a, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html\" title=\"trait core::iter::traits::FromIterator\">FromIterator</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">&amp;'a [</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"tendril/struct.Tendril.html\" title=\"struct tendril::Tendril\">Tendril</a>&lt;<a class=\"struct\" href=\"tendril/fmt/struct.Bytes.html\" title=\"struct tendril::fmt::Bytes\">Bytes</a>, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"tendril/trait.Atomicity.html\" title=\"trait tendril::Atomicity\">Atomicity</a>,&nbsp;</span>","impl&lt;'a, F, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html\" title=\"trait core::iter::traits::FromIterator\">FromIterator</a>&lt;&amp;'a <a class=\"struct\" href=\"tendril/struct.Tendril.html\" title=\"struct tendril::Tendril\">Tendril</a>&lt;F, A&gt;&gt; for <a class=\"struct\" href=\"tendril/struct.Tendril.html\" title=\"struct tendril::Tendril\">Tendril</a>&lt;F, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"tendril/fmt/trait.Format.html\" title=\"trait tendril::fmt::Format\">Format</a> + 'a,<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"tendril/trait.Atomicity.html\" title=\"trait tendril::Atomicity\">Atomicity</a>,&nbsp;</span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
