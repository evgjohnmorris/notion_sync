/**
 * Generated Tool: workspacesTool_0698
 * Domain: Workspaces
 * ID: 0698
 */
exports.workspacesTool_0698 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0698:', error);
    throw error;
  }
};
