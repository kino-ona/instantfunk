<header class="header">
	<div class="header__container">
		<h1 class="logo">
			<a href="#" class="logo__link"><span class="a11y">INSTANTPUNK</span></a>
		</h1>
		<div class="nav">
			<div class="nav__container">
				<button type="button" class="nav__trigger">
					<i class="nav__ico"></i>
					SHOP
				</button>
				<div class="nav__layer">
					<nav class="nav__menu nav__menu--category">
						<ul class="nav__list">
							<li class="nav__item"><a href="#" class="nav__link">ALL</a></li>
							<li class="nav__item"><a href="#" class="nav__link">OUTER</a></li>
							<li class="nav__item"><a href="#" class="nav__link">TOP</a></li>
							<li class="nav__item"><a href="#" class="nav__link">BOTTOM</a></li>
							<li class="nav__item"><a href="#" class="nav__link">ACC</a></li>
							<li class="nav__item"><a href="#" class="nav__link">ETC</a></li>
						</ul>
					</nav>
					<nav class="nav__menu nav__menu--theme">
						<ul class="nav__list">
							<li class="nav__item"><a href="#" class="nav__link">MID SEASON OFF</a></li>
							<li class="nav__item"><a href="#" class="nav__link">INSTANTFUNK GOLF</a></li>
							<li class="nav__item"><a href="#" class="nav__link">22SS PART3</a></li>
							<li class="nav__item"><a href="#" class="nav__link">22SS PART2</a></li>
							<li class="nav__item"><a href="#" class="nav__link">22SS DENIM & SWEAT</a></li>
						</ul>
					</nav>
					<div class="nav__carousel nav__carousel--campaign">
						<p class="nav__text">Instant campaign <span>®</span></p>
						<div class="carousel">
							<div class="carousel__mask">
								<p class="carousel__loop">
									<span class="carousel__text">Instant campaign <span>®</span></span>
									<span class="carousel__text">Instant campaign <span>®</span></span>
									<span class="carousel__text">Instant campaign <span>®</span></span>
									<span class="carousel__text">Instant campaign <span>®</span></span>
									<span class="carousel__text">Instant campaign <span>®</span></span>
									<span class="carousel__text">Instant campaign <span>®</span></span>
								</p>
								<p class="carousel__loop">
									<span class="carousel__text">Instant campaign <span>®</span></span>
									<span class="carousel__text">Instant campaign <span>®</span></span>
									<span class="carousel__text">Instant campaign <span>®</span></span>
									<span class="carousel__text">Instant campaign <span>®</span></span>
									<span class="carousel__text">Instant campaign <span>®</span></span>
									<span class="carousel__text">Instant campaign <span>®</span></span>
								</p>
							</div>
						</div>
					</div>
				</div>
				<button type="button" class="nav__trigger">CLOSET</button>
				<div class="nav__layer">@@if (login === 'true') {
					<nav class="nav__menu">
						<ul class="nav__list">
							<li class="nav__item"><a href="#" class="nav__link">MYPAGE</a></li>
							<li class="nav__item"><a href="#" class="nav__link nav__link--cart">CART <span>(3)</span></a></li>
							<li class="nav__item"><a href="#" class="nav__link">MEMBERSHIP</a></li>
							<li class="nav__item"><a href="#" class="nav__link">SIGN OUT</a></li>
						</ul>
					</nav>
					<div class="nav__carousel">
						<div class="carousel">
							<div class="carousel__mask">
								<p class="carousel__loop">
									<span class="carousel__text">Welcom Chan123</span>
									<span class="carousel__text">Welcom Chan123</span>
									<span class="carousel__text">Welcom Chan123</span>
									<span class="carousel__text">Welcom Chan123</span>
									<span class="carousel__text">Welcom Chan123</span>
									<span class="carousel__text">Welcom Chan123</span>
								</p>
								<p class="carousel__loop">
									<span class="carousel__text">Welcom Chan123</span>
									<span class="carousel__text">Welcom Chan123</span>
									<span class="carousel__text">Welcom Chan123</span>
									<span class="carousel__text">Welcom Chan123</span>
									<span class="carousel__text">Welcom Chan123</span>
									<span class="carousel__text">Welcom Chan123</span>
								</p>
							</div>
						</div>
					</div>}@@if (login !== 'true') {
					<nav class="nav__menu">
						<ul class="nav__list">
							<li class="nav__item"><a href="#" class="nav__link">LOGIN</a></li>
							<li class="nav__item"><a href="#" class="nav__link">JOIN</a></li>
							<li class="nav__item"><a href="#" class="nav__link">CART</a></li>
							<li class="nav__item"><a href="#" class="nav__link">MEMBERSHIP</a></li>
						</ul>
					</nav>}
				</div>
			</div>
		</div>
		<div class="header__right">
			<div class="search">
				<button type="button" class="search__trigger">
					<span class="a11y">검색</span>
				</button>
			</div>
			<button type="button" class="header__funkplay">
				<span class="a11y">FUNK PLAY 보기</span>
			</button>
		</div>
	</div>
</header>