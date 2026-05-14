/**
 * Generated Tool: workspacesTool_0115
 * Domain: Workspaces
 * ID: 0115
 */
exports.workspacesTool_0115 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0115:', error);
    throw error;
  }
};
