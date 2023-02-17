import React from "react";
import { useTranslation } from "react-i18next";

function LoginPanel() {
	const { t } = useTranslation("login");

	return <div>{t("login")}</div>;
}

export default LoginPanel;
