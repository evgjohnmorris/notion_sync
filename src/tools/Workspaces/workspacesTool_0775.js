/**
 * Generated Tool: workspacesTool_0775
 * Domain: Workspaces
 * ID: 0775
 */
exports.workspacesTool_0775 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0775:', error);
    throw error;
  }
};
