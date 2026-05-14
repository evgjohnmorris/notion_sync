/**
 * Generated Tool: workspacesTool_0537
 * Domain: Workspaces
 * ID: 0537
 */
exports.workspacesTool_0537 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0537:', error);
    throw error;
  }
};
