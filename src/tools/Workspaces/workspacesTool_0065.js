/**
 * Generated Tool: workspacesTool_0065
 * Domain: Workspaces
 * ID: 0065
 */
exports.workspacesTool_0065 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0065:', error);
    throw error;
  }
};
